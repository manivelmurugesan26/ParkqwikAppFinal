import React, { useMemo, useState } from 'react';
import { View ,Text,TextInput,Image, TouchableOpacity, } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import RadioGroup from 'react-native-radio-buttons-group';

const TollEstimator = ({navigation})=>{

    const [selectedId, setSelectedId] = useState();
   
    const radioButtons = useMemo(() => ([
        {
            id: '1', 
            label: 'One Way',
            value: 'option1',
          
            
        },
       
    ]), []);


    const radioButtonss = useMemo(() => ([
        {
            id:'2',
            label: 'Two Way',
            value: 'option2'
        },
       
    ]), []);
            
    const [catagory, setCatagory] = React.useState("");

    const catagories =[
        {key:'El',value:'car/jeep/van'},
        {key:'Gr',value:'LCV'},
        {key:'Gr',value:'Bus/Truck'},
        {key:'Gr',value:'HCM/EME'},
    ]

    return(

        <View>
      
             <View style={{height:300,width:330,marginTop:30,marginLeft:30,backgroundColor:'white',borderRadius:30}}>
                  
                  <Text style={{fontSize:16,fontWeight:600,marginTop:30,marginLeft:20}}>FROM</Text>
                 
                  <TextInput
       style={{height:40,width:280,borderWidth:0.2,marginLeft:20,marginTop:20,borderRadius:6}}
       placeholder="  Enter starting point"
       keyboardType='name-phone-pad'  />

                  <Text style={{fontSize:16,fontWeight:600,marginTop:30,marginLeft:20}}>TO</Text>

                  <Image source={require('../assets/images/arrowtwo.png')}  style={{marginLeft:150,marginTop:-20}} /> 
                  <TextInput
       style={{height:40,width:280,borderWidth:0.2,marginLeft:20,marginTop:20,borderRadius:6}}
       placeholder="  Enter starting point"
       keyboardType='name-phone-pad'  />
            
             </View>
        
            <Text style={{fontSize:16,fontWeight:600,marginTop:30,marginLeft:30}}> Vehicle Type </Text>
<View style={{width:330,marginLeft:30,marginTop:30,color:'rgba(175, 175, 175, 1)'}}>
             
              <SelectList 
              setSelected={setCatagory}
              data={catagories}
              placeholder={"Select your Vachile type"}
              
              />
</View>       

<Text style={{fontSize:16,fontWeight:600,marginTop:30,marginLeft:30}}>Trip Type</Text>


<View style={{marginLeft:-100,marginTop:10}}>
<RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
                
        />

<RadioGroup 
            radioButtons={radioButtonss} 
            onPress={setSelectedId}
            selectedId={selectedId}
                
        /> 

</View>

<TouchableOpacity  onPress={() => navigation.navigate('DetailsScreen')}>
<View style={{height:40,width:280,backgroundColor:'rgba(26, 158, 117, 1)',marginLeft:50,borderRadius:40,marginTop:60}}>
        <Text style={{marginLeft:100,marginTop:6,color:'white',fontSize:20}}> Continue </Text>
      
    </View>  
</TouchableOpacity>

        </View>



    )


}



export default TollEstimator;