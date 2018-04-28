import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { rootNavigator } from './HomeScreen'

export default class DrawerScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Screen</Text>
				<Button
					title="Details..."
					onPress={() => {
						rootNavigator.toggleDrawer({});
						rootNavigator.push({ screen: 'Detail', title: 'Detail Screen' });
					}}
				/>
			</View>
		);
	}
}