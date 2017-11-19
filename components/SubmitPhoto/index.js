import { Text, View } from 'react-native';
// import Button         from '../Button';
import React          from 'react';
import styles         from './styles';

export default class SubmitPhoto extends React.Component {
  render() {
    return (
      <View style={ styles.Root }>
        <View style={ styles.TextContainer }>
          <Text style={ styles.Title }>GingeBinge</Text>
          <Text style={ styles.SubTitle }>
            A celebrations of the ginger lifestyle
          </Text>
        </View>
      </View>
    );
  }
}
