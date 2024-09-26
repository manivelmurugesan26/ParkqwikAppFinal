import { View,TextInput,Text } from "react-native";

const ActiveFastag = ({navigation})=>{

    return(
        <View>

            <Text style={{fontSize:17,fontWeight:600,margin:30}}>Tag ID </Text>
                <TextInput
       style={{height:30,width:300,borderWidth:0.5,marginLeft:40,marginTop:10,borderRadius:6}}
       placeholder="                                Enter Tag ID   "
       keyboardType="default"
       
     />

<Text style={{fontSize:17,fontWeight:600,margin:30}}>Vehicle Number </Text>
                <TextInput
       style={{height:30,width:300,borderWidth:0.5,marginLeft:40,marginTop:10,borderRadius:6}}
       placeholder="                       Enter Vachile Number   "
       keyboardType="default"
       
     />

<Text style={{fontSize:17,fontWeight:600,margin:30}}>Full Name </Text>
                <TextInput
       style={{height:30,width:300,borderWidth:0.5,marginLeft:40,marginTop:10,borderRadius:6}}
       placeholder="                      Enter Your Full Name   "
       keyboardType="default"
       
     />

<Text style={{fontSize:17,fontWeight:600,margin:30}}>Date of Birth </Text>
                <TextInput
       style={{height:30,width:300,borderWidth:0.5,marginLeft:40,marginTop:10,borderRadius:6}}
       placeholder="                       Enter Your DateOfBirth  "
       keyboardType="default"       
     />


<Text style={{marginTop:30,fontSize:16,fontWeight:600,marginLeft:30}}>Upload RC</Text>

<View

       style={{height:30,width:100,borderWidth:0.5,marginLeft:50,marginTop:30,borderRadius:6,
               borderColor:'rgba(26, 158, 117, 1)',backgroundColor:'rgba(240, 255, 250, 1)',
              borderWidth:2}} >
           <Text style={{ color:'rgba(26, 158, 117, 1)',textAlign:'center',marginTop:2}}> Upload RC </Text> 
       </View>


            
       <View style={{height:45,width:320,marginLeft:40,marginTop:50,backgroundColor:'rgba(26, 158, 117, 1)',borderRadius:30}}>
            <Text style={{textAlign:'center',color:'white',fontSize:17,margin:10}}>Activate</Text>
          </View>







        </View>
    )
}
export default ActiveFastag;