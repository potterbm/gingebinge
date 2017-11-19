import { Animated, View } from 'react-native';
import { ImmutableVirtualizedList }   from 'react-native-immutable-list-view';
import Image                          from './Image';
import Immutable                      from 'immutable';
import PropTypes                      from 'prop-types';
import React, { PureComponent }       from 'react';
import styles                         from './styles';

const AnimatedFlatList = Animated.createAnimatedComponent(ImmutableVirtualizedList);

export default class App extends PureComponent {
  static propTypes = {
    images : PropTypes.instanceOf(Immutable.Map),
  }

  getImageKey = (item) => `image-${item.get('id')}`

  scrollPosition = new Animated.Value(0)

  handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: this.scrollPosition } } }],
    { useNativeDriver : true },
  )

  renderImage = ({ index, item }) => (
    <Image { ...{
      image : item,
      index,
      value : this.scrollPosition,
    } } />
  )

  render() {
    return (
      <View style={ styles.Root }>
        <AnimatedFlatList
          directionalLockEnabled
          horizontal
          immutableData={ this.props.images.get('loaded') }
          keyboardDismissMode="on-drag"
          keyExtractor={ this.getImageKey }
          onScroll={ this.handleScroll }
          pagingEnabled
          renderItem={ this.renderImage }
          showsHorizontalScrollIndicator={ false }
          snapToAlignment="center"
        />
      </View>
    );
  }
}
