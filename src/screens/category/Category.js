import { View, Text,Button } from 'react-native'
import React from 'react'

const Category = ({navigation}) => {
    
  return (
    <View>
      <Text>Category</Text>
      <Button onPress={()=> navigation.navigate('Product')} title={'Go to Product'}  color={'indianred'}/>
      <Button onPress={()=>navigation.goBack()} title={'Go Back'}  color={'indianred'}/>


    </View>
  )
}

export default Category