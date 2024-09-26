import React, { useMemo, useState } from 'react';
import { View,Text,Image, ScrollView} from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';

export default function Payment (){
    const [selectedId, setSelectedId] = useState();
   
    const radioButtons = useMemo(() => ([
        {
            id: '1', 
            label: 'Merchent 1-Click UPI',
            value: 'option1'
        
            
        },
       
    ]), []);
    const radioButtonss = useMemo(() => ([
        {
            id: '2', 
            label: 'Google Pay',
            value: 'option2'
         
        },
        
    ]), []);
    const radioButtons2 = useMemo(() => ([
        {
            id: '3', 
            label: 'Phone Pe',
            value: 'option3'
         
        },
        
    ]), []);
    const radioButtons3 = useMemo(() => ([
        {
            id: '4', 
            label: 'Paytm',
            value: 'option4'
         
        },
        
    ]), []);
    const radioButtons4 = useMemo(() => ([
        {
            id: '5', 
            label: 'Mobikwik',
            value: 'option5'
         
        },
        
    ]), []);

    const radioButtons5 = useMemo(() => ([
        {
            id: '6', 
            label: 'Debit/Credit Cards',
            value: 'option6'
         
        },
        
    ]), []);


    return(
        <ScrollView> 
        <View>

      
            <View style={{height:200,width:330,marginLeft:30,borderWidth:0.1,marginTop:30,borderRadius:10}}>
<Text style={{marginTop:20,marginLeft:30,fontSize:16,fontWeight:600}}>Preferred Payment Option</Text>

<View style={{marginLeft:-100,marginTop:10}}>    
      
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
                
        />
        <Image source={require('../assets/images/upi.png')}  style={{ height:25,width:45,marginLeft:350,marginTop:-25}} />
        </View>

         <Text style={{marginLeft:60}}> ******1515</Text> 
          
    <View style={{height:40,width:280,backgroundColor:'rgba(26, 158, 117, 1)',marginLeft:25,borderRadius:40,marginTop:20}}>
        <Text style={{marginLeft:60,marginTop:10,color:'white'}}>Pay    500 In Single Click </Text>
        <Image source={require('../assets/images/rupees.png')} style={{marginLeft:85,marginTop:-13}} />
    </View>     
            </View>


<View style={{height:400,width:330,borderWidth:0.1,marginTop:30,marginLeft:30,borderRadius:10}}> 
             <Text style={{marginLeft:30,marginTop:30,fontSize:16,fontWeight:600}}>UPI</Text>

             <View style={{marginLeft:-160,marginTop:20}}>    
      
      <RadioGroup 
          radioButtons={radioButtonss} 
          onPress={setSelectedId}
          selectedId={selectedId}
              
      />
      </View>
      <View style={{marginLeft:-170,marginTop:30}}>    
      
        <RadioGroup 
            radioButtons={radioButtons2} 
            onPress={setSelectedId}
            selectedId={selectedId}
                
        />
        </View>
        <View style={{marginLeft:-190,marginTop:30}}>    
      
        <RadioGroup 
            radioButtons={radioButtons3} 
            onPress={setSelectedId}
            selectedId={selectedId}
                
        />
        </View>
        <View style={{marginLeft:-170,marginTop:30}}>    
      
        <RadioGroup 
            radioButtons={radioButtons4} 
            onPress={setSelectedId}
            selectedId={selectedId}
                
        />
        </View>
<View style={{marginLeft:250,marginTop:-225}}>
    <Image source={require('../assets/images/gpay.png')}  />
    <Image source={require('../assets/images/phonepe.png')} style={{marginTop:30}} />
    <Image source={require('../assets/images/paytm.png')} style={{marginTop:40}} />
    <Image source={require('../assets/images/mobi.png')} style={{marginTop:45}} />
</View>
</View>
    <View style={{height:110,width:330,marginLeft:30,borderWidth:0.1,marginTop:30,borderRadius:8}}>
            <Text style={{marginLeft:30,marginTop:20,fontSize:15,fontWeight:500}}>Cards</Text>
         <View style={{marginLeft:-100,marginTop:15}}>
            <RadioGroup 
            radioButtons={radioButtons5} 
            onPress={setSelectedId}
            selectedId={selectedId}
                
        />
        </View>
        <Image source={require('../assets/images/cart.png')} style={{marginLeft:250,marginTop:-30}} />
    </View>


    <View style={{height:50,width:200,backgroundColor:'rgba(223, 223, 223, 1)',marginLeft:160,marginTop:30,borderRadius:10}}>
    <Text style={{padding:13,color:'rgba(159, 159, 159, 1)',marginLeft:30,fontSize:16,fontWeight:500}}>Proceed To Pay</Text>
    </View>
</View>

<Text>{"\n"}</Text>


</ScrollView>


    )
}
