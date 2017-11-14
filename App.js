import AppRoot                  from './components/AppRoot';
import React, { PureComponent } from 'react';
import store                    from './store';


export default class App extends PureComponent {
  render() {
    return (
      <AppRoot store={ store } />
    );
  }
}
