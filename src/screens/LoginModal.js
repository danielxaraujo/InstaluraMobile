import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { HomeScreen } from './HomeScreen'

export default class LoginModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		this.setState({ isLogged: true });
	}
	render() {
		return (
			<ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Button
					title="Fazer Login"
					onPress={() => {
						this.props.navigator.dismissModal({});
						Navigation.startSingleScreenApp({
							screen: {
								screen: 'Home',
								title: 'Home Screen',
								navigationStyle: {
									navBarHidden: true
								},
								navigatorButtons: {
									leftButtons: [
										{
											id: "sideDrawerToggle",
											icon: iconsMap.bars,
										}
									]
								}
							},
							drawer: {
								left: {
									screen: 'Drawer',
								}
							}
						});					
					}}
				/>
			</ScrollView>
		)
	}
}