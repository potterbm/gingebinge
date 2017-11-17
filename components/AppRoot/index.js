// import { TabBarIOS }            from 'react-native';
import containerFactory         from '../../containers/factory';
import ImageList                from '../ImageList';
import Immutable                from 'immutable';
import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import Splash                   from '../Splash';

export default containerFactory(class AppRoot extends PureComponent {
  static propTypes = {
    auth        : PropTypes.instanceOf(Immutable.Map),
    authActions : PropTypes.objectOf(PropTypes.func).isRequired,
    images      : PropTypes.instanceOf(Immutable.Map),
    ui          : PropTypes.instanceOf(Immutable.Map),
    uiActions   : PropTypes.objectOf(PropTypes.func).isRequired,
  }

  render() {
    console.log('app root');
    const {
      auth,
      images,
      // ui,
      // uiActions,
    } = this.props;

    if (!auth.get('isLoggedIn')) {
      return (
        <Splash { ...{
          auth,
        } } />
      );
    }

    return (
      <ImageList { ...{
        images,
      } } />
    );

    // return (
    //   <TabBarIOS selectedTab={ ui.get('selectedTab') }
    //     itemPositioning="auto"
    //   >
    //     <TabBarIOS.Item
    //       systemIcon="most-recent"
    //       onPress={ () => uiActions.setSelectedTab('image-list') }
    //       selected={ ui.get('selectedTab') === 'image-list' }
    //     >
    //       <ImageList { ...{
    //         images,
    //       } } />
    //     </TabBarIOS.Item>
    //   </TabBarIOS>
    // );
  }
});
