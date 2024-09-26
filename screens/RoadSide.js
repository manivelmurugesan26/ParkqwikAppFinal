import { View ,Text,Image, ScrollView, TextInput} from "react-native";

export default function RoadSide() {

    return(

        <ScrollView>
         <View style={{backgroundColor:'white'}}>
          
<ScrollView horizontal={true}>
<View style={{flexDirection:'row',marginTop:-20}}>
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

</ScrollView>

<View style={{height:550,width:330,marginLeft:35,borderWidth:1.5, borderColor:'rgba(229, 229, 229, 1)',borderRadius:30,marginTop:50}}>

    <Text style={{fontSize:15,fontWeight:600,marginLeft:20,marginTop:20}}>Get Instant Support </Text>
    <Text style={{color:'rgba(229, 229, 229, 1)',marginLeft:20,marginTop:10,fontWeight:500}}>Enter Your Details, Our Support Team Will Contact You Soon</Text>
    
    <TextInput
       style={{height:30,width:280,borderWidth:0.5,marginLeft:20,marginTop:30,borderRadius:6}}
       placeholder="                         Enter Your Name "
       keyboardType='default' />

<TextInput
       style={{height:30,width:280,borderWidth:0.5,marginLeft:20,marginTop:30,borderRadius:6}}
       placeholder="                       Enter Your Number "
       keyboardType='number-pad'  />   

       
<TextInput
       style={{height:30,width:280,borderWidth:0.5,marginLeft:20,marginTop:30,borderRadius:6}}
       placeholder="                   Enter Your Vehicle Number "
       keyboardType='name-phone-pad'  />

       
<TextInput
       style={{height:30,width:280,borderWidth:0.5,marginLeft:20,marginTop:30,borderRadius:6}}
       placeholder="                   Add Your Vehicle Location "
       keyboardType='name-phone-pad'  />


       
<TextInput
       style={{height:70,width:280,borderWidth:0.5,marginLeft:23,marginTop:30,borderRadius:6}}
       placeholder="              Your Assistance Requirements "
       keyboardType='name-phone-pad'  />


<View style={{height:60,width:300,marginLeft:15,marginTop:30,backgroundColor:'rgba(26, 158, 117, 1)',borderRadius:25}}>
    <Text style={{color:'white',textAlign:'center',fontSize:20,marginTop:15}}>Submit</Text>
    </View>     


</View>
<Text style={{fontSize:18,marginTop:50,marginLeft:20}}>How it works?</Text>

<View style={{flexDirection:'row',marginTop:20,justifyContent:'space-around'}}>

<Image source={require('../assets/images/work1.png')} /> 
<Image source={require('../assets/images/arrow3.png')} style={{marginTop:25}} /> 
<Image source={require('../assets/images/work2.png')} /> 
<Image source={require('../assets/images/arrow3.png')} style={{marginTop:25}} /> 
<Image source={require('../assets/images/work3.png')} /> 

</View>
<View style={{flexDirection:'row',marginTop:20,justifyContent:'space-around'}}>
    <Text style={{color:'rgba(160, 160, 160, 1)'}}>      Get Instant{"\n"} Support By Filling{"\n"}     Your Details</Text>
    <Text style={{color:'rgba(160, 160, 160, 1)'}}>Our Support Team{"\n"} Will Contact and{"\n"}      Assist You</Text>
    <Text style={{color:'rgba(160, 160, 160, 1)'}}>Our Team Will{"\n"}  Arrive Within{"\n"}   90 Minutes</Text>
</View>


<TextInput
       style={{height:40,width:280,borderWidth:0.2,marginLeft:50,marginTop:30,borderRadius:6}}
       placeholder="                           Search area  "
       keyboardType='name-phone-pad'  />




</View>
</ScrollView>
        

    )
}