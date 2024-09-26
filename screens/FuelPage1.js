import { View ,Text} from "react-native";

const FuelPage1 = () =>{
    return(
<View style={{backgroundColor:'white',height:1000}}>
  
     <Text style={{fontWeight:600,marginLeft:50,marginTop:40,fontSize:18}}>Select Fuel Type</Text>
     <View style={{height:50,width:330,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15,marginTop:60,marginLeft:35}}>
 <Text style={{textAlign:'center',marginTop:12,fontWeight:600,fontSize:16}}>Diesel</Text>
</View>

<View style={{height:50,width:330,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15,marginTop:40,marginLeft:35}}>
 <Text style={{textAlign:'center',marginTop:12,fontWeight:600,fontSize:16}}>Petrol</Text>
</View>

<View style={{height:50,width:330,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15,marginTop:40,marginLeft:35}}>
 <Text style={{textAlign:'center',marginTop:12,fontWeight:600,fontSize:16}}>Company Fitted CNG</Text>
</View>

<View style={{height:50,width:330,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15,marginTop:40,marginLeft:35}}>
 <Text style={{textAlign:'center',marginTop:12,fontWeight:600,fontSize:16}}>External CNG Kit</Text>
</View>


</View>
    );
};
export default FuelPage1;