import { Navigation } from 'react-native-navigation';
import { iconsLoaded, iconsMap } from './utils';

import { HomeScreen, DetailScreen, DrawerScreen, LightboxScreen } from './screens';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Detail', () => DetailScreen);
Navigation.registerComponent('Drawer', () => DrawerScreen);
Navigation.registerComponent('LightboxScreen', () => LightboxScreen);

iconsLoaded.then(() => {
	Navigation.startSingleScreenApp({
		screen: {
			screen: 'Home',
			title: 'Home Screen',
			navigatorButtons: {
				leftButtons: [
					{
						id: "sideDrawerToggle",
						icon: iconsMap.bars,
					}
				]
			},
			navigatorStyle: {
				largeTitle: true,
				topBarElevationShadowEnabled: true,
				statusBarTextColorScheme: 'light',
				navBarBackgroundColor: '#3498db',
				navBarButtonColor: '#FFFFFF'
			}
		},
		drawer: {
			left: {
				screen: 'Drawer'
			}
		}
	});
}).catch(error => {
	console.error(error);
});