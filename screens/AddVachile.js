import React from "react";
import { View,Image,Text } from "react-native";


const AddVachile = ()=>{

    return(
        <View>
        <View>  
           <Image source={require('../assets/images/vachilebg.png')} style={{height:200,width:400,marginTop:-20}}/>
        </View>
            <View style={{height:250,width:300,borderWidth:0.2,marginTop:30,marginLeft:45,borderRadius:5}}>
                   <Text style={{fontSize:16,fontWeight:500,marginLeft:10,marginTop:20}}> Add Your Vehicle </Text>
                   <Text style={{color:'rgba(160, 160, 160, 1)',marginLeft:15,marginTop:10}}>The vehicle number should match with       your RC document</Text>
                <View style={{height:40,width:250,borderWidth:1,borderColor:'rgba(26, 158, 117, 1)',marginLeft:20,marginTop:30,borderRadius:5}}>
                    <Text style={{color:'rgba(175, 175, 175, 1)',textAlign:'center',padding:9}}>Eg: ACXXGXXXX</Text>
                </View>
                <View style={{height:30,width:250,backgroundColor:'rgba(26, 158, 117, 1)',marginLeft:20,marginTop:20,borderRadius:13}}>
                      <Text style={{color:'rgba(255, 255, 255, 1)',textAlign:'center',padding:4,fontSize:15}}>Add New</Text>
                </View>
            </View> 

        <Image source={require('../assets/images/backg.png')} style={{height:200,width:200,marginTop:30,marginLeft:90 }}/>


        </View>
    );
};
export default AddVachile;