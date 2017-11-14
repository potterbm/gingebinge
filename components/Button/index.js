import { Text, TouchableOpacity } from 'react-native';
import PropTypes                  from 'prop-types';
import React, { PureComponent }   from 'react';
import styles                     from './styles';

export default class Button extends PureComponent {
  static propTypes = {
    // color   : PropTypes.string,
    // onPress : PropTypes.func,
  }

  static defaultProps = {
    // color : 'red',
  }

  render() {
    console.log(PropTypes);
    return (
      <TouchableOpacity
        onPress={ this.props.onPress }
        style={ [
          styles.Root,
          styles[`${this.props.color.toLowerCase()}View`],
        ] }
      >
        <Text style={ [styles.Text, styles[`${this.props.color.toLowerCase()}Text`]] }>
          { this.props.children }
        </Text>
      </TouchableOpacity>
    );
  }
}
