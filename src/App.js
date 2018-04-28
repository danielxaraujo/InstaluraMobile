import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Icon } from 'react-native-vector-icons/Octicons';
import { registerScreens } from './Navigation';
import { iconsLoaded, iconsMap } from './utils/iconsMap';

import { HomeScreen } from './screens/HomeScreen';
import { DetailScreen } from './screens/DetailScreen';
import { DrawerScreen } from './screens/DrawerScreen';

export function registerScreens() {
	Navigation.registerComponent('Home', () => HomeScreen);
	Navigation.registerComponent('Detail', () => DetailScreen);
	Navigation.registerComponent('Drawer', () => DrawerScreen);
}

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