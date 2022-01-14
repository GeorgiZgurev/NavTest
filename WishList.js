import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button} from "react-native";

const image = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/bbb28730722579.562ff1394f903.jpg" };

const WishList = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Just do it</Text>

     <View style = {[{ width: "100%", justifyContent: 'center', alignItems: 'center', marginTop: '0.1%'}]}>
      <Button onPress={()=> alert('Your order was finished')}
      title = 'Finished Order'
      color = '#606060'
     />
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
});


export default WishList;