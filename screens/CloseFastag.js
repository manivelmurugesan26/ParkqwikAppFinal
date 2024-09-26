import React, {useState } from 'react';
import { View,Text,Image,TextInput ,StyleSheet, TouchableOpacity} from "react-native";


const CloseFastag = ({navigation})=>{

    const [mood,setMood] = useState();
   
   
    return(
        <View>
            
            <Text style={{marginLeft:55,fontSize:19,fontWeight:600,marginTop:30}}>Select a reason for closing your FASTag</Text>

             <View style={styles.Wrapper} >
            
            {['Iam selling or sold my vehicle','My FASTag is lost/stolen/damagedad','Iam giving my vehicle to other person','I have service related issues with my FASTag'
                ,'FASTag is not in use','Others'].map(feeling => (

           <View key={feeling} style={styles.mood}> 
            <Text style={styles.feeling}> {feeling} </Text>
            
            <TouchableOpacity style={styles.outter}
               onPress={()=> setMood(feeling)}>
              {mood === feeling && <View style={styles.inner} /> }
            </TouchableOpacity>
           </View>

            ))}
                
                
            </View> 
             
          <View style={{height:45,width:320,marginLeft:40,marginTop:200,backgroundColor:'rgba(26, 158, 117, 1)',borderRadius:30}}>
            <Text style={{textAlign:'center',color:'white',fontSize:17,margin:10}}>Continue</Text>
          </View>

        </View>
    )

}


const styles = StyleSheet.create({

  mood:{
    marginVertical:10
  },
  Wrapper:{
    flexDirection:'column',
    marginLeft:40,
    marginTop:30
   
  },
  inner:{
    width:15,
    height:15,
    backgroundColor:'rgba(26, 158, 117, 1)',
    borderRadius:10,
    marginLeft:-0.5
    
  },
  outter:{
    width:25,
    height:25,
    borderRadius:15,
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center',
    marginTop:-20,
    borderColor:'rgba(26, 158, 117, 1)',
    

  },
  feeling:{
    marginLeft:40,
    marginTop:10
  },
  mood:{
    marginLeft:10,
    marginTop:10
  }
  
})



export default CloseFastag;

