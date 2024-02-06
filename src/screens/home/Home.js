import { ScrollView, Text, View ,Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { styles } from './home.style'
import ProductCartComponents from '../../components/ProductCartComponents'
import { Button } from '@rneui/base'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/feature/cartSlice'


const Home = ({navigation}) => {

  const cart =useSelector(state=>state.cart.value)
  const dispatch=useDispatch()

  const [products, setProducts]=useState([])

  useEffect(() => {
    getProducts()
  },[])

  const goCategory=()=>{
        navigation.navigate('Category')
  }
  const getProducts = async () => {
    try {
      let product = await axios.get('http://localhost:9000/product/getAll')
      setProducts(product.data.products)
      //console.log(product)
    } catch (error) {
      console.log(error)
      //console.log('Get All Products Error',error)
    }
  }

  const handleAddToCart=(item) =>{
    dispatch(addToCart(item))
  }


  return (
   <View style={styles.container}>
      {/* {
        products.map((product,key)=>(
          <ProductCartComponents key={key} product={product}/>
        ))
      } */}
      <View style={styles.cartContainer}>
        <Button title={`${cart}`} onPress={() => navigation.navigate('Cart')} style={styles.cartButton}/>
      </View>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCartComponents product={item} onPress={()=>handleAddToCart(item)}/>}
        keyExtractor={item=> item._id}
      
      />
      {/* <Button title='Go to Category' onPress={goCategory} color={'indianred'}/> */}
 
    </View>
  )
  
}

export default Home
