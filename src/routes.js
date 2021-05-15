import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './core/assets/styles';
import { primaryColor } from './core/assets/styles/colors';
import AppConfig from './config';
import MovieList from './screens/MovieList';

const headerNavigator = {
	title: AppConfig.appName,
	headerTintColor: primaryColor,
	headerStyle: styles.headerStyle,
	headerBackTitleVisible: false,
	headerBackTitle: null
};

const Stack = createStackNavigator();

const MainNavigator = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="Movies" component={MovieList} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default MainNavigator;
