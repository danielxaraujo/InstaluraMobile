import { Navigation } from 'react-native-navigation';
import { iconsLoaded, iconsMap } from './utils';

import { HomeScreen, DetailScreen, DrawerScreen, LightboxScreen, LoginModal } from './screens';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Detail', () => DetailScreen);
Navigation.registerComponent('Drawer', () => DrawerScreen);
Navigation.registerComponent('LightboxScreen', () => LightboxScreen);
Navigation.registerComponent('LoginModal', () => LoginModal);

iconsLoaded.then(() => {
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
}).catch(error => {
	console.error(error);
});