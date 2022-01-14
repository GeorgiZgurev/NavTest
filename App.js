import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native';
import WishList from './WishList';
import HomeScreen from './HomeScreen';
import Inputs from './Inputs';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      
        <Stack.Screen  name = 'Home' 
         component ={HomeScreen}

          options={{
              title:'JUST DO IT',
            
            headerStyle: {
              backgroundColor: '#909090',
              
          
            }, }}
          /> 

         
         <Stack.Screen name = 'WishList' component ={WishList} options={{title:'WishList'}} />
        <Stack.Screen name = 'Inputs' component ={Inputs} options={{title:'Contact Form' }}/>
        

    </Stack.Navigator>
    </NavigationContainer>
    
  );
}


