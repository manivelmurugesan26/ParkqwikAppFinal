import React from "react";
import { View,Text,Image, ScrollView} from "react-native";

const CarWash = ()=>{

    return(
   
    <ScrollView> 
     <View style={{backgroundColor:'white'}}>

           
<View style={{flexDirection:'row'}}>
  
<View style={{ 
height:180, width:250, 
backgroundColor:' rgba(27, 95, 228, 1)',
borderRadius:20,marginLeft:20,marginTop:50}}>

<Text style={{fontSize:25,marginLeft:12,marginTop:12,color:'rgba(255, 255, 255, 1)'}}>Get Your Car Wash Today</Text>
<Text style={{fontSize:15,marginLeft:10,marginTop:8,color:'rgba(255, 255, 255, 1)'}}> Starting @ 
    <Image source={require('../assets/images/rupees.png')}  />399/-</Text>

<Image style={{marginLeft:140,marginTop:-20}} source={require('../assets/images/carwash.png')}  /> 

<View style={{height:30,width:90,marginLeft:12,marginTop:-25,borderWidth:1,backgroundColor:'white',borderRadius:20,borderColor:'white'}}>
    <Text style={{fontSize:12,padding:5,marginLeft:8,fontWeight:500,fontStyle:'Poppins'}}> Book  Now   </Text>
</View>
<View>
</View>
</View>

<View style={{ 
height:180, width:250, 
backgroundColor:' rgba(239, 102, 59, 1)',
borderRadius:20,marginLeft:20,marginTop:50}}>

<Text style={{fontSize:25,marginLeft:12,marginTop:12,color:'rgba(255, 255, 255, 1)'}}>Get Your Car Wash Today</Text>
<Text style={{fontSize:15,marginLeft:10,marginTop:8,color:'rgba(255, 255, 255, 1)'}}> Starting @ 
    <Image source={require('../assets/images/rupees.png')}  />399/-</Text>

<Image style={{marginLeft:140,marginTop:-20}} source={require('../assets/images/carwash.png')}  /> 

<View style={{height:30,width:90,marginLeft:12,marginTop:-25,borderWidth:1,backgroundColor:'white',borderRadius:20,borderColor:'white'}}>
    <Text style={{fontSize:12,padding:5,marginLeft:8,fontWeight:500,fontStyle:'Poppins'}}> Book  Now   </Text>
</View>
<View>
</View>
</View>

</View>


    <View style={{height:60,width:350,backgroundColor:'rgba(240, 255, 250, 1)',marginTop:30,marginLeft:20,borderRadius:10}}>
    <Image source={require('../assets/images/wash1.png')} style={{marginLeft:30,marginTop:20}} />
    <Text style={{fontSize:14,marginLeft:80,marginTop:-20}}>Book Your Car Wash</Text>
    <Image source={require('../assets/images/arovs.png')} style={{marginLeft:300,marginTop:-20}} />
    </View>

    <View>
        <Text style={{marginTop:25,marginLeft:25,fontSize:17,fontWeight:400}}>Premium Plans</Text>
    </View>

    <View style={{backgroundColor:'rgba(250,220, 220, 5)',height:200,width:350,marginTop:30,marginLeft:20,borderRadius:28}}>
     
           <View style={{marginLeft:-1,height:40,width:120,backgroundColor:'rgba(255, 183, 10, 1)',borderTopLeftRadius:33,borderBottomRightRadius:35}}>
                  <Text style={{color:'white',marginLeft:25,marginTop:10,fontSize:14,fontWeight:600}}>Daily Wash</Text>
           </View>    
                <View style={{marginTop:20,marginLeft:15,flexDirection:'row'}}>
                  <Image source={require('../assets/images/priority.png')} /> 
                     <Text  style={{marginTop:-5,color:'rgba(0, 166, 56, 1)'}}>Exterior Shines</Text>
                  <Image source={require('../assets/images/priority.png')} style={{marginLeft:10}}/>
                     <Text  style={{marginTop:-5,color:'rgba(0, 166, 56, 1)'}}>Wax Coating</Text>
                  <Image source={require('../assets/images/priority.png')} style={{marginLeft:10}}/>
                     <Text style={{marginTop:-5,color:'rgba(0, 166, 56, 1)'}}>Interior Cleaning</Text> 
                  <Image source={require('../assets/images/priority.png')} style={{marginTop:30,marginLeft:-325}}/>
                     <Text style={{marginTop:25,color:'rgba(0, 166, 56, 1)'}}>Alloy Cleans</Text>
                    
                </View>
                
                <Text style={{marginLeft:20,marginTop:10}}>Everything Standard + Everyday Exteri.. See More</Text>
                <Image source={require('../assets/images/rupee.png')} style={{marginLeft:30,marginTop:20}} />
                <Text style={{marginLeft:50,marginTop:-20}}>999/per Month</Text>
                
    <View style={{height:30,width:120,marginLeft:200,marginTop:-25,borderWidth:1,backgroundColor:'black',borderRadius:20,borderColor:'white'}}>
    <Text style={{fontSize:12,padding:5,marginLeft:8,fontWeight:500,fontStyle:'Poppins',color:'white'}}> Subscribe  Now   </Text>
   </View>
    </View>

    <View style={{backgroundColor:'rgba(234, 255, 241, 1)',height:200,width:350,marginTop:30,marginLeft:20,borderRadius:28}}>
     
     <View style={{marginLeft:-1,height:40,width:120,backgroundColor:'rgba(10, 236, 128, 1)',borderTopLeftRadius:33,borderBottomRightRadius:35}}>
            <Text style={{color:'white',marginLeft:25,marginTop:10,fontSize:14,fontWeight:600}}>Daily Wash</Text>
     </View>

    
     <View style={{marginTop:20,marginLeft:15,flexDirection:'row'}}>
                  <Image source={require('../assets/images/priority.png')} /> 
                     <Text  style={{marginTop:-5,color:'rgba(0, 166, 56, 1)'}}>Exterior Shines</Text>
                  <Image source={require('../assets/images/priority.png')} style={{marginLeft:10}}/>
                     <Text  style={{marginTop:-5,color:'rgba(0, 166, 56, 1)'}}>Wax Coating</Text>
                  <Image source={require('../assets/images/priority.png')} style={{marginLeft:10}}/>
                     <Text style={{marginTop:-5,color:'rgba(0, 166, 56, 1)'}}>Interior Cleaning</Text> 
                  <Image source={require('../assets/images/priority.png')} style={{marginTop:30,marginLeft:-325}}/>
                     <Text style={{marginTop:25,color:'rgba(0, 166, 56, 1)'}}>Alloy Cleans</Text>
                    
                </View>
                
                <Text style={{marginLeft:20,marginTop:10}}>Everything Standard + Everyday Exteri.. See More</Text>
                <Image source={require('../assets/images/rupee.png')} style={{marginLeft:30,marginTop:20}} />
                <Text style={{marginLeft:50,marginTop:-20}}>699/per Month</Text>
                
    <View style={{height:30,width:120,marginLeft:200,marginTop:-25,borderWidth:1,backgroundColor:'black',borderRadius:20,borderColor:'white'}}>
    <Text style={{fontSize:12,padding:5,marginLeft:8,fontWeight:500,fontStyle:'Poppins',color:'white'}}> Subscribe  Now   </Text>
   </View>


</View>

    
    <View style={{backgroundColor:'rgba(234, 255, 241, 1)',height:200,width:350,marginTop:30,marginLeft:20,borderRadius:28}}>
     
     <View style={{marginLeft:-1,height:40,width:120,backgroundColor:'rgba(42, 137, 239, 1)',borderTopLeftRadius:33,borderBottomRightRadius:35}}>
            <Text style={{color:'white',marginLeft:25,marginTop:10,fontSize:14,fontWeight:600}}>Daily Wash</Text>
     </View>

     <View style={{marginTop:20,marginLeft:15,flexDirection:'row'}}>
                  <Image source={require('../assets/images/priority.png')} /> 
                     <Text  style={{marginTop:-5,color:'rgba(0, 166, 56, 1)'}}>Exterior Shines</Text>
                  <Image source={require('../assets/images/priority.png')} style={{marginLeft:10}}/>
                     <Text  style={{marginTop:-5,color:'rgba(0, 166, 56, 1)'}}>Wax Coating</Text>
                  <Image source={require('../assets/images/priority.png')} style={{marginLeft:10}}/>
                     <Text style={{marginTop:-5,color:'rgba(0, 166, 56, 1)'}}>Interior Cleaning</Text> 
                  <Image source={require('../assets/images/priority.png')} style={{marginTop:30,marginLeft:-325}}/>
                     <Text style={{marginTop:25,color:'rgba(0, 166, 56, 1)'}}>Alloy Cleans</Text>
                    
                </View>
                
                <Text style={{marginLeft:20,marginTop:10}}>Everything Standard + Everyday Exteri.. See More</Text>
                <Image source={require('../assets/images/rupee.png')} style={{marginLeft:30,marginTop:20}} />
                <Text style={{marginLeft:50,marginTop:-20}}>399/per Month</Text>
                
    <View style={{height:30,width:120,marginLeft:200,marginTop:-25,borderWidth:1,backgroundColor:'black',borderRadius:20,borderColor:'white'}}>
    <Text style={{fontSize:12,padding:5,marginLeft:8,fontWeight:500,fontStyle:'Poppins',color:'white'}}> Subscribe  Now   </Text>
   </View>


</View>







    </View>

    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>
    </ScrollView>   

    )
}
export default CarWash;