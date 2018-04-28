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
	};
	showLightBox = () => {
		this.props.navigator.showLightBox({
			screen: 'LightboxScreen',
			passProps: {
				title: 'LightBox',
				content: 'Hey there, I\'m a light box screen :D',
				onClose: this.dismissLightBox,
			},
			style: {
				backgroundBlur: 'dark',
				backgroundColor: 'rgba(0, 0, 0, 0.7)',
				tapBackgroundToDismiss: true
			}
		});
	};
	dismissLightBox = () => {
		this.props.navigator.dismissLightBox();
	};
	render() {
		return (
			<ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Button
					title="Go to Details"
					onPress={() => this.props.navigator.push({ screen: 'Detail', title: 'Detail Screen' })}
				/>
				<Button
					title="Show LighBox"
					onPress={ this.showLightBox }
				/>
			</ScrollView>
		);
	}
}