import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from "react-native";

import Button from '../common/Button';
import * as Animatable from 'react-native-animatable';

class LoginPage extends Component {
  render() {
    return (

      <View style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle='light-content'
        />
        <View style={styles.imageWrapper}>

          <Animatable.View animation='zoomIn' useNativeDrive={true}>
            <Image
              style={{ height: 130, width: 140 }}
              source={require('./../../img/logo2.png')}
            />

          </Animatable.View>
        </View>

        <View style={styles.buttons}>
          <View style={styles.buttonsWrapper}>
            <Button label={'Log in'} style={{ width: '95%', marginBottom: 4 }} tap={() => { }} />
            <Button filled label={'Create an account'} labelColor={'white'} style={{ width: '95%', marginBottom: 40, }} tap={() => { }} />
          </View>
          <Animatable.View animation={'slideInUp'} useNativeDriver={true}>
             <TouchableOpacity>
            <Text style={{ opacity: 0.7, marginBottom: 100  }}>Skipp it</Text>
          </TouchableOpacity>
          </Animatable.View>
         

        </View>
      </View>

    )
  }

}
const styles = StyleSheet.create({
  buttons: { alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'absolute', bottom: 0, height: 190, padding: 12 },
  buttonsWrapper: { justifyContent: 'center', alignItems: 'center', width: '100%' },
  imageWrapper: { height: 200, alignItems: 'center', justifyContent: 'center', marginTop: 50 }
})
export default LoginPage;


