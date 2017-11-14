import { FlatList, View }                  from 'react-native';
import Immutable                           from 'immutable';
import React, { PureComponent, PropTypes } from 'react';
import styles                              from './styles';

export default class App extends PureComponent {
  static propTypes = {
    images : PropTypes.instanceOf(Immutable.List),
  }

  renderImage() {
    return null;
  }

  render() {
    return (
      <View style={ styles.Root }>
        <FlatList
          data={ this.props.images }
          renderItem={ this.renderImage }
        />
      </View>
    );
  }
}
