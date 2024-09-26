import React from "react"
import { View ,Text, Image,TextInput, ScrollView} from "react-native"

const ValetParking = ({navigation})=>{

    return(

        <ScrollView>
           <View style={{backgroundColor:'white'}}>
<Text style={{fontSize:18,marginTop:50,marginLeft:20}}>How it works?</Text>

<View style={{flexDirection:'row',marginTop:20,justifyContent:'space-around'}}>

<Image source={require('../assets/images/work1.png')}  /> 
<Image source={require('../assets/images/arrow3.png')} style={{marginTop:25,marginLeft:-50}} /> 
<Image source={require('../assets/images/work2.png')} style={{marginLeft:-50}} /> 
<Image source={require('../assets/images/arrow3.png')} style={{marginTop:25,marginLeft:-50}} /> 
<Image source={require('../assets/images/work3.png')}  style={{marginLeft:-50}} /> 

</View>
<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
  <Text style={{fontSize:16,fontWeight:500}}>  Step 1</Text>
  <Text style={{fontSize:16,fontWeight:500}}>   Step 2</Text>
  <Text style={{fontSize:16,fontWeight:500}}>  Step 3</Text>
</View>


<View style={{flexDirection:'row',marginTop:20,justifyContent:'space-around'}}>
    <Text style={{color:'rgba(160, 160, 160, 1)'}}>      Get Instant{"\n"} Support By Filling{"\n"}     Your Details</Text>
    <Text style={{color:'rgba(160, 160, 160, 1)'}}>Our Support Team{"\n"} Will Contact and{"\n"}      Assist You</Text>
    <Text style={{color:'rgba(160, 160, 160, 1)'}}>Our Team Will{"\n"}  Arrive Within{"\n"}   90 Minutes</Text>
</View>       



<View style={{height:500,width:330,marginLeft:35,borderWidth:1.5, borderColor:'rgba(229, 229, 229, 1)',borderRadius:30,marginTop:50}}>

    <Text style={{fontSize:15,fontWeight:600,marginLeft:20,marginTop:20}}>Get Instant Support </Text>
    <Text style={{color:'rgba(160, 160, 160, 1)',marginLeft:20,marginTop:10,fontWeight:600}}>Enter Your Details, Our Support Team Will Contact You Soon</Text>
    
    <TextInput
       style={{height:30,width:280,borderWidth:0.5,marginLeft:20,marginTop:30,borderRadius:6}}
       placeholder="                       Enter Your Name "
       keyboardType='default' />

    <TextInput
       style={{height:30,width:280,borderWidth:0.5,marginLeft:20,marginTop:30,borderRadius:6}}
       placeholder="                Enter Your Mobile Number "
       keyboardType='number-pad' 
        />   

       
<TextInput
       style={{height:30,width:280,borderWidth:0.5,marginLeft:20,marginTop:30,borderRadius:6}}
       placeholder="                Enter Your Vehicle Number "
       keyboardType='name-phone-pad'  />

       
<TextInput
       style={{height:30,width:280,borderWidth:0.5,marginLeft:20,marginTop:30,borderRadius:6}}
       placeholder="                      Add pickup Location "
       keyboardType='name-phone-pad'  
       />


       


<View style={{height:60,width:300,marginLeft:15,marginTop:30,backgroundColor:'rgba(26, 158, 117, 1)',borderRadius:25}}>
    <Text style={{color:'white',textAlign:'center',fontSize:20,marginTop:15}}>Submit</Text>
    </View>     


</View>

</View>
        </ScrollView>
    )
}
export default ValetParking;