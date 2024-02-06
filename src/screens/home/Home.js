import { ScrollView, Text, View ,Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { styles } from './home.style'
import ProductCartComponents from '../../components/ProductCartComponents'


const Home = ({navigation}) => {

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


  return (
   <>
      {/* {
        products.map((product,key)=>(
          <ProductCartComponents key={key} product={product}/>
        ))
      } */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCartComponents product={item}/>}
        keyExtractor={item=> item._id}
      
      />
      {/* <Button title='Go to Category' onPress={goCategory} color={'indianred'}/> */}
 
    </>
  )
  
}

export default Home
