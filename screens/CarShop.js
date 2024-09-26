import React from "react";
import { View, Text, Image, ScrollView,TouchableOpacity, TextInput } from "react-native";

const CarShop = ({navigation}) => {

    return (
<ScrollView style={{backgroundColor:'white'}}>
        <View >
             <Text style={{fontSize:16,fontWeight:600,margin:40}}>Catagories</Text>
             <View style={{flex:3,flexDirection:'row',height:250,justifyContent:'space-evenly'}}>
              
               <View>
                   <View style={{height:90,width:90,borderWidth:2,borderColor:'rgba(89, 89, 89, 0.1)',borderRadius:10}}>
                   <Image source={require('../assets/images/cart1.png')} style={{margin:17}}/>
                   <Text style={{color:'rgba(57, 57, 57, 1)',fontSize:10,fontWeight:600,marginTop:-10,marginLeft:10}}>Car Perfumes</Text></View>
                   <View style={{marginTop:20,height:90,width:90,borderWidth:2,borderColor:'rgba(89, 89, 89, 0.1)',borderRadius:10}}>           
                   <Image source={require('../assets/images/cart3.png')}  style={{marginLeft:25,marginTop:15}} /></View>
                   <Text style={{color:'rgba(57, 57, 57, 1)',fontSize:10,fontWeight:600,marginTop:-20,marginLeft:12}}>Car Cleaners</Text>
                   <View style={{marginTop:27,height:90,width:90,borderWidth:2,borderColor:'rgba(89, 89, 89, 0.1)',borderRadius:10}}>
                   <Image source={require('../assets/images/cart7.png')}  style={{marginTop:10,marginLeft:20}}/></View>
                   <Text style={{color:'rgba(57, 57, 57, 1)',fontSize:10,fontWeight:600,marginTop:-17,marginLeft:25}}>Snacks</Text>             
               </View>

               <View>
                   <View style={{height:90,width:90,borderWidth:2,borderColor:'rgba(89, 89, 89, 0.1)',borderRadius:10}}>
                   <Image source={require('../assets/images/cart2.png')} style={{margin:17}}/></View>
                   <Text style={{color:'rgba(57, 57, 57, 1)',fontSize:10,fontWeight:600,marginTop:-20,marginLeft:10}}>Mobile Holders</Text>
                   <View style={{marginTop:27,height:90,width:90,borderWidth:2,borderColor:'rgba(89, 89, 89, 0.1)',borderRadius:10}}>           
                   <Image source={require('../assets/images/cart6.png')}  style={{margin:17}} /></View>
                   <Text style={{color:'rgba(57, 57, 57, 1)',fontSize:10,fontWeight:600,marginTop:-20,marginLeft:25}}>Utilities</Text>
                   <View style={{marginTop:27,height:90,width:90,borderWidth:2,borderColor:'rgba(89, 89, 89, 0.1)',borderRadius:10}}>
                   <Image source={require('../assets/images/cart8.png')}  style={{margin:17}}/></View>
                   <Text style={{color:'rgba(57, 57, 57, 1)',fontSize:10,fontWeight:600,marginTop:-20,marginLeft:23}}>Speakers</Text>
               </View>
               <View>
                   <View style={{height:90,width:90,borderWidth:2,borderColor:'rgba(89, 89, 89, 0.1)',borderRadius:10}}>
                   <Image source={require('../assets/images/cart5.png')} style={{margin:15}}/></View>
                   <Text style={{color:'rgba(57, 57, 57, 1)',fontSize:10,fontWeight:600,marginTop:-20,marginLeft:20}}>Car Covers</Text>
                   <View style={{marginTop:27,height:90,width:90,borderWidth:2,borderColor:'rgba(89, 89, 89, 0.1)',borderRadius:10}}>           
                   <Image source={require('../assets/images/cart4.png')}  style={{margin:15,marginTop:25}} /></View>
                   <Text style={{color:'rgba(57, 57, 57, 1)',fontSize:10,fontWeight:600,marginTop:-20,marginLeft:25}}>Chargers</Text>
                   <View style={{marginTop:27,height:90,width:90,borderWidth:2,borderColor:'rgba(89, 89, 89, 0.1)',borderRadius:10}}>
                   <Image source={require('../assets/images/cart9.png')}  style={{margin:15}}/></View>
                   <Text style={{color:'rgba(57, 57, 57, 1)',fontSize:10,fontWeight:600,marginTop:-20,marginLeft:23}}>Cushions</Text>
               </View>
             </View>

              <View style={{height:40,width:300,borderColor:'rgba(26, 158, 117, 1)',
                        backgroundColor:'rgba(240, 255, 250, 1)',borderWidth:1,marginTop:150,marginLeft:40,borderRadius:10}}>
                  <Text style={{textAlign:'center',color:'rgba(26, 158, 117, 1)',marginTop:10}}>View More</Text>
                  <Image source={require('../assets/images/more3.png')} style={{marginLeft:200,marginTop:-16}} />
              </View>




             

        </View>
        </ScrollView>
    )
}

export default CarShop;