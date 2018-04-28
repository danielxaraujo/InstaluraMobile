import FontAwesome from 'react-native-vector-icons/FontAwesome';

const icons = {
	'bars': { icon: 'bars', size: 24, color: '#FFFFFF', provider: FontAwesome }
}

export const iconsMap = {};
export const iconsLoaded = new Promise((resolve, reject) => {
	new Promise.all(
		Object.keys(icons).map(iconName => {
			const icon = icons[iconName];
			return icon.provider.getImageSource(
				icon.icon,
				icon.size,
				icon.color
			)
		})
	).then(sources => {
		Object.keys(icons).forEach((iconName, idx) => iconsMap[iconName] = sources[idx]);
		resolve(true);
	})
})