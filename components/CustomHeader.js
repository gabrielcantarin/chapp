import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

class CustomHeader extends Component {
    render() {
        return (
            <Header>
                <Left><Icon ios='ios-menu' android="md-menu" onPress={() => this.props.drawerOpen()} /></Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}
export default CustomHeader;
