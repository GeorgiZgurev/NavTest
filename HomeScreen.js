import React from 'react';
import { TextInput ,View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { Button, ScrollView, TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import {FontAwesome} from '@expo/vector-icons';



export default function HomeScreen() {
  const navigation = useNavigation();


  return (

 

    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.subContainer}>
            <View style={styles.headerContainer}>
                <View style={{flexDirection: 'row',}}>
                    
                </View>
            </View>
        </View>
        
                        
                   

<ScrollView horizontal>

        <View style = {styles.buttons}>
            <Button title='Wishlist' onPress={()=> navigation.navigate('WishList')}/>
            <Button title='Contact form' onPress={()=> navigation.navigate('Inputs')} />
        </View>

        </ScrollView>


        
        <ScrollView horizontal >
        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Product')}>
            <Image style={styles.productImg} resizeMode="contain" source={require('./assets/OIP.jpg')}></Image>
            <Text style={styles.cardTitle}>Special Price</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:10}}>
                <Text>AIR MAX 270</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'red', fontWeight:'bold', marginBottom:1}}> $200</Text>
                </View>
                <Button onPress={()=> alert('The product has been edin to your card')}
                title= 'Buy'
                color = 'black' />
                
                   
            </View>
            
        </TouchableOpacity>


        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Product')}>
            <Image style={styles.productImg} resizeMode="contain" source={require('./assets/OIP1.jpg')}></Image>
            <Text style={styles.cardTitle}>Special Price</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:10}}>
                <Text>AIR MAX PLUS</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'red', fontWeight:'bold', marginBottom:1}}> $150</Text>
                    </View> 
                <Button onPress={()=> alert('Your order was finished')}
                title= 'Buy'
                color ='black' />


            </View>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Product')}>
            <Image style={styles.productImg} resizeMode="contain" source={require('./assets/OIP4.jpg')}></Image>
            <Text style={styles.cardTitle}>Special Price</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:10}}>
                <Text>AIR MAX 2021</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'red', fontWeight:'bold', marginBottom:1}}> $330</Text>
                </View>
                <Button onPress={()=> alert('Your order was finished')}
                title= 'Buy'
                color ='black' />
               
            </View>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Product')}>
            <Image style={styles.productImg} resizeMode="contain" source={require('./assets/OIP5.jpg')}></Image>
            <Text style={styles.cardTitle}>Special Price</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:10}}>
                <Text>AIR MAX 2020</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'red', fontWeight:'bold', marginBottom:1}}> $300</Text>
                   
                </View>
                <Button onPress={()=> alert('Your order was finished')}
                title= 'Buy'
                color = 'black' />
               
            </View>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Product')}>
            <Image style={styles.productImg} resizeMode="contain" source={require('./assets/OIP6.jpg')}></Image>
            <Text style={styles.cardTitle}>Special Price</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:10}}>
                <Text>AIR MAX 2021 FK</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'red', fontWeight:'bold', marginBottom:1}}> $180</Text>
                </View>
                <Button onPress={()=> alert('Your order was finished')}
                title= 'Buy'
                color ='black' />
                
            </View>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Product')}>
            <Image style={styles.productImg} resizeMode="contain" source={require('./assets/OIP7.jpg')}></Image>
            <Text style={styles.cardTitle}>Special Price</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:10}}>
                <Text>AIR MAX 95</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'red', fontWeight:'bold', marginBottom:1}}> $140</Text>
                </View>
                <Button onPress={()=> alert('Your order was finished')}
                title= 'Buy'
                color = 'black' />
               
            </View>
            
        </TouchableOpacity>


        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Product')}>
            <Image style={styles.productImg} resizeMode="contain" source={require('./assets/OIP8.jpg')}></Image>
            <Text style={styles.cardTitle}>Special Price</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:10}}>
                <Text>AIR MAX LTR</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'red', fontWeight:'bold', marginBottom:1}}> $300</Text>
                </View>
                <Button onPress={()=> alert('Your order was finished')}
                title= 'Buy'
                color ='black' />
               
            </View>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Product')}>
            <Image style={styles.productImg} resizeMode="contain" source={require('./assets/OIP.jpg')}></Image>
            <Text style={styles.cardTitle}>Special Price</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:10}}>
                <Text>AIR MAX 270</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'red', fontWeight:'bold', marginBottom:1}}> $210</Text>
                </View>
                <Button onPress={()=> alert('The product has been edin to your card')}
                title= 'Buy'
                color = 'black' />
                
                   
            </View>
            
        </TouchableOpacity>
        </ScrollView>

        <View style={styles.nearContainer}>
            <View>
            <Text style={styles.viewAll}>View All Offers</Text>
            </View>
            
        </View>

        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.restaurantsContainer}
        >
            
            <View style={styles.restaurants}>
                <Image style={styles.restaurantImg} resizeMode="contain" source={require('./assets/Max1.jpg')}></Image>
                <View>
                    <Text>AIR MAX Sport</Text>
                    <Text style={styles.priceSymbol}>290 $</Text>
                    <Button onPress={()=> alert('Your order was finished')}
                title= 'Buy' />
                </View>
            </View>
            <View style={styles.restaurants}>
                <Image style={styles.restaurantImg} resizeMode="contain" source={require('./assets/Max4.jpg')}></Image>
                <View>
                    <Text>AIR MAX Sport</Text>
                    <Text style={styles.priceSymbol}>290 $</Text>
                    <Button onPress={()=> alert('Your order was finished')}
                title= 'Buy' />
                </View>
            </View>

            <View style={styles.restaurants}>
                <Image style={styles.restaurantImg} resizeMode="contain" source={require('./assets/Max7.jpg')}></Image>
                <View>
                    <Text>AIR MAX Sport</Text>
                    <Text style={styles.priceSymbol}>290 $</Text>
                    <Button onPress={()=> alert('Your order was finished')}
                title= 'Buy' />
                </View>
            </View>

            <View style={styles.restaurants}>
                <Image style={styles.restaurantImg} resizeMode="contain" source={require('./assets/max8.jpg')}></Image>
                <View>
                    <Text>AIR MAX Sport</Text>
                    <Text style={styles.priceSymbol}>290 $</Text>
                    <Button onPress={()=> alert('Your order was finished')}
                title= 'Buy' />
                </View>
            </View>

            <View style={styles.restaurants}>
                <Image style={styles.restaurantImg} resizeMode="contain" source={require('./assets/max9.jpg')}></Image>
                <View>
                    <Text>AIR MAX Sport</Text>
                    <Text style ={styles.priceSymbol}>290 $</Text>
                    <Button onPress={()=> alert('Your order was finished')}
                title= 'Buy' />
                </View>
            </View>

           
        </ScrollView>

        <View style={styles.navigation}>
            <View style={{flexDirection: 'row', flex: 1.2}}>
                <View style={{alignItems: 'center', flex: 1}}>
                    <FontAwesome onClick={()=>{alert('From requests: warek@abv.bg')}} name='home' size={30} color='#f0f0f0'></FontAwesome>
                   
                </View>
                <View style={{alignItems: 'center', flex: 1}}>
                    <FontAwesome onClick={()=>{alert('NBU Sofia')}} name='map-marker' size={30} color='#f0f0f0'></FontAwesome>
                </View>
                <View style={{alignItems: 'center', flex: 1}}>
                    <FontAwesome onClick={()=>{alert('Georgi Zgurev F102260')}} name='user' size={30} color='#f0f0f0'></FontAwesome>
                </View>
            </View>
        </View>


    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#909090',
        
    },
    subContainer:{
    backgroundColor: '#909090',
    paddingTop: 10,
    paddingBottom: 10,       
    },
   
    
    card:{
        width:160,
        backgroundColor: '#f0f0f0',
        paddingBottom:15,
        paddingTop: 85,
        paddingHorizontal: 15,
        overflow: 'visible',
        zIndex:10,
        marginTop:50,
        marginLeft:20,
        borderRadius:10
    },
    productImg:{
        height: 110,
        width: 110,
        position: 'absolute',
        left: 25,
        top: 0
    },
    cardTitle: {
        fontSize: 18,
        marginTop: 30,
        fontWeight: 'bold'
    },
    nearContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginVertical: 15
    },
    nearTitle: {
        fontWeight: 'bold',
         
        
    },
   
    viewAll: {
        fontWeight: 'bold',
        paddingBottom: 36,
    },
    restaurantsContainer:{
        marginLeft: 25
    },
    restaurants: {
        padding: 15,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center'
    },
    restaurantImg:{
        height: 160,
        width: 160,
        marginRight: 10
    },
    navigation:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: 'black'
    },
    buttons:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginLeft: '20',
        justifyContent: 'space-around',
        paddingHorizontal: 600,
           marginTop: '0.3%',
           
    },

    input: {
        height: 20,
        width: 130,
        margin: 1,
        borderWidth: 1,
        padding: 5,
       
      },

        


})
