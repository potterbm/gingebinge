import { TabBarIOS }            from 'react-native';
import containerFactory         from '../../containers/factory';
import ImageList                from '../ImageList';
import Immutable                from 'immutable';
import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import Splash                   from '../Splash';
import SubmitPhoto              from '../SubmitPhoto';
import TextBomb                 from '../TextBomb';

export default containerFactory(class AppRoot extends PureComponent {
  static propTypes = {
    auth        : PropTypes.instanceOf(Immutable.Map),
    authActions : PropTypes.objectOf(PropTypes.func).isRequired,
    images      : PropTypes.instanceOf(Immutable.Map),
    ui          : PropTypes.instanceOf(Immutable.Map),
    uiActions   : PropTypes.objectOf(PropTypes.func).isRequired,
  }

  render() {
    const {
      auth,
      authActions,
      images,
      ui,
      uiActions,
    } = this.props;

    if (!auth.get('isLoggedIn')) {
      return (
        <Splash { ...{
          auth,
          authActions,
        } } />
      );
    }

    return (
      <TabBarIOS selectedTab={ ui.get('selectedTab') }
        itemPositioning="auto"
      >
        <TabBarIOS.Item
          systemIcon="most-viewed"
          onPress={ () => uiActions.setSelectedTab('image-list') }
          selected={ ui.get('selectedTab') === 'image-list' }
        >
          <ImageList { ...{
            images,
          } } />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="contacts"
          onPress={ () => uiActions.setSelectedTab('text-bomb') }
          selected={ ui.get('selectedTab') === 'text-bomb' }
        >
          <TextBomb />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="downloads"
          onPress={ () => uiActions.setSelectedTab('submit-photo') }
          selected={ ui.get('selectedTab') === 'submit-photo' }
        >
          <SubmitPhoto />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});
