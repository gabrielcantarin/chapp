import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import DrawerHeader from './components/DrawerHeader';
import SettingsScreen from './components/SettingsScreen';

const MyApp = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
}, {
    contentComponent: props =>
      <DrawerHeader {...props} />
  })


export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyApp />
    );
  }
}



