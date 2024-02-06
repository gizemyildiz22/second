import {Button, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/home/Home'
import Category from './src/screens/category/Category'
import Product from './src/screens/product/Product'
import Login from './src/screens/login/Login'
import Toast from 'react-native-toast-message'


const Stack=createNativeStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name='Category' component={Category}/>
            <Stack.Screen name='Product' component={Product}/>
        </Stack.Navigator>
      </NavigationContainer>
      <Toast/>
    </>
  )
}

export default App

