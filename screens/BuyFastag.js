import 'react-native-gesture-handler';
import { View,Text,Image,TextInput } from "react-native";
import { BottomSheetModal,BottomSheetModalProvider, TouchableOpacity } from '@gorhom/bottom-sheet';
import { useRef , useState} from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const BuyFastag= ({navigation})=>{
             
      const bottomSheetModelRef= useRef(null);
      const snapPoints = ["25%"];


       function handlePress() {
   
                     bottomSheetModelRef.current?.present();
       }
       
         
        const [count, setCount] = useState(1); 
        const [value, setValue] = useState(350);
   
       
        const increaseCount = () => { 
          setCount(count + 1); 
          setValue(value + 350);
          
          
        }; 
       
        const decreaseCount = () => { 
          if (count !== 0) {
            setCount(count - 1);
            setValue(value - 350);
        }
        
        };

    

    return(
<GestureHandlerRootView>
    <BottomSheetModalProvider>  
      <View>
          <View style={{height:200,width:400,backgroundColor:'rgba(26, 158, 117, 1)',marginTop:-10}}>
             
             <View style={{flexDirection:'row',margin:40,justifyContent:'space-between'}}>
             <Image source={require('../assets/images/buy1.png')} />
               <Text style={{color:'white',marginTop:15,fontSize:20,marginLeft:-10}}>  .........</Text>
             <Image source={require('../assets/images/buy4.png')} />
               <Text style={{color:'white',marginTop:15,fontSize:20,marginLeft:-10}}>  .........</Text>
             <Image source={require('../assets/images/buy5.png')} />
             </View>

<View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:-10,marginTop:-10}}>
<Text style={{color:'white',fontSize:16,fontWeight:600}}>Vachile Details</Text>
<Text style={{marginLeft:-28,color:'white'}}>Location</Text>
<Text style={{color:'white',}}>Payment</Text>
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

  <TouchableOpacity onPress={handlePress}>
       <View
       style={{height:30,width:100,borderWidth:0.5,marginLeft:250,marginTop:-30,borderRadius:15,
               borderColor:'rgba(26, 158, 117, 1)',backgroundColor:'rgba(240, 255, 250, 1)',
              borderWidth:2}} >
           <Text style={{ color:'rgba(26, 158, 117, 1)',textAlign:'center',marginTop:2}}> Change </Text> 
       </View>
 </TouchableOpacity>
            </View>

<BottomSheetModal  ref={bottomSheetModelRef} index={0} snapPoints={snapPoints} > 
  <View>
    <Text style={{fontSize:16,fontWeight:400,margin:15,lineHeight:24}}>
      How many Fastag would {"\n"}you like to bye? 
    </Text>
   
    <View style={{flexDirection:'row', justifyContent:'space-evenly',marginLeft:170,marginTop:-56 }} >
    <TouchableOpacity onPress={decreaseCount} > 
     <View style={{height:30,width:30,borderWidth:1,borderRadius:15,borderColor:'rgba(229, 229, 229, 1)'}}>
      <Text style={{textAlign:'center',fontSize:25,marginTop:-13,color:'rgba(229, 229, 229, 1)',fontWeight:600}}>_</Text>
     </View>
     
     </TouchableOpacity>
          <Text>{count}</Text>
   <TouchableOpacity onPress={increaseCount} >
      <View style={{height:30,width:30,borderWidth:1,borderRadius:15,borderColor:'rgba(229, 229, 229, 1)'}}>
      <Text style={{textAlign:'center',fontSize:20,color:'rgba(229, 229, 229, 1)',fontWeight:600}}>+</Text>
      </View>
      </TouchableOpacity>
    </View>

       <Text style={{fontSize:18,fontWeight:600,marginLeft:10,marginTop:50}}> ₹ {value}</Text>
     <TouchableOpacity  onPress={() => navigation.navigate('BuyFastag2', value )}>  
       <View style={{height:40,width:180,borderWidth:1,borderRadius:10,
                          marginLeft:180,marginTop:-30,borderColor:'rgba(26, 158, 117, 1)',backgroundColor:'rgba(26, 158, 117, 1)'}}>
                            <Text style={{color:'white',fontSize:18,fontWeight:600,textAlign:'center',marginTop:5}}>Continue</Text>
                          </View>
    </TouchableOpacity>

  </View>
</BottomSheetModal>

     </BottomSheetModalProvider>
     </GestureHandlerRootView>
       
    )
}
export default  BuyFastag;