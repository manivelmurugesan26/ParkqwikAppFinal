import 'react-native-gesture-handler';
import { View,Text,Image,TextInput,ScrollView, TouchableOpacity } from "react-native";
import { BottomSheetModal,BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useRef , useState} from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const BuyFastag2= ({navigation,route})=>{

    const value = route.params;         
    const bottomSheetModelRef= useRef(null);
    const snapPoints = ["25%"];

    return(


        <ScrollView>
        <View style={{height:200,width:400,backgroundColor:'rgba(26, 158, 117, 1)',marginTop:-10}}>
           
           <View style={{flexDirection:'row',margin:40,justifyContent:'space-between'}}>
           <Image source={require('../assets/images/buy1.png')} />
             <Text style={{color:'white',marginTop:15,fontSize:20,marginLeft:-10}}>  .........</Text>
           <Image source={require('../assets/images/buy2.png')} />
             <Text style={{color:'white',marginTop:15,fontSize:20,marginLeft:-10}}>  .........</Text>
           <Image source={require('../assets/images/buy5.png')} />
           </View>
           
<View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:-10,marginTop:-10}}>
<Text style={{color:'white',fontSize:16,fontWeight:600}}>Vachile Details</Text>
<Text style={{marginLeft:-28,color:'white',fontSize:16,fontWeight:600}}>Location</Text>
<Text style={{color:'white',}}>Payment</Text>
</View>     

</View>


<View style={{height:800,width:390,backgroundColor:'white'}}>
                  
                  <Text style={{fontSize:18,fontWeight:600,marginTop:30,marginLeft:30}}>Full Name</Text>
                 
                  <TextInput
       style={{height:40,width:280,borderWidth:0.2,marginLeft:50,marginTop:20,borderRadius:6}}
       placeholder="  Enter starting point"
       keyboardType='name-phone-pad'  />

                  <Text style={{fontSize:18,fontWeight:600,marginTop:30,marginLeft:30}}>Mobile Number</Text>

                  <TextInput
       style={{height:40,width:280,borderWidth:0.2,marginLeft:50,marginTop:30,borderRadius:6}}
       placeholder="  Enter starting point"
       keyboardType='name-phone-pad'  />

                 <Text style={{fontSize:18,fontWeight:600,marginTop:30,marginLeft:30}}>Address Line 1</Text>

                <TextInput
        style={{height:40,width:280,borderWidth:0.2,marginLeft:50,marginTop:30,borderRadius:6}}
        placeholder="  Enter starting point"
        keyboardType='name-phone-pad'  />


                 <Text style={{fontSize:18,fontWeight:600,marginTop:30,marginLeft:30}}>Address Line 2</Text>

                 <TextInput
        style={{height:40,width:280,borderWidth:0.2,marginLeft:50,marginTop:30,borderRadius:6}}
        placeholder="  Enter starting point"
        keyboardType='name-phone-pad'  />

                <Text style={{fontSize:18,fontWeight:600,marginTop:30,marginLeft:30}}>City</Text>

                <TextInput
        style={{height:40,width:280,borderWidth:0.2,marginLeft:50,marginTop:30,borderRadius:6}}
        placeholder="  Enter starting point"
        keyboardType='name-phone-pad'  />

                 <Text style={{fontSize:18,fontWeight:600,marginTop:30,marginLeft:30}}>State</Text>

                 <TextInput
        style={{height:40,width:280,borderWidth:0.2,marginLeft:50,marginTop:30,borderRadius:6}}
        placeholder="  Enter starting point"
        keyboardType='name-phone-pad'  />

             </View>

             <Text style={{fontSize:18,fontWeight:600,marginLeft:33,marginTop:50}}> ₹ {value}</Text>

             <TouchableOpacity onPress={() => navigation.navigate('BuyFastag3',value)}>  
                 <View style={{height:40,width:180,borderWidth:1,borderRadius:10,
                          marginLeft:180,marginTop:-30,borderColor:'rgba(26, 158, 117, 1)',backgroundColor:'rgba(26, 158, 117, 1)'}}>
                            <Text style={{color:'white',fontSize:18,fontWeight:600,textAlign:'center',marginTop:5}}>Continue</Text>
                          </View>
    </TouchableOpacity> 

          <Text>{"\n"}</Text>


</ScrollView>
        )
}
export default  BuyFastag2;