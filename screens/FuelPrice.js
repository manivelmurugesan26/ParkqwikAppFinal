import React from "react";
import { View, Text, Image, ScrollView,TouchableOpacity, TextInput } from "react-native";

const FuelPrice = ({navigation}) => {

    return (

        <View style={{backgroundColor:'white',height:1000}}>
           <TextInput
       
       style={{height:40,width:300,borderWidth:0.5,marginLeft:40,marginTop:30,borderRadius:6}}
       placeholder="                            Search for area "
       keyboardType='default'
       
     />


        <Text style={{fontSize:16,fontWeight:600,margin:40}}>Fuel Price In Chennai</Text>


        <View style={{height:150,width:280,borderWidth:3,marginLeft:50,borderRadius:10,borderColor:'rgba(249, 249, 249, 1)'}}>
         <View style={{height:50,width:277,borderTopLeftRadius:10,borderTopRightRadius:10,backgroundColor:'rgba(249, 249, 249, 1)'}}>
            <Image source={require('../assets/images/petrol.png')} style={{marginLeft:25,marginTop:15}} />
            <Text style={{marginLeft:50,marginTop:-20,fontSize:15,fontWeight:600}}>Petrol</Text>
               <View  style={{height:18,width:2,backgroundColor:'rgba(228, 228, 228, 1)  ',marginLeft:130,marginTop:-18}} />
            <Image source={require('../assets/images/petrol.png')} style={{marginLeft:170,marginTop:-18}} />
            <Text style={{marginLeft:195,marginTop:-20,fontSize:15,fontWeight:600}}>Diesel</Text>
         </View>
         <Text style={{marginLeft:20,marginTop:30}}>   ₹105.65                           ₹99.25     </Text>
        </View>
         
        <Image style={{margin:30}} source={require('../assets/images/group.png')} />
          
        </View>
    )
}
export default FuelPrice;