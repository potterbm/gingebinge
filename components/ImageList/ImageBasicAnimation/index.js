import {
  Animated,
  Easing,
  Image,
  Text,
  View,
} from 'react-native';
import Immutable                       from 'immutable';
import PropTypes                       from 'prop-types';
import React, { PureComponent }        from 'react';
import styles                          from './styles';

export default class App extends PureComponent {
  static propTypes = {
    image        : PropTypes.instanceOf(Immutable.Map),
    index        : PropTypes.number,
    isScrolling  : PropTypes.bool,
    viewingIndex : PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.titleAnimation = new Animated.Value(props.index === props.viewingIndex ? 1 : 0);
  }

  componentWillReceiveProps({ isScrolling, viewingIndex }) {
    const {
      index,
      isScrolling: wasScrolling,
      viewingIndex: wasViewingIndex,
    } = this.props;

    if (wasViewingIndex === index && !wasScrolling && isScrolling) {
      this.animateOutTitle();
    }

    if (wasViewingIndex !== index && viewingIndex === index) {
      this.animateInTitle();
    }
  }

  animateOutTitle = () => Animated.timing(
    this.titleAnimation,
    {
      duration : 300,
      easing   : Easing.ease,
      toValue  : 0,
    },
  ).start()

  animateInTitle = () => Animated.timing(
    this.titleAnimation,
    {
      duration : 300,
      easing   : Easing.ease,
      toValue  : 1,
    },
  ).start()

  render() {
    const {
      image,
    } = this.props;

    return (
      <View style={ styles.Root }>
        <Animated.View style={ [styles.HeadlineWrapper, {
          opacity   : this.titleAnimation,
          transform : [{
            translateY    : this.titleAnimation.interpolate({
              inputRange  : [0, 1],
              outputRange : [-72, 0],
            }),
          }],
        }] }>
          <Text style={ styles.Headline }>{ image.get('title') }</Text>
        </Animated.View>

        <View style={ styles.ImageWrapper }>
          <Image style={ styles.Image } source={{ uri : image.get('uri') }} />
        </View>
      </View>
    );
  }
}
