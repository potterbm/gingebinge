import {
  Text,
  View,
} from 'react-native';
import Button from '../shared/Button';
import React          from 'react';
import styles         from './styles';
import typography     from '../../typography';

export default class Splash extends React.Component {
  render() {
    return (
      <View style={ styles.Root }>
        <View style={ styles.TextContainer }>
          <Text style={ [typography.h1, styles.Title] }>GET</Text>
          <Text style={ [typography.h1, styles.Title] }>SHIT</Text>
          <Text style={ [typography.h1, styles.Title] }>DONE</Text>
        </View>

        <View style={ styles.Callout }>
          <Button color="red">Sign Up</Button>
          <Button color="transparent">Have an account? Log in</Button>
        </View>
      </View>
    );
  }
}
