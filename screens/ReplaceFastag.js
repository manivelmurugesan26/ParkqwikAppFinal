import { View,Text,Image,TextInput } from "react-native";

const ReplaceFastag = ({navigation})=>{

    return(

      <View>  
            
      <View>
          <View style={{height:200,width:400,backgroundColor:'rgba(26, 158, 117, 1)',marginTop:-10}}>
             
             <View style={{flexDirection:'row',margin:40,justifyContent:'space-between'}}>
             <Image source={require('../assets/images/buy1.png')} />
             
               <Text style={{color:'white',marginTop:15,fontSize:20,marginLeft:-10}}>  .........</Text>
             <Image source={require('../assets/images/buy2.png')} />
               <Text style={{color:'white',marginTop:15,fontSize:20,marginLeft:-10}}>  .........</Text>
             <Image source={require('../assets/images/buy3.png')} />
             </View>
<View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:-20,marginTop:-10}}>
<Text style={{color:'white'}}>Vachile Details</Text>
<Text style={{marginLeft:-20,color:'white'}}>location</Text>
<Text style={{color:'white'}}>Payment</Text>
</View>
            </View>

          <Text style={{marginTop:30,fontSize:16,fontWeight:600,marginLeft:20}}>Vachile Number</Text>

        <TextInput
       style={{height:30,width:280,borderWidth:0.5,marginLeft:40,marginTop:30,borderRadius:6}}
       placeholder="                  Enter Your Vehicle Number "
       keyboardType='name-phone-pad' 
        />

        <Text style={{marginTop:30,fontSize:16,fontWeight:600,marginLeft:20}}>Upload RC</Text>

      <View
       style={{height:30,width:100,borderWidth:0.5,marginLeft:40,marginTop:30,borderRadius:6,
               borderColor:'rgba(26, 158, 117, 1)',backgroundColor:'rgba(240, 255, 250, 1)',
              borderWidth:2}} >
           <Text style={{ color:'rgba(26, 158, 117, 1)',textAlign:'center',marginTop:2}}> Upload RC </Text> 
       </View>

            </View>

      </View>

    )
}
export default ReplaceFastag;