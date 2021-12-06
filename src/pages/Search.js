import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ProductCard from '../components/ProductCard'

export function Search() {
	const [data, setData] = useState([])
	const [text, setText] = useState('')

	useEffect(() => {
		getData()
	}, [])

	const filteredData = data.filter(item => {
		return item.title.toLowerCase().includes(text.toLowerCase())
	})

	const getData = async () => {
		try {
			axios
				// https://fakestoreapi.com/products
				.get('https://fakestoreapi.com/products')
				.then(res => {
					const allProducts = res.data
					setData(allProducts)
				})
				.catch(async error => {
					{
						const allProductsDB = await AsyncStorage.getItem(
							'products'
						)
						console.log('HI', allProductsDB)
						setData(JSON.parse(allProductsDB))
					}
				})
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<ScrollView
			contentContainerStyle={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<TextInput
				style={{
					height: 40,
					width: '90%',
					margin: 12,
					borderWidth: 1,
					padding: 10,
				}}
				onChangeText={setText}
				value={text}
			/>
			{text ? filteredData?.map((v, key) => (
				<ProductCard
					key={key}
					category={v.category}
					image={v.image}
					title={v.title}
					price={v.price}
					rating={v.rating.rate}
					id={v.id}
					// navigation={navigation}
				></ProductCard>
			)) : null}
		</ScrollView>
	)
}
