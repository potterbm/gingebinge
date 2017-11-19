import {
  Animated,
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native';
import Immutable                       from 'immutable';
import PropTypes                       from 'prop-types';
import React, { PureComponent }        from 'react';
import styles                          from './styles';

const SCALE_IN  = 1;
const SCALE_OUT = 0.95;

const FADE_IN  = 1;
const FADE_OUT = 0;

const TITLE_FADE_IN  = 1;
const TITLE_FADE_OUT = 0;

const TITLE_SLIDE_IN  = 0;
const TITLE_SLIDE_OUT = -100;

export default class App extends PureComponent {
  static propTypes = {
    image        : PropTypes.instanceOf(Immutable.Map),
    index        : PropTypes.number,
    totalItems   : PropTypes.number,
  }

  getInputRange = () => {
    const { index } = this.props;
    const { width } = Dimensions.get('window');

    if (index === 0) {
      return [
        0,         // in
        width,     // out
        width + 1, // stay out
      ];
    }

    if (index === 1) {
      return [
        0,               // out
        width,           // in
        width * 2,       // out
        (width * 2) + 1, // stay out
      ];
    }

    return [
      0,                         // stay out
      width * (index - 1),       // out
      width * index,             // in,
      width * (index + 1),       // out
      (width * (index + 1)) + 1, // stay out
    ];
  }

  getFadeOutputRange = () => {
    const { index } = this.props;

    if (index === 0) return [FADE_IN, FADE_OUT, FADE_OUT];
    if (index === 1) return [FADE_OUT, FADE_IN, FADE_OUT, FADE_OUT];

    return [
      FADE_OUT,
      FADE_OUT,
      FADE_IN,
      FADE_OUT,
      FADE_OUT,
    ];
  }

  getScaleOutputRange = () => {
    const { index } = this.props;

    if (index === 0) return [SCALE_IN, SCALE_OUT, SCALE_OUT];
    if (index === 1) return [SCALE_OUT, SCALE_IN, SCALE_OUT, SCALE_OUT];

    return [
      SCALE_OUT,
      SCALE_OUT,
      SCALE_IN,
      SCALE_OUT,
      SCALE_OUT,
    ];
  }

  getTitleFadeOutputRange = () => {
    const { index } = this.props;

    if (index === 0) return [TITLE_FADE_IN, TITLE_FADE_OUT, TITLE_FADE_OUT];
    if (index === 1) return [TITLE_FADE_OUT, TITLE_FADE_IN, TITLE_FADE_OUT, TITLE_FADE_OUT];

    return [
      TITLE_FADE_OUT,
      TITLE_FADE_OUT,
      TITLE_FADE_IN,
      TITLE_FADE_OUT,
      TITLE_FADE_OUT,
    ];
  }

  getTitleSlideOutputRange = () => {
    const { index } = this.props;

    if (index === 0) return [TITLE_SLIDE_IN, TITLE_SLIDE_OUT, TITLE_SLIDE_OUT];
    if (index === 1) return [TITLE_SLIDE_OUT, TITLE_SLIDE_IN, TITLE_SLIDE_OUT, TITLE_SLIDE_OUT];

    return [
      TITLE_SLIDE_OUT,
      TITLE_SLIDE_OUT,
      TITLE_SLIDE_IN,
      TITLE_SLIDE_OUT,
      TITLE_SLIDE_OUT,
    ];
  }

  render() {
    const { image } = this.props;

    return (
      <Animated.View style={ [styles.Root, {
        opacity   : this.props.value.interpolate({
          inputRange  : this.getInputRange(),
          outputRange : this.getFadeOutputRange(),
        }),
        transform : [{
          scale : this.props.value.interpolate({
            inputRange  : this.getInputRange(),
            outputRange : this.getScaleOutputRange(),
          }),
        }],
      }] }>
        <Animated.View style={ [styles.HeadlineWrapper, {
          opacity   : this.props.value.interpolate({
            inputRange  : this.getInputRange(),
            outputRange : this.getTitleFadeOutputRange(),
          }),
          transform : [{
            translateY : this.props.value.interpolate({
              inputRange  : this.getInputRange(),
              outputRange : this.getTitleSlideOutputRange(),
            }),
          }],
        }] }>
          <Text style={ styles.Headline }>{ image.get('title') }</Text>
        </Animated.View>

        <View style={ styles.ImageWrapper }>
          <Image style={ styles.Image } source={{ uri : image.get('uri') }} />
        </View>
      </Animated.View>
    );
  }
}
