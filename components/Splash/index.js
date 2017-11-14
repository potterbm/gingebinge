import { Text, View } from 'react-native';
import Button         from '../Button';
import React          from 'react';
import styles         from './styles';

export default class Splash extends React.Component {
  render() {
    return (
      <View style={ styles.Root }>
        <View style={ styles.TextContainer }>
          <Text style={ styles.Title }>GingeBinge</Text>
          <Text style={ styles.SubTitle }>
            A celebrations of the ginger lifestyle
          </Text>
        </View>

        <View style={ styles.Callout }>
          <Button color="red">Sign Up</Button>
          <Button color="transparent">Have an account? Log in</Button>
        </View>
      </View>
    );
  }
}
