import {Button, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/home/Home'
import Category from './src/screens/category/Category'
import Product from './src/screens/product/Product'
import Login from './src/screens/login/Login'
import Toast from 'react-native-toast-message'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import Cart from './src/screens/cart/Cart'


const Stack=createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name='Category' component={Category}/>
            <Stack.Screen name='Product' component={Product}/>
            <Stack.Screen name='Cart' component={Cart}/>
        </Stack.Navigator>
      </NavigationContainer>
      <Toast/>
    </Provider>
  )
}

export default App

