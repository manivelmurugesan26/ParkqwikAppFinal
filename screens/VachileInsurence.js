import { useState } from "react";
import React  from "react";
import { View ,Text, Image, TextInput, TouchableOpacity,ScrollView,navigation} from "react-native";




const VachileInsurence = ({navigation})=>{
  
    return(

       <View >
   <ScrollView>
              <View style={{height:200,width:340,backgroundColor:'rgba(196, 64, 244, 1)',marginTop:20,marginLeft:25,borderRadius:30}}  >
                 <Text style={{color:'white',fontSize:25,marginLeft:20,marginTop:20}}>Get Your Car Insurance Today!</Text>
                 <Text style={{marginTop:10,color:'white',marginLeft:20}}>Starting @ 799/month*</Text>
              
                 <View style={{height:30,width:100,marginLeft:20,marginTop:20,borderWidth:1,backgroundColor:'white',borderRadius:20,borderColor:'white'}}>
    <Text style={{fontSize:12,padding:5,marginLeft:12,fontWeight:500,fontStyle:'Poppins',color:'black'}}> View Plan  </Text>
   </View>  
      </View>

             <View style={{height:60,width:330,marginLeft:30,marginTop:20,backgroundColor:'rgba(249, 249, 249, 1)'}}>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
              <Image source={require('../assets/images/evcar.png')} />
              <Text style={{fontWeight:600}}>Car</Text>
              <View style={{height:20,width:2,borderWidth:1,backgroundColor:'rgba(228, 228, 228, 1)',rotation:'-90 deg',borderColor:'rgba(228, 228, 228, 1)'}} />
              <Image source={require('../assets/images/twowheeler.png')}  style={{marginTop:4}} />
              <Text style={{fontWeight:600}}>Bike</Text>
              <View style={{height:20,width:2,borderWidth:1,backgroundColor:'rgba(228, 228, 228, 1)',rotation:'-90 deg',borderColor:'rgba(228, 228, 228, 1)'}} />
              <Image source={require('../assets/images/auto.png')} />
              <Text style={{fontWeight:600}}>Auto</Text>
              <View style={{height:20,width:2,borderWidth:1,backgroundColor:'rgba(228, 228, 228, 1)',rotation:'-90 deg',borderColor:'rgba(228, 228, 228, 1)'}} />
              <Image source={require('../assets/images/electric.png')} /> 
              <Text style={{fontWeight:600}}>EvCar</Text>
              </View>
             </View>

             <TextInput
       style={{height:30,width:300,borderWidth:0.5,marginLeft:40,marginTop:30,borderRadius:6}}
       placeholder="                 Enter Your Vehicle Number"
       keyboardType='default' />
<TouchableOpacity>
     <View style={{height:50,width:300,backgroundColor:'rgba(26, 158, 117, 1)',marginLeft:40,marginTop:30,borderRadius:15 }} >
      <Text style={{color:'white',fontWeight:600,textAlign:'center',marginTop:13,fontSize:17 }}
        onPress={() => navigation.navigate('VachileInsurence2')} >View Quotes </Text>
     </View> 
</TouchableOpacity>
   
     <View style={{height:70,width:350,backgroundColor:'rgba(240, 255, 250, 1)',marginTop:30,marginLeft:20,borderRadius:10}}>
    <Image source={require('../assets/images/insurance.png')} style={{marginLeft:30,marginTop:20,height:30,width:50}} />
    <Text style={{fontSize:14,marginLeft:90,marginTop:-25}}>Renew Your Vehicle Insurance</Text>
    <Image source={require('../assets/images/arovs.png')} style={{marginLeft:310,marginTop:-20}} />
    </View>

<Text style={{marginLeft:30,marginTop:30,fontWeight:600,fontSize:18}}>FAQs</Text>
<TouchableOpacity>
 <View style={{height:60,width:330,marginTop:30,marginLeft:30,backgroundColor:'white',borderRadius:15}}>
  <Text style={{marginLeft:30,marginTop:20,fontSize:16}}>Why do I need car insurance?</Text>
  <Image source={require('../assets/images/more4.png')} style={{marginLeft:280,marginTop:-25,rotation:'-180 deg'}} />
 </View>
</TouchableOpacity> 

<TouchableOpacity>
 <View style={{height:70,width:330,marginTop:30,marginLeft:30,backgroundColor:'white',borderRadius:15}}>
  <Text style={{marginLeft:30,marginTop:20,fontSize:16}}>What does car insurance typically {"\n"}cover?</Text>
  <Image source={require('../assets/images/more4.png')} style={{marginLeft:280,marginTop:-40,rotation:'-180 deg'}} />
 </View>
</TouchableOpacity> 

<TouchableOpacity>
 <View style={{height:60,width:330,marginTop:30,marginLeft:30,backgroundColor:'white',borderRadius:15}}>
  <Text style={{marginLeft:30,marginTop:10,fontSize:16}}>Is it necessary to notify my insurance company if I modify my car?</Text>
  <Image source={require('../assets/images/more4.png')} style={{marginLeft:280,marginTop:-25,rotation:'-180 deg'}} />
 </View>
</TouchableOpacity> 


<View style={{ 
height:180, width:320, 
backgroundColor:' rgba(239, 102, 59, 1)',
borderRadius:20,marginLeft:40,marginTop:50}}>

<Text style={{fontSize:25,marginLeft:12,marginTop:12,color:'rgba(255, 255, 255, 1)'}}>Get Your Bike Insured
Today!</Text>
<Text style={{fontSize:15,marginLeft:10,marginTop:8,color:'rgba(255, 255, 255, 1)'}}> Starting @ 
    <Image source={require('../assets/images/rupees.png')}  />299/month*</Text>

<Image style={{marginLeft:190,marginTop:-55}} source={require('../assets/images/scooty.png')}  /> 

<View style={{height:30,width:90,marginLeft:12,marginTop:-25,borderWidth:1,backgroundColor:'white',borderRadius:20,borderColor:'white'}}>
    <Text style={{fontSize:13,padding:5,marginLeft:8,fontWeight:500,fontStyle:'Poppins'}}> View Plan  </Text>
</View>
<View>
</View>
</View>    
     
     
<View style={{ 
height:180, width:320, 
backgroundColor:' rgba(27, 95, 228, 1)',
borderRadius:20,marginLeft:40,marginTop:50}}>

<Text style={{fontSize:25,marginLeft:12,marginTop:12,color:'rgba(255, 255, 255, 1)'}}>Drive Assured, Drive Insured!</Text>
<Text style={{fontSize:15,marginLeft:10,marginTop:8,color:'rgba(255, 255, 255, 1)'}}> Starting @ 
    <Image source={require('../assets/images/rupees.png')}  />499/month*</Text>

<Image style={{marginLeft:180,marginTop:-30}} source={require('../assets/images/autoguy.png')}  /> 

<View style={{height:30,width:90,marginLeft:12,marginTop:-25,borderWidth:1,backgroundColor:'white',borderRadius:20,borderColor:'white'}}>
    <Text style={{fontSize:13,padding:5,marginLeft:8,fontWeight:500,fontStyle:'Poppins'}}> View Plan  </Text>
</View>
<View>
</View>
</View>



   
   
   
</ScrollView>
       </View>
    )


}


export default VachileInsurence;