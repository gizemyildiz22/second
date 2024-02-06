import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Card,Button } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient'; 

const ProductCartComponents = ({product}) => {
  return (
    <View  style={styles.container}>
        <Card.Title>{product.name}</Card.Title>
        <Card.Divider />
       <View style={{ position: "relative", alignItems: "center" }}>
           <Image
             style={{ width: "100%", height: 100 }}
             resizeMode="contain"
             source={{ uri: product.image }}
            />
         <Text >{product.price}</Text>
       </View>
       <Button
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

const styles = StyleSheet.create({})