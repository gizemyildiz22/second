import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Card,Button } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient'; 

const ProductCartComponents = ({product,onPress}) => {
  return (
    <View  style={styles.container}>
        <Card.Title >{product.name}</Card.Title>
        <Card.Divider />
       <View style={{ position: "relative", alignItems: "center" }}>
           <Image
             style={{ width: "100%", height: 200 }}
             resizeMode="contain"
             source={{ uri: product.image }}
            />
         <Text style={styles.price}>{product.price}$</Text>
       </View>
       <Button
         style={styles.button}
         onPress={onPress}
         ViewComponent={LinearGradient}
         linearGradientProps={{
         colors: ["blueviolet", "pink"],
         start: { x: 0, y: 0.5 },
         end: { x: 1, y: 0.5 },
         }}
       >
       Add to Cart
       </Button>
 </View>       
  )
}

export default ProductCartComponents

const styles = StyleSheet.create({
  price:{
    fontSize:20,
    margin:10,
    fontWeight:'700'

  },
  button:{
    marginHorizontal:100,
    marginBottom:50
  }
})