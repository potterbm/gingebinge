import { Image, View }          from 'react-native';
import Immutable                from 'immutable';
import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class App extends PureComponent {
  static propTypes = {
    image : PropTypes.instanceOf(Immutable.Map),
  }

  render() {
    const {
      uri,
    } = this.props.image;

    return (
      <View style={ styles.Root }>
        <Image style={ styles.Image } source={{ uri }} />
      </View>
    );
  }
}
