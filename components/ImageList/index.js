import { FlatList, View }       from 'react-native';
import Image                    from './Image';
import Immutable                from 'immutable';
import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class App extends PureComponent {
  static propTypes = {
    images : PropTypes.instanceOf(Immutable.Map),
  }

  getImageKey = (item) => `image-${item.get('id')}`

  renderImage({ item }) {
    return (
      <Image image={ item } />
    );
  }

  render() {
    return (
      <View style={ styles.Root }>
        <FlatList
          data={ this.props.images.get('loaded') }
          keyExtractor={ this.getImageKey }
          renderItem={ this.renderImage }
        />
      </View>
    );
  }
}
