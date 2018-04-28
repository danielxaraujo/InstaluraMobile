import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    onNavigatorEvent = event => {
        console.log(event);
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({});
            }
        }
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigator.push({ screen: 'Detail', title: 'Detail Screen' })}
                />
            </ScrollView>
        );
    }
}