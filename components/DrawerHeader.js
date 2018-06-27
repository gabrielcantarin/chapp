import React, { Component } from 'react';
import { Image, Text, View, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation';

import { Thumbnail } from 'native-base'

class DrawerHeader extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (

            <ScrollView style={{ backgroundColor: '#dddddd' }}>

                <View style={styles.profile}>
                    <View>
                        <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/680053476500631552/Yvw3yGfe_400x400.jpg' }} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.userName}>Gabriel Cantarin</Text>
                        <Text style={styles.amount}>R$ 430,00</Text>
                    </View>
                </View>
                <View style={styles.cause}>
                    <View>
                        <Text style={styles.supportCauseTitle}>You are Supporting</Text>
                        <Text style={styles.supportCauseName}>Animals Cause</Text>
                    </View>
                    <View>
                        <Image style={styles.causeImage} source={{ uri: 'https://www.clipartqueen.com/image-files/paw-prints-clipart-cat-paw.png' }} />
                    </View>
                </View>
                <DrawerItems {...this.props} />
            </ScrollView >
        )
    }

}
const styles = StyleSheet.create({
    profile: {
        paddingTop: StatusBar.currentHeight + 16, flexDirection: 'row', padding: 16, height: 150, alignItems: 'center', backgroundColor: 'black'
    },
    userName: {
        fontWeight: 'bold', color: 'white', fontSize: 16
    },
    amount: {
        color: 'white',
        fontSize: 12
    },
    textContainer: {
        marginLeft: 16
    },

    cause: {
        height: 60,
        width: '100%',
        backgroundColor: '#00b9a2',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        justifyContent: 'space-between',
    },
    causeImage: {
        width: 40, height: 40
    },
    supportCauseTitle: {
        color: 'white', opacity: 0.7, fontSize: 12
    },
    supportCauseName: {
        color: 'white', fontSize: 16, fontWeight: 'bold'
    }


})

export default DrawerHeader

