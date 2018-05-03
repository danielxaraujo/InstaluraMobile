import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';

export default class DetailScreen extends Component {
	static navigatorStyle = {
		largeTitle: true,
		topBarElevationShadowEnabled: true,
		statusBarTextColorScheme: 'light',
		navBarBackgroundColor: '#3498db',
		navBarButtonColor: '#FFFFFF',
	}
	render() {
		return (
			<ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Screen</Text>
				<Button
					title="Voltar"
					onPress={() => this.props.navigator.pop({})}
				/>
			</ScrollView>
		);
	}
}