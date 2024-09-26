import React from "react";
import { View,StyleSheet,Text,Image } from "react-native";
import MapView from 'react-native-maps';




export default function DetailsScreen () {
    return (
   
                 <View style={styles.container}>
                     <MapView style={styles.map}  />
                     
                     <View style={{height:200,width:400,backgroundColor:'rgba(26, 158, 117, 1)',
                      marginTop:-720}}>
                        <View style={{height:50,width:350,backgroundColor:'rgba(201, 252, 235, 1)',marginTop:40,marginLeft:20}}>
                           <Image source={require('../assets/images/location2.png')} style={{marginTop:18,marginLeft:20}} />
                           <Text style={{color:'rgba(26, 158, 117, 1)',marginLeft:50,marginTop:-20,fontSize:15,fontWeight:500}}>Enter destination or loca...</Text>
                           <View style={{height:30,width:80,backgroundColor:'rgba(26, 158, 117, 1)',marginLeft:250,marginTop:-25,borderRadius:5}}>
                              <Text style={{color:'white',marginLeft:8,marginTop:4}}>Hourly</Text>
                              <Image source={require('../assets/images/more.png')} style={{marginTop:-23,marginLeft:60}} />
                              <Image source={require('../assets/images/more2.png')} style={{marginLeft:60}} />
                           </View>
                        
                      <View style={{height:40,width:140,backgroundColor:'white',marginTop:30}}>
                          <Text style={{padding:10}}>18:30 Today</Text>
                          <Image source={require('../assets/images/more3.png')} style={{marginLeft:100,marginTop:-25}} />
                      </View>
                      <Image source={require('../assets/images/arov2.png')} style={{marginLeft:165,marginTop:-30}} />
                      <View style={{height:40,width:140,backgroundColor:'white',marginLeft:210,marginTop:-31}}>
                          <Text style={{padding:10}}>19:30 Today</Text>
                          <Image source={require('../assets/images/more3.png')} style={{marginLeft:100,marginTop:-25}} />
                      </View>

                        </View>
                      </View>
            
                 </View>
                     
               

    );
  } 
 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });

