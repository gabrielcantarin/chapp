import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import DrawerHeader from './components/DrawerHeader';
import SettingsScreen from './components/SettingsScreen';
import LoginPage from './components/auth/LoginPage';

const MyApp = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  },
  Login: {
    screen: LoginPage
  }
}, {
  initialRouteName:'Home',
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



