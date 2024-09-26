import React from "react";
import { View, Text, Image, ScrollView,TouchableOpacity } from "react-native";

const RentoutHelmet = ({navigation}) => {

    return (

        <ScrollView>
            <View style={{ height: 300, width: 320, marginLeft: 30, backgroundColor: 'white', marginTop: 30, borderRadius: 20 }}>
                <View style={{ height: 50, width: 320, backgroundColor: 'rgba(26, 158, 117, 1)', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <Image source={require('../assets/images/helmet2.png')} style={{ margin: 18 }} />
                    <Text style={{ marginLeft: 50, marginTop: -40, color: 'white', fontSize: 16 }}>Rent out Helmet</Text>
                </View>
                <Text style={{ color: 'rgba(160, 160, 160, 1)', margin: 30, fontSize: 16 }}>Rent Out From </Text>
                <Text style={{ color: 'rgba(49, 49, 49, 1)', fontSize: 12, marginLeft: 33 }}>Today at 00:01</Text>
                <Image source={require('../assets/images/more3.png')} style={{ marginLeft: 115, marginTop: -15 }} />
                <Image source={require('../assets/images/arrov1.png')} style={{ marginLeft: 150, marginTop: -13, height: 15, width: 15 }} />
                <Text style={{ color: 'rgba(160, 160, 160, 1)', fontSize: 16, marginLeft: 200, marginTop: -71 }}>Rent Out Till </Text>
                <Text style={{ color: 'rgba(49, 49, 49, 1)', fontSize: 12, marginLeft: 200, marginTop: 30 }}>Today at 00:01</Text>
                <Image source={require('../assets/images/more3.png')} style={{ marginLeft: 283, marginTop: -15 }} />
                <Text style={{ marginLeft: 150, marginTop: 40 }}> 0 </Text>
                <Text style={{ color: 'rgba(160, 160, 160, 1)', marginLeft: 112, marginTop: 20 }}> Total Duration </Text>
            </View>

            <View>
                <Text style={{marginLeft:35,marginTop:30,fontSize:16,fontWeight:600}}>Delivery Address</Text>
                <View style={{ height: 35, width: 280, borderWidth: 2, margin:40,borderRadius:5,borderColor:'rgba(199, 199, 199, 1)'}}>
                    <Text style={{color:'rgba(160, 160, 160, 1)',textAlign:'center',marginTop:5}}>Tap to add delivery address</Text>
                    <Image source={require('../assets/images/circle.png')} style={{marginLeft:250,marginTop:-15}} />
                </View>
                <Text style={{marginLeft:33,fontSize:16,fontWeight:600}}>Personal Details</Text>
                <View style={{ height: 35, width: 280, borderWidth: 2, margin:40,borderRadius:5,borderColor:'rgba(199, 199, 199, 1)'}}>
                    <Text style={{color:'rgba(160, 160, 160, 1)',textAlign:'center',marginTop:5}}>Tap to add delivery address</Text>
                    <Image source={require('../assets/images/circle.png')} style={{marginLeft:250,marginTop:-15}} />
                </View>
                <Text style={{marginLeft:35,marginTop:30,fontSize:16,fontWeight:600}}>Vehicle Details</Text>
                <View style={{ height: 35, width: 280, borderWidth: 2, margin:40,borderRadius:5,borderColor:'rgba(199, 199, 199, 1)'}}>
                    <Text style={{color:'rgba(160, 160, 160, 1)',textAlign:'center',marginTop:5}}>Tap to add vehicle details</Text>
                    <Image source={require('../assets/images/circle.png')} style={{marginLeft:250,marginTop:-15}} />
                </View>

                <Text style={{marginLeft:35,marginTop:30,fontSize:16,fontWeight:600}}>Payment Details</Text>
               
                <View style={{height:50,width:300,margin:40,borderWidth:1}}>
                <Image source={require('../assets/images/gpay2.png')} style={{height:30,width:30,margin:10}} />
                <Text style={{color:'rgba(57, 57, 57, 1)',marginLeft:60,marginTop:-35}}>Google Pay</Text>
                <View style={{height:22,width:60,borderColor:'rgba(26, 158, 117, 1)',borderWidth:1,marginLeft:210,marginTop:-20,borderRadius:5}}>
                <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                    <Text style={{color:'rgba(26, 158, 117, 1)',textAlign:'center'}} >Edit</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
            <Text  style={{marginLeft:35,marginTop:30,fontSize:16,fontWeight:600}}>Cancellation Policy</Text>
            <Text style={{color:'rgba(133, 133, 133, 1)',marginLeft:30,marginTop:20,lineHeight:22}}>Cancel more than 24 hrs before the booking starts and get a full refund less the transaction fee. For more details click through to our cancellation policies</Text>
            
            <View style={{height:35,width:150,backgroundColor:'rgba(26, 158, 117, 1)',marginTop:30,marginLeft:200,borderRadius:13}}>
                <Text style={{textAlign:'center',color:'white',marginTop:6,fontSize:16}}>Continue</Text>
            </View>
            <Text>{"\n"}</Text>
        </ScrollView>
    )
}
export default RentoutHelmet;