import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function About() {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Text style={{ fontWeight: 'bold', fontSize: 30 }}>
				981063{'\n'}
				{'\n'}Шиманович Антон Васильевич{'\n'}
				{'\n'}ЛР №2
			</Text>
		</View>
	)
}
