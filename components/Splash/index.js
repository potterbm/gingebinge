// import { LoginButton }         from 'react-native-fbsdk';
import { TouchableHighlight, Text, View }           from 'react-native';
import Expo                     from 'expo';
import Immutable                from 'immutable';
import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Splash extends PureComponent {
  static propTypes = {
    auth        : PropTypes.instanceOf(Immutable.Map),
    authActions : PropTypes.objectOf(PropTypes.func).isRequired,
  }

  state = {
    error : '',
  }

  handlePress = () => {
    Expo.Facebook.logInWithReadPermissionsAsync('1972178509773694', {
      behavior    : 'web',
      permissions : ['email', 'public_profile', 'user_friends'],
    })
      .then((response) => {
        console.log(response);
        // Returns
        // {
        //   expires : 1516304416,
        //   type : 'success',
        //   token : 'EAAcBr5eCO34BALHASMEmIX0Ydlt6TXVnVl2tMX3XeFUx9BibdxMZC64ZCKvIjJ6HSqr8v57qcBVD8jLsI93jTagfiXZBdixCC52E4qGjZBqeUE3OE9LbPEKS2HzTjsQ7OAKWwrTQHcDY6UPqkGXG8so5XwZAsBCiDZA04Hxrx23cgQMwuEQo54JryrqXjtapkz7iNZAmnVNgK88GZAIOvbZB3zkhFIaqGk40ZD',
        // }
      });
  }

  // handleLoginFinished = (error, result) => {
  //   if (error) {
  //     return this.setState({
  //       error : `Login failed with error: ${result.error}`,
  //     });
  //   }
  //
  //   if (result.isCancelled) {
  //     return this.setState({ error : 'Login was cancelled' });
  //   }
  //
  //   console.log(result);
  //
  //   return this.props.authActions.setAuth(true);
  // }
  //
  // handleLogoutFinished = () => this.props.authActions.setAuth(false)

  renderError() {
    if (this.state.error === '') return null;

    return <Text style={ styles.Error }>{ this.state.error }</Text>;
  }

  render() {
    return (
      <View style={ styles.Root }>
        <View style={ styles.TextContainer }>
          <Text style={ styles.Title }>Ginge Binge</Text>
          <Text style={ styles.SubTitle }>
            A celebrations of the ginger lifestyle
          </Text>
        </View>

        <View style={ styles.Callout }>
          <TouchableHighlight
            onPress={ this.handlePress }
            style={ styles.FacebookButton }
          >
            <Text style={ styles.FacebookButtonText }>Log In With Facebook</Text>
          </TouchableHighlight>
          { this.renderError() }
        </View>
      </View>
    );
  }
}
