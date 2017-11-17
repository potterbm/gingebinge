import { View }           from 'react-native';
import { ImmutableVirtualizedList } from 'react-native-immutable-list-view';
import Image                        from './Image';
import Immutable                    from 'immutable';
import PropTypes                    from 'prop-types';
import React, { PureComponent }     from 'react';
import styles                       from './styles';

export default class App extends PureComponent {
  static propTypes = {
    images : PropTypes.instanceOf(Immutable.Map),
  }

  getImageKey = (item) => `image-${item.get('id')}`

  renderImage = ({ item }) => <Image image={ item } />

  render() {
    return (
      <View style={ styles.Root }>
        <ImmutableVirtualizedList
          directionalLockEnabled
          horizontal
          immutableData={ this.props.images.get('loaded') }
          keyExtractor={ this.getImageKey }
          pagingEnabled
          renderItem={ this.renderImage }
          showsHorizontalScrollIndicator={ false }
          snapToAlignment="center"
        />
      </View>
    );
  }
}
