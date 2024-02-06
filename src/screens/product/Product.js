import { View, Text, Button } from 'react-native'
import React from 'react'

const Product = ({navigation}) => {
  return (
    <View>
      <Text>Product</Text>
      <Button onPress={() =>navigation.goBack()} title={'Go Back'} color={'indianred'}/>
    </View>
  )
}

export default Product