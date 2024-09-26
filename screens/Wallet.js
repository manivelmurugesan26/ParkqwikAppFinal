import React from "react";
import { View,Image,Text, TouchableOpacity,TextInput} from "react-native";


const Wallet = ({navigation})=>{

    return(
        <View style={{backgroundColor:'white',height:1000}}>
             <View style={{height:80,width:330,backgroundColor:'rgba(249, 249, 249, 1)',marginLeft:30,marginTop:30,borderRadius:15}}>
                <Image source={require('../assets/images/wallet2.png')} style={{marginLeft:15,marginTop:20,height:40,width:40}}/>
                <Text style={{marginLeft:60,marginTop:-40,fontWeight:500}}>ParkQwik Wallet</Text>
                <Text style={{color:'rgba(26, 158, 117, 1)',marginLeft:60,marginTop:8}}>Available Balance:</Text>
             </View>
     
             <Text style={{marginLeft:30,marginTop:30,fontSize:17,fontWeight:600}}>Enter Amount</Text>
             <TextInput
       
       style={{height:30,width:300,borderWidth:0.5,marginLeft:40,marginTop:30,borderRadius:6}}
       placeholder="       Eg:   100"
       keyboardType="numeric"
       
     />
     <Image source={require('../assets/images/rupee.png')} style={{height:15,marginTop:-22,marginLeft:40}} />
         
    <View style={{flexDirection:'row'}}>
 
            <View style={{height:35,width:60,borderWidth:0.5,borderColor:'rgba(26, 158, 117, 1)',backgroundColor:'rgba(240, 255, 250, 1)',borderRadius:10,marginLeft:45,marginTop:50}}>
            <Image source={require('../assets/images/currency.png')} style={{marginLeft:10,marginTop:12}} />
            <Text style={{color:'rgba(26, 158, 117, 1)',marginLeft:22,marginTop:-17}}>200</Text>
            </View>

            <View style={{height:35,width:60,borderWidth:0.5,borderColor:'rgba(26, 158, 117, 1)',backgroundColor:'rgba(240, 255, 250, 1)',borderRadius:10,marginLeft:20,marginTop:50}}>
            <Image source={require('../assets/images/currency.png')} style={{marginLeft:10,marginTop:12}} />
            <Text style={{color:'rgba(26, 158, 117, 1)',marginLeft:22,marginTop:-17}}>500</Text>
            </View>

            <View style={{height:35,width:60,borderWidth:0.5,borderColor:'rgba(26, 158, 117, 1)',backgroundColor:'rgba(240, 255, 250, 1)',borderRadius:10,marginLeft:20,marginTop:50}}>
            <Image source={require('../assets/images/currency.png')} style={{marginLeft:10,marginTop:12}} />
            <Text style={{color:'rgba(26, 158, 117, 1)',marginLeft:22,marginTop:-17}}>700</Text>
            </View>

            <View style={{height:35,width:60,borderWidth:0.5,borderColor:'rgba(26, 158, 117, 1)',backgroundColor:'rgba(240, 255, 250, 1)',borderRadius:10,marginLeft:20,marginTop:50}}>
            <Image source={require('../assets/images/currency.png')} style={{marginLeft:10,marginTop:12}} />
            <Text style={{color:'rgba(26, 158, 117, 1)',marginLeft:22,marginTop:-17}}>900</Text>
            </View>
        </View>

<TouchableOpacity onPress={() => navigation.navigate('Payment')}>
        <View style={{height:30,width:300,backgroundColor:'rgba(26, 158, 117, 1)',marginLeft:40,marginTop:40,borderRadius:13}} >
                      <Text style={{color:'rgba(255, 255, 255, 1)',textAlign:'center',padding:4,fontSize:15}} >Add New</Text>
                </View>
</TouchableOpacity>



<View style={{flexDirection:'row',marginTop:10}}>
<View style={{ 
height:150, width:200, 
backgroundColor:'rgba(26, 158, 117, 0.8) rgba(26, 158, 117, 1) rgba(166, 167, 101, 1)' ,
borderRadius:20,marginLeft:20,marginTop:50}}>
<Text style={{fontSize:15,marginLeft:15,marginTop:10,color:'rgba(255, 255, 255, 1)',color:'rgba(251, 255, 41, 1)'}}>Get 15% off on </Text>
<Text style={{fontSize:15,marginLeft:12,marginTop:5,color:'rgba(255, 255, 255, 1)'}}> FASTag recharge</Text>
<Text style={{fontSize:9,marginLeft:12,marginTop:5,color:'rgba(255, 255, 255, 1)'}}> Pay using Axis Bank Credit & Debit Cards</Text>

<Image style={{marginLeft:110,marginTop:30}} source={require('../assets/images/fastag.png')} /> 

<View style={{height:18,width:80,marginLeft:12,marginTop:-20,borderWidth:1,backgroundColor:'white',borderRadius:8,borderColor:'white'}}>
    <Text style={{fontSize:8,padding:2,marginLeft:8}}> Recharge  Now   </Text>
</View>
<View>
</View>
</View>


<View style={{ 
      height:150, width:200, 
      backgroundColor:'rgba(27, 83, 228, 1),rgba(38, 138, 255, 1)',
      borderRadius:20,marginLeft:10,marginTop:50}}>
        <Text style={{fontSize:15,marginLeft:15,marginTop:10,color:'rgba(255, 255, 255, 1)',color:'rgba(251, 255, 41, 1)'}}>Reserve a Parking Slot</Text>
        <Text style={{fontSize:10,marginLeft:15,marginTop:5,color:'rgba(255, 255, 255, 1)'}}>Win 300ml petrol on your first {"\n"}parking!</Text>
        <Image style={{height:40,width:40,marginLeft:140,marginTop:10}} source={require('../assets/images/explore.png')} /> 
       
        <View style={{height:18,width:80,marginLeft:12,marginTop:-23,borderWidth:1,backgroundColor:'white',borderRadius:8,borderColor:'white'}}>
            <Text style={{fontSize:8,padding:2,marginLeft:10}}> Explore  Now   </Text>
        </View>
        <View>
        </View>
        </View>
        </View>

        <View style={{height:60,width:350,backgroundColor:'rgba(240, 255, 250, 1)',marginTop:30,marginLeft:20,borderRadius:10}}>
    <Image source={require('../assets/images/cart.png')} style={{marginLeft:30,marginTop:20}} />
    <Text style={{fontSize:14,marginLeft:100,marginTop:-22}}>Saved Cards</Text>
    <Image source={require('../assets/images/arovs.png')} style={{marginLeft:300,marginTop:-20}} />
    </View>



        </View>
    );
};
export default Wallet;



