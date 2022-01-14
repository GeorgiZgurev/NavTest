import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, backgroundColor } from 'react-native'

const image = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/bbb28730722579.562ff1394f903.jpg" };


class Inputs extends Component {
   state = {
      email: '',
      password: '',
      phoneNumber:'',
      shoesNumber: ''
   }
   
   
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   handlePhoneNumber = (number) =>{
      this.setState({phoneNumber: number})
   }
   handleshoesNumber = (number) =>{
      this.setState({shoesNumber: number})
   }

   login = (email, pass, phoneNumber, shoesnumber) => {
      alert('You are ready!')
   }
  
   render() {
      return (
        
         <View style = {styles.container}>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "PhoneNumber"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlePhoneNumber}/>

         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "ShoesNumber"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleshoesNumber}/>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password, this.state.phoneNumber, this.state.shoesNumber)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#909090',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#909090',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'Black'
   }
  
})