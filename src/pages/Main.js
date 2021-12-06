import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ProductCard from '../components/ProductCard'

export function Main() {
	const [data, setData] = useState([])
	// const [filterData, setFilterData] = useState<any[]>([]);

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		try {
			axios
			// https://fakestoreapi.com/products
				.get('https://fakestoreapi.com/products')
				.then(res => {
					const allProducts = res.data
					setData(allProducts)
					// const test = await AsyncStorage.setItem(
					// 	'products',
					// 	JSON.stringify(data)
					// )
				})
				// .then(
				// 	console.log(
				// 		'DAAAAAAAATAAAA----------------------------',
				// 		data
				// 	),
				// 	await AsyncStorage.setItem('products', JSON.stringify(data))
				// )
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
	// console.log(data)
	return (
		<ScrollView
			contentContainerStyle={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#ebebeb',
			}}
		>
			{data?.map((v, key) => (
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
			))}
		</ScrollView>
	)
}
