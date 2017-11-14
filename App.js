import { PureComponent } from 'react';
import AppRoot           from './components/AppRoot';
import store             from './store';


export default class App extends PureComponent {
  render() {
    return (
      <AppRoot store={ store } />
    );
  }
}
