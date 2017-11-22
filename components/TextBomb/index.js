import { TouchableHighlight, Text, View } from 'react-native';
// import Button         from '../Button';
import React          from 'react';
import styles         from './styles';

export default class TextBomb extends React.Component {
  render() {
    return (
      <View style={ styles.Root }>
        <View style={ styles.TextContainer }>
          <Text style={ styles.Title }>Text Bomb</Text>
          <Text style={ styles.SubTitle }>your friends</Text>
        </View>

        <View style={ styles.Callout }>
          <TouchableHighlight
            onPress={ this.handlePress }
            style={ styles.ContactsButton }
          >
            <Text style={ styles.ContactsButtonText }>Choose a Contact</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
