import React, { Component } from "react";
import {
  TouchableOpacity
} from "react-native";

//library imports
import { Icon, Container, Content } from 'native-base';

//custom components imports 
import Calculator from './Calculator';

class HomeScreen extends Component {
  static navigationOptions = () => ({
    title: "Home",
    headerLeft:
      <TouchableOpacity>
        <Icon ios='ios-menu' android="md-menu" style={{ paddingLeft: 10, backgroundColor: 'red', }} onPress={() => alert()} />
      </TouchableOpacity>
    ,
    drawerLabel: 'Notification',
  })


  render() {
    return (

      <Container>
        <Content
          contentContainerStyle={{ flex: 1 }}>
          <Calculator onDrawerActivator={() => {
            this.props.navigation.openDrawer()
          }} />
        </Content>

      </Container>

    )
  }

}

export default HomeScreen;


