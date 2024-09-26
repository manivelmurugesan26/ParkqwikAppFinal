
import { View,Text,ScrollView,TextInput,TouchableOpacity ,navigation} from "react-native";


const CarModel1 =({navigation}) =>{

return(
    
    <View style={{backgroundColor:'white'}}>
    <ScrollView>
  <View>
      <TextInput style={{height:40,width:300,marginTop:40,marginLeft:45,
        borderColor:'rgba(238, 238, 238, 1)',borderWidth:2,borderRadius:10}}
        placeholder="                  Search  Maruti  Models" />

</View>   

<Text style={{fontWeight:600,marginLeft:50,marginTop:30,fontSize:16}}>Select Your Car Model</Text>


<View style={{flexDirection:'column',rowGap:30,marginLeft:50,marginTop:30}}>
<TouchableOpacity>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
 <Text style={{textAlign:'center',marginTop:12,fontWeight:600}}
    onPress={() => navigation.navigate('FuelPage1')}>Alto</Text>
</View>
</TouchableOpacity>    
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Alto K10</Text>
</View>

<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Ertiga</Text>
</View>

<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Swift Dzire</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Celerio</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Dzire</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Fronz</Text>
</View>

</View>
<View style={{flexDirection:'column',rowGap:30,marginLeft:230,marginTop:-530}}>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Alto 800</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Baleno</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Swift</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Wagon R</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Ciaz</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Eeco</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Ignis</Text>
</View>
</View>


<Text>{"\n"}</Text>



</ScrollView>
</View>

);
};


export default CarModel1;