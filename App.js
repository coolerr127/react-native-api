import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Main } from './src/pages/Main'
import { Search } from './src/pages/Search'
import { About } from './src/pages/About'

export default function App() {
	const Tab = createBottomTabNavigator();

	function MyTabs() {
		return (
			<Tab.Navigator
				initialRouteName='Feed'
				activeColor='#e91e63'
				labelStyle={{ fontSize: 12 }}
				style={{ backgroundColor: 'tomato' }}
			>
				<Tab.Screen
					name='Main'
					component={Main}
					options={{
						tabBarLabel: 'Main',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name='home'
								color={color}
								size={26}
							/>
						),
					}}
				/>
				<Tab.Screen
					name='Search'
					component={Search}
					options={{
						tabBarLabel: 'Search',
						tabBarIcon: ({ color }) => (
							<Fontisto
								name='search'
								size={26}
								color={color}
							/>
						),
					}}
				/>
				<Tab.Screen
					name='About'
					component={About}
					options={{
						tabBarLabel: 'About',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name='account'
								color={color}
								size={26}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		)
	}

	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	)
}
