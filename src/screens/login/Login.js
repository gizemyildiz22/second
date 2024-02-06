import { Button, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './login.style'
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup';
import Toast from 'react-native-toast-message'

const loginSchema= Yup.object().shape({
    email:Yup.string().required('Email is required!').email('Please enter a valid email address'),
    password:Yup.string().required('Password is required').min(6,'Password must be min 6 character')

})

const Login = ({navigation}) => {
    //const [email,setEmail]=useState()
    //const [password,setPassword]=useState()

    const handleLogin = async(values) => {        
        try {
        //    let requestObj = {
        //         email: email,
        //         password: password
        //     }
         let loginResponse= await axios.post('http://localhost:9000/auth/login',values)
         if (loginResponse.data?.token){
          navigation.navigate('Home')
          Toast.show({
            type:'success',
            text1:'Welcome'
          })
         }   
        } catch (error) {
          if(error.response){
            return Toast.show({
              type:'error',
              text1:'Error',
              text2:error.response.data.message
            })
          }
          console.log('Login Error',error.response.data)
        }
    }


  return (
   <View>
     <Formik initialValues={{email:'',password:''}} onSubmit={values => handleLogin(values)}
     validationSchema={loginSchema}
     >

        {({handleChange, values,handleSubmit,touched,errors,handleBlur}) => (
            <>
             <View style={styles.container}>
                <Text >Email</Text>
                <TextInput 
                onChangeText={handleChange('email')} 
                onBlur={handleBlur('email')}
                value={values.email} 
                style={styles.input} 
                keyboardType='email-address'/>
                {errors.email && touched.email ?
                <Text style={styles.error}>{errors.email}</Text>:null}
             </View>
             <View style={styles.container}>
              <Text >Password</Text>
              <TextInput 
              onChangeText={handleChange('password')} 
              onBlur={handleBlur('password')}
              value={values.password} 
              style={styles.input}
              secureTextEntry={true}/>
              {errors.password && touched.password ?
                <Text style={styles.error}>{errors.password}</Text>:null}
             </View>
             <View style={styles.buttonStyle}>
               <Button title='Login' onPress={handleSubmit} color={'indianred'}/>
             </View>
           </>
        )}
        
     </Formik>
   </View>
  )
}

export default Login
