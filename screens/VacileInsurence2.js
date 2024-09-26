import react from "react"
import { View ,Text, TextInput, ScrollView, TouchableOpacity} from "react-native";


const VachileInsurence2 = ({navigation})=>{
  
    return(

        <View style={{backgroundColor:'white'}}>
            <ScrollView>
          <View>
              <TextInput style={{height:40,width:300,marginTop:40,marginLeft:45,
                borderColor:'rgba(238, 238, 238, 1)',borderWidth:2,borderRadius:10}}
                placeholder="                 Search Your Car Brand" />

        </View>   

        <Text style={{fontWeight:600,marginLeft:50,marginTop:30,fontSize:16}}>Select Your Car Brand</Text>


<View style={{flexDirection:'column',rowGap:30,marginLeft:50,marginTop:30}}>
<TouchableOpacity>
    <View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
         <Text style={{textAlign:'center',marginTop:12,fontWeight:600}}
            onPress={() => navigation.navigate('CarModel1')}>Maruti</Text>
    </View>
</TouchableOpacity>    
    <View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
    <Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Honda</Text>
    </View>
    
    <View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
    <Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Fiat</Text>
    </View>
    
    <View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
    <Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Mahindra</Text>
    </View>
    <View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
    <Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Skoda</Text>
    </View>
    <View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
    <Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Toyota</Text>
    </View>
    <View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
    <Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Kia</Text>
    </View>

</View>
<View style={{flexDirection:'column',rowGap:30,marginLeft:230,marginTop:-530}}>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Hyundai</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Chevrolet</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Ford</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Renault</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Tata</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Volkswagen</Text>
</View>
<View style={{height:50,width:120,borderWidth:2,borderColor:'rgba(238, 238, 238, 1)',borderRadius:15}}>
<Text style={{textAlign:'center',marginTop:12,fontWeight:600}}>Jeep</Text>
</View>
</View>


<Text>{"\n"}</Text>



</ScrollView>
        </View>

    );
};


export default VachileInsurence2;
