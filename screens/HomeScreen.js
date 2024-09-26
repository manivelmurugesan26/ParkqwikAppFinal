import React from "react";
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity } from "react-native";


const HomeScreen = ({navigation})=>{


    return(
        <View>
                     
   
<ScrollView> 
     <View style={{height:'100%',backgroundColor:'white'}}>
     <View style={styles.container}> 
     <View style={styles.header}> 


<View style={{marginLeft:20,marginBottom:-67,marginTop:65,height:10,width:10}}>
 <Image source={require('../assets/images/Ellipse 1.png')} />
</View>  
<View style={{marginLeft:55,top:95,borderWidth:0.1,backgroundColor:'white', width:15,height:15,padding:3,borderRadius:10}}>
 <Image source={require('../assets/images/Vector.png')} />
</View>  

<View style={{marginLeft:93,marginRight:100,marginTop:55,borderWidth:0.1,padding:3, 
borderRadius:18,backgroundColor:'rgba(255, 255, 255, 1)',width:180,height:35}}>
<Text style={{marginLeft:28,fontSize:16,color:'rgba(26, 158, 117, 1) ',marginTop:4}}
  onPress={() => navigation.navigate('AddVachile')}>

   <Image source={require('../assets/images/circle.png') } />   Add Vachile   
   
 </Text> 
 </View>        

<View  style={styles.icons}>
<View style={{marginRight:8,marginTop:-35,backgroundColor:'rgba(26, 158, 117, 1)', width:25,height:25,padding:4,borderRadius:10}}>
  <TouchableOpacity  onPress={() => navigation.navigate('Wallet')}>
    <Image style={{height:29,width:35}} source={require('../assets/images/450.png')}/>
    </TouchableOpacity> 
</View>
<View style={{marginRight:10,marginLeft:5}}>
<Image style={{height:25,width:25,marginTop:-28,marginLeft:9}}
    source={require('../assets/images/dot.png')} />
<Image style={{height:15,width:15,marginTop:-20,marginLeft:14}} source={require('../assets/images/bell.png')} />
</View> 
<View style={{marginRight:10,marginLeft:-5}}>
<Image  style={{height:25,width:25,marginTop:-27,marginLeft:4}} source={require('../assets/images/dot.png')}/>
<Image  style={{height:15,width:15,marginTop:-18,marginLeft:9}} source={require('../assets/images/arrov.png')} /> 
</View>
</View>
</View>


<View style={styles.box1}> 
 <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:500}}> Services {"\n"}  
</Text>
 <View style={styles.image}>
 <Text>{'\n'}</Text>

<TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
 <View style={{borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:12,padding:4,borderRadius:9,shadowColor:'black',
    elevation:5,}}>
 <Image source={require('../assets/images/location.png')} style={{height:28,width:28,margin:5,marginTop:-1}}  /> 
 </View>   
 <Text  style={{marginTop:-30 ,paddingTop:40,marginLeft:14,fontSize:10,fontWeight:500}}>  Nearby {"\n"}  Parking  </Text> 
</TouchableOpacity>   

<TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')} >     
 <View style={{borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:12,padding:4,borderRadius:9,shadowColor:'black',
    elevation:5,}}>
 <Image source={require('../assets/images/car.png')} style={{height:28,width:28,margin:5,marginTop:3}} /> 
 </View>
 <Text style={{marginTop:-25 ,paddingTop:40,marginLeft:12,fontSize:10,fontWeight:500}}>EV  Parking  </Text> 
</TouchableOpacity>


<TouchableOpacity onPress={() => navigation.navigate('CarWash')}>

 <View style={{borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:7,padding:4,borderRadius:9,shadowColor:'black',
    elevation:5,}}>
 <Image source={require('../assets/images/wash.png')} style={{height:28,width:28,margin:5,marginTop:-1}}/>
 </View> 
 <Text style={{marginTop:-25 ,paddingTop:40,marginLeft:12,fontSize:10,fontWeight:500}}>Car Wash  </Text>

</TouchableOpacity>    

<TouchableOpacity onPress={() => navigation.navigate('VachileInsurence')}>
 <View style={{borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:7,padding:4,borderRadius:9,shadowColor:'black',
    elevation:5,}}>
 <Image style={{height:19.6,width:25.2,margin:8,marginTop:5}} source={require('../assets/images/insurence.png')} /> 

 </View>
 <Text style={{marginTop:-25 ,paddingTop:40,marginLeft:12,fontSize:10,fontWeight:500}} >  Vachile {"\n"}Insurence  </Text>
 
 </TouchableOpacity>
  <Text> {'\n'} </Text>
 
  </View>  
  
 <View style={styles.image}>
     <Text>{'\n'}</Text>

  <TouchableOpacity  onPress={() => navigation.navigate('RoadSide')}>
 <View style={{borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:7,padding:4,borderRadius:9,marginTop:12,shadowColor:'black',
    elevation:5,}}>
 <Image source={require('../assets/images/assi.png')} style={{height:19.6,width:25.2,margin:8,marginTop:5}} /> 
 </View>
 <Text style={{marginTop:-30 ,paddingTop:40,marginLeft:11,fontSize:10,fontWeight:500}}> RoadSide {"\n"}Assistance  </Text> 
 </TouchableOpacity>

 <TouchableOpacity  onPress={() => navigation.navigate('RoadSide')}>
 <View style={{borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:-5,padding:4,borderRadius:9,marginTop:12,shadowColor:'black',
    elevation:5,}}>
 <Image source={require('../assets/images/ticket.png')}  style={{height:19.6,width:25.2,margin:8,marginTop:5}} /> 
 </View>
 <Text style={{marginTop:-30 ,paddingTop:40,marginLeft:5,fontSize:10,fontWeight:500}}>   Pay {"\n"}Challen </Text> 
 </TouchableOpacity>

 <TouchableOpacity  onPress={() => navigation.navigate('TollEstimator')}>
 <View style={{borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:7,padding:4,borderRadius:9,marginTop:12,shadowColor:'black',elevation:5,}}>
 <Image  source={require('../assets/images/toll.png')} style={{height:19.6,width:25.2,margin:8,marginTop:5}} /> 
 </View>
 <Text style={{marginTop:-30 ,paddingTop:40,marginLeft:8,fontSize:10,fontWeight:500}}>       Toll {"\n"}  Estimator </Text>
</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('ValetParking')}>
 <View style={{borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:7,padding:4,borderRadius:9,marginTop:12,shadowColor:'black',
    elevation:5,}}>
 <Image style={{height:19.6,width:25.2,margin:8,marginTop:5}}  source={require('../assets/images/parking.png')} /> 
 </View>
 <Text style={{marginTop:-30 ,paddingTop:40,marginLeft:12,fontSize:10,fontWeight:500}}>   Vallet {"\n"}  Parking  </Text> 
 </TouchableOpacity>
 <Text>{'\n'}</Text>
 
 </View>
 </View>


 
<View style={{marginLeft:33,marginTop:-50}}>



<View style={styles.box2}>
  <Text style={{marginTop:25,marginLeft:30,fontSize:16,fontWeight:500}}>FASTag Recharge</Text>
  <Text style={{marginTop:18,marginLeft:30,color:'rgba(160, 160, 160, 1)',fontSize:14,fontWeight:'500'}}>Get upto 100% cashback on first 3 Fastag Recharge {"\n"}</Text>

<TouchableOpacity>
<View style={{flexDirection:'row'}}>

 <View style={{borderWidth:1,borderColor:'rgba(26, 158, 117, 1)',height:35, width:190,backgroundColor:'rgba(240, 255, 250, 1)',marginLeft:35,borderRadius:10,alignItems:'center'}}>
  <Text style={{ fontSize:12,fontWeight:500,color:'white',padding:7,color:'rgba(26, 158, 117, 1)'}}>Add vachile or chassis number</Text>
 </View>

 <View style={{height:35, width:90,backgroundColor:'rgba(26, 158, 117, 1)',marginLeft:8,borderRadius:10,alignItems:'center'}}>
  <Text style={{ color:'white',padding:3,fontWeight:500,marginTop:4,marginLeft:5}}>Recharge </Text>
 </View> 
 </View>
 </TouchableOpacity>

 <View style={{flexDirection:'row'}}>
  <Text style={{marginTop:15,marginLeft:40}}>Powered by</Text>
  <Image source={require('../assets/images/netc.png')} style={{marginLeft:10}} />
  <Image source={require('../assets/images/bharat.png')} style={{marginLeft:10,marginTop:15}}/>
 </View>

 <View style={{height:1,width:250,backgroundColor:'rgba(245, 244, 244, 1)',marginTop:20,marginLeft:40}}>
 </View>
 <Text style={{marginLeft:20,fontSize:18,marginTop:20}}>Discover </Text>

<View style={styles.fastags}>
  <TouchableOpacity onPress={() => navigation.navigate('BuyFastag')}>
     <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)', height:41,width:51,borderColor:'white',marginLeft:5,shadowColor:'black',
    elevation:5}}>
      <Image source={require('../assets/images/bag.png')}  style={{height:24,width:24,marginLeft:12,marginTop:6}}  />
     </View>
   </TouchableOpacity>

<Text  style={{marginRight:15,marginTop:47,fontSize:11,marginLeft:-56,fontWeight:500}}>  Bay{"\n"}Fastag</Text>

<TouchableOpacity onPress={() => navigation.navigate('ReplaceFastag')}>
  <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)', height:41,width:51,borderColor:'white',marginLeft:10,shadowColor:'black',
    elevation:5}}>
<Image source={require('../assets/images/changes.png')} style={{height:24,width:24,marginLeft:12,marginTop:6}} /> 
</View>
</TouchableOpacity>
<Text style={{marginTop:47,marginRight:15,marginLeft:-57,fontSize:11,fontWeight:500}}>Replace{"\n"} Fastag</Text>


<TouchableOpacity onPress={() => navigation.navigate('ActiveFastag')} >
<View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)', height:41,width:51,borderColor:'white',marginLeft:10,shadowColor:'black',
    elevation:5}}>
<Image source={require('../assets/images/done.png')} style={{height:24,width:24,marginLeft:12,marginTop:6}}/> 
</View>
</TouchableOpacity>

<Text style={{marginTop:47,marginRight:15,marginLeft:-55,fontSize:11,fontWeight:500}}>Active{"\n"}Fastag</Text> 
<TouchableOpacity onPress={() => navigation.navigate('CloseFastag')}>

<View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)', height:41,width:51,borderColor:'white',marginLeft:5,shadowColor:'black',elevation:5}}>
<Image source={require('../assets/images/scan.png')} style={{height:24,width:24,marginLeft:12,marginTop:6}} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
</View>
</TouchableOpacity>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
<Text style={{marginTop:47,marginRight:25,marginLeft:-56,fontSize:11,fontWeight:500}}>Close{"\n"}Fastag</Text>
</View>

</View> 
<Text>{"\n"}</Text> 


</View>

    <View style={{ 
      height:170, width:350, 
      backgroundColor:'rgba(26, 158, 117, 0.8) rgba(26, 158, 117, 1) rgba(166, 167, 101, 1)' ,
      borderRadius:20,marginLeft:23,marginTop:20}}>
        <Text style={{fontSize:18,marginLeft:25,marginTop:15,color:'rgba(255, 255, 255, 1)'}}>Add money to wallet</Text>
        <Text style={{fontSize:15,marginLeft:25,marginTop:15,color:'rgba(255, 255, 255, 1)'}}>Get 2% cashback</Text>
        <Image style={{height:120,width:140,marginLeft:200,marginTop:-60}} source={require('../assets/images/Frame.png')} /> 
       
        <View style={{height:30,width:100,marginLeft:20,marginTop:-40,borderWidth:1,borderColor:'white',borderRadius:15,backgroundColor:'white'}}>
        <Text style={{padding:3,marginLeft:10,color:'rgba(26, 158, 117, 1)'}}>Add Money</Text>
        </View> 



</View>

<Text>{"\n"}</Text> 

<Text>{"\n"}</Text> 

<View style={{height:155,width:340,backgroundColor:'rgba(255, 255, 255, 1)',marginLeft:30,borderRadius:15,marginTop:-30, shadowColor:'black',
elevation:5,}}>
  
              <Text style={{fontSize:16,fontWeight:500,margin:15}}>Others</Text>
   <View style={{ flexDirection:'row',justifyContent:'space-evenly',marginTop:-20}}>
 

<TouchableOpacity onPress={() => navigation.navigate('RentoutHelmet')}>
  <View style={{marginTop:20,borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:7,padding:4,borderRadius:9,shadowColor:'black',elevation:5}}>
    <Image source={require('../assets/images/helmet.png')} style={{height:24,width:28,marginLeft:8,marginTop:5}}/>
    </View>
    <Text  style={{fontSize:10,fontWeight:400,marginLeft:14,marginTop:8}}>Rentout{"\n"}
Helmet</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('FuelPrice')}>
<View style={{marginTop:20,borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:7,padding:4,borderRadius:9,shadowColor:'black',elevation:5}}>
<Image source={require('../assets/images/fuel.png')} style={{height:24,width:28,marginLeft:5,marginTop:5}} /> 
</View>
<Text style={{fontSize:10,fontWeight:400,marginLeft:11,marginTop:8}}>Fuel Price</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('CarShop')}>
<View style={{marginTop:20,borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:7,padding:4,borderRadius:9,shadowColor:'black',elevation:5,}}>
<Image source={require('../assets/images/shop.png')}  style={{height:24,width:24,marginLeft:8,marginTop:3}}/> 
</View>
<Text style={{fontSize:10,fontWeight:400,marginLeft:11,marginTop:8}}>Shop here</Text> 
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('AddVachile')} >
<View style={{marginTop:20,borderWidth:1,borderColor:'#f2f2f2', backgroundColor:'white', height:41,width:51,marginLeft:7,padding:4,borderRadius:9,shadowColor:'black',elevation:5}}>
<Image source={require('../assets/images/insurence.png')}  style={{height:24,width:30,marginLeft:6,marginTop:3}}/> 
</View>
<Text style={{fontSize:10,fontWeight:400,marginLeft:11,marginTop:8}}>My Vachile</Text> 
</TouchableOpacity>
</View>   
</View>

<View style={{marginLeft:10,marginTop:20}}>
<Text style={{marginLeft:30,fontSize:16,fontWeight:500}}>Deals For You</Text>
<ScrollView horizontal={true}>
<View style={{  flexDirection:'row',
justifyContent:'space-between',marginTop:20}}>
 
      <View style={{height:136,width:148,backgroundColor:'rgba(141, 103, 249, 1)',borderRadius:20,marginLeft:20}}> 
      <Text style={{fontSize:14,fontWeight:500,marginLeft:20,marginTop:15,color:'rgba(251, 255, 53, 1)'}}>Recharge Fastag</Text>
      <Text style={{fontSize:10,fontWeight:500,color:'#ffffff',marginLeft:32,marginTop:10}}>& Get petrol worth </Text>
        
         <View style={{height:24,width:92,backgroundColor:'#ffffff', marginLeft:28,marginTop:15,borderRadius:10}}>
           
           <Text style={{fontSize:10,fontWeight:600,padding:5,marginLeft:6}}>Recharge Now</Text>
            
         </View>
      </View>

      <View style={{height:136,width:148,backgroundColor:'rgba(65, 222, 118, 1)',borderRadius:20,marginLeft:10}}>
      <Text style={{fontSize:14,fontWeight:500,marginLeft:25,marginTop:15,color:'rgba(251, 255, 53, 1)'}}>Get 25% off On</Text>
      <Text style={{fontSize:10,fontWeight:500,color:'#ffffff',marginLeft:32,marginTop:10}}>your first car wash</Text>
     
      <View style={{height:24,width:92,backgroundColor:'#ffffff', marginLeft:28,marginTop:15,borderRadius:10}}>
           
           <Text style={{fontSize:10,fontWeight:600,padding:5,marginLeft:18}}>Book Now</Text>
            
         </View>

      </View>

      <View style={{height:136,width:148,backgroundColor:'rgba(249, 90, 233, 1)',borderRadius:20,marginLeft:10}}> 
      <Text style={{fontSize:14,fontWeight:500,marginLeft:28,marginTop:15,color:'rgba(251, 255, 53, 1)'}}>Get 15% off On</Text>
      <Text style={{fontSize:10,fontWeight:500,color:'#ffffff',marginLeft:36,marginTop:10}}>your first parking</Text>
      <View style={{height:24,width:92,backgroundColor:'#ffffff', marginLeft:30,marginTop:15,borderRadius:10}}>
           
           <Text style={{fontSize:10,fontWeight:600,padding:5,marginLeft:18}}>Book Now</Text>
            
         </View>
      </View>
</View>
</ScrollView>
</View>
<Text>{"\n"}</Text> 


<View >
  
  <View style={styles.fastags2} > 
  <Text style={{fontSize:16,fontWeight:500,marginLeft:-10}}>Gonna Travel ?</Text>
  <View style={{
      flexDirection:'row',
      justifyContent:'space-between',marginTop:20}}>
    <TouchableOpacity onPress={() => navigation.navigate('CarWash')}>
      <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'white',padding:3,shadowColor:'black',elevation:5,}}>  
      <Image source={require('../assets/images/wash1.png')} style={{marginLeft:8,marginTop:5}} />
      </View> 
      <Text style={{fontSize:10,marginTop:10,marginLeft:4,fontWeight:400}}>Car Wash</Text>
   </TouchableOpacity>

   <TouchableOpacity onPress={() => navigation.navigate('TollEstimator')}>
       <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)', height:41,width:51,borderColor:'white',marginLeft:30,shadowColor:'black',elevation:5,}}>    
       <Image source={require('../assets/images/toll1.png')} style={{marginLeft:8,marginTop:5}} /> 
       </View>
       <Text style={{fontSize:10,marginTop:10,marginLeft:20,fontWeight:400}}>  Estimate Toll</Text>
   </TouchableOpacity>

   <TouchableOpacity onPress={() => navigation.navigate('CarShop')} >
     <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)', height:41,width:51,borderColor:'white',marginLeft:20,shadowColor:'black',elevation:5,}}>  
     <Image source={require('../assets/images/bag1.png')} style={{marginLeft:10,marginTop:5}} /> 
     </View>
     <Text style={{fontSize:10,marginTop:10,marginLeft:35,fontWeight:400}}>Shop</Text>
  </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Protocols')}>
      <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)', height:41,width:51,borderColor:'white', marginLeft:30,shadowColor:'black',elevation:5,}}>   
      <Image source={require('../assets/images/traffic.png')}  style={{marginLeft:10,marginTop:5}}/> 
      </View>
     <Text style={{fontSize:10,marginTop:10,marginLeft:30,fontWeight:400}}>  Protocols</Text>
   </TouchableOpacity>
   </View>
  </View>


  <View>
      <Text style={{fontSize:16,marginLeft:30,marginTop:20,fontWeight:500}}>Premium Plans</Text>
      <View style={{flexDirection:'row',marginTop:-20,marginLeft:10}}>
  <View style={{ 
      height:120, width:170, 
      backgroundColor:'rgba(26, 158, 117, 0.8) rgba(26, 158, 117, 1) rgba(166, 167, 101, 1)' ,
      borderRadius:20,marginLeft:20,marginTop:50}}>
        <Text style={{fontSize:15,marginLeft:15,marginTop:10,color:'rgba(255, 255, 255, 1)',color:'rgba(251, 255, 41, 1)'}}>Monthly Parking</Text>
        <Text style={{fontSize:10,marginLeft:15,marginTop:5,color:'rgba(255, 255, 255, 1)'}}>Dedicated parking available        near you.</Text>
        <Image style={{height:60,width:60,marginLeft:100,marginTop:-15}} source={require('../assets/images/cars.png')} /> 
       
        <View style={{height:20,width:80,marginLeft:12,marginTop:-25,borderWidth:1,backgroundColor:'white',borderRadius:8,borderColor:'white'}}>
            <Text style={{fontSize:8,padding:3,marginLeft:4,fontWeight:600}}> Explore Now   </Text>
            <Image style={{marginLeft:55,marginTop:-14}} source={require('../assets/images/arrov1.png')} />
        </View>
        <View>
        </View>
        
         </View>



         <View style={{ 
      height:120, width:170, 
      backgroundColor:'rgba(26, 158, 117, 0.8) rgba(26, 158, 117, 1) rgba(166, 167, 101, 1)' ,
      borderRadius:20,marginLeft:10,marginTop:50}}>
        <Text style={{fontSize:15,marginLeft:15,marginTop:10,color:'rgba(255, 255, 255, 1)',color:'rgba(251, 255, 41, 1)'}}>Elite Car Wash</Text>
        <Text style={{fontSize:10,marginLeft:15,marginTop:5,color:'rgba(255, 255, 255, 1)'}}>Elite car grooming at your doorstep.</Text>
        <Image style={{height:50,width:50,marginLeft:118,marginTop:-8}} source={require('../assets/images/explore.png')} /> 
       
        <View style={{height:20,width:80,marginLeft:12,marginTop:-25,borderWidth:1,backgroundColor:'white',borderRadius:8,borderColor:'white'}}>
            <Text style={{fontSize:8,padding:3,marginLeft:4,fontWeight:600}}> Explore Now   </Text>
            <Image style={{marginLeft:55,marginTop:-14}} source={require('../assets/images/arrov1.png')} />
        </View>
        <View>
        </View>
        </View>
  </View>
  </View>
  <Text>{"\n"}</Text>
  
  <View style={{height:280,width:350,borderWidth:1,marginLeft:20,shadowColor:'black',elevation:8,borderRadius:15,backgroundColor:'white',borderColor:'white'}}>
    <Text style={{marginTop:10,marginLeft:15,fontSize:16,fontWeight:500}}>Recharge & Bill Payments</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginLeft:-10,marginTop:25}} > 

        <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,marginLeft:10,borderColor:'rgba(240, 255, 250, 1)',padding:3,shadowColor:'black',elevation:5,}}>
        <Image source={require('../assets/images/8.png')} style={{marginTop:5,marginLeft:8}} />
        </View> 
        <Text style={{fontSize:10,marginTop:45,marginLeft:-86,fontWeight:400}}>  Fastag {"\n"}Recharge</Text>

        <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',padding:1,shadowColor:'black',elevation:5,}}>
        <Image source={require('../assets/images/6.png')} style={{marginTop:5,marginLeft:8}} />
        </View> 
        <Text style={{fontSize:10,marginTop:45,marginLeft:-85,fontWeight:400}}>  Mobile{"\n"}Recharge</Text>

        <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',padding:1,shadowColor:'black',elevation:5,}}>
        <Image source={require('../assets/images/7.png')}style={{marginTop:5,marginLeft:8}}  />
        </View> 
        <Text style={{fontSize:10,marginTop:50,marginLeft:-85,fontWeight:400}}>Electricity</Text>
        <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',padding:1,shadowColor:'black',elevation:5,marginLeft:-10}}>
        <Image source={require('../assets/images/1.png')} style={{marginTop:5,marginLeft:8}}  />
        </View>
        <Text style={{fontSize:10,marginTop:50,marginLeft:-80,fontWeight:400}}>Water</Text>
        </View>

        <Text>{"\n"}</Text>

         
      <View style={{flexDirection:'row',justifyContent:'space-evenly',marginLeft:-10}}>

<View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',marginLeft:12,padding:3,shadowColor:'black',elevation:5,}}>
<Image source={require('../assets/images/5.png')} style={{marginTop:5,marginLeft:14}}/>
</View> 
<Text style={{fontSize:10,marginTop:45,marginLeft:-80,fontWeight:400}}>     Gas{"\n"}  Cylinder</Text>
<View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',marginLeft:12,padding:3,shadowColor:'black',elevation:5,}}>
<Image source={require('../assets/images/3.png')} style={{marginTop:5,marginLeft:8}} />
</View> 
<Text style={{fontSize:10,marginTop:45,marginLeft:-80,fontWeight:400}}>     Loan{"\n"}  Payment</Text>
<View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',marginLeft:10,padding:3,shadowColor:'black',elevation:5,}}>
<Image source={require('../assets/images/4.png')} style={{marginTop:5,marginLeft:8}}  />
</View> 
<Text style={{fontSize:10,marginTop:50,marginLeft:-80,fontWeight:400}}>     DTH</Text>
<View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',padding:4,marginLeft:12,marginRight:-15,shadowColor:'black',elevation:5,}}>
<Image source={require('../assets/images/2.png')} style={{marginTop:5,marginLeft:8}}  />
</View> 
<Text style={{fontSize:10,marginTop:50,marginLeft:-75,marginRight:-10,fontWeight:400}}>  House Rent</Text>
</View>
</View>

<Text>{"\n"}</Text>
<Text>{"\n"}</Text>

<View style={{flexDirection:'row',marginTop:-80}}>
  
<ScrollView horizontal={true}>
<View style={{ 
height:150, width:200, 
backgroundColor:'rgba(26, 158, 117, 0.8) rgba(26, 158, 117, 1) rgba(166, 167, 101, 1)' ,
borderRadius:20,marginLeft:20,marginTop:50}}>
<Text style={{fontSize:15,marginLeft:15,marginTop:10,color:'rgba(255, 255, 255, 1)',color:'rgba(251, 255, 41, 1)'}}>Get 15% off on </Text>
<Text style={{fontSize:15,marginLeft:12,marginTop:5,color:'rgba(255, 255, 255, 1)'}}> FASTag recharge</Text>
<Text style={{fontSize:9,marginLeft:12,marginTop:5,color:'rgba(255, 255, 255, 1)'}}> Pay using Axis Bank Credit & Debit Cards</Text>

<Image style={{marginLeft:110,marginTop:30}} source={require('../assets/images/fastag.png')} /> 

<View style={{height:18,width:80,marginLeft:12,marginTop:-20,borderWidth:1,backgroundColor:'white',borderRadius:8,borderColor:'white'}}>
    <Text style={{fontSize:8,padding:2,marginLeft:8}}> Recharge  Now   </Text>
</View>
<View>
</View>
</View>


<View style={{ 
      height:150, width:200, 
      backgroundColor:'rgba(27, 83, 228, 1),rgba(38, 138, 255, 1)',
      borderRadius:20,marginLeft:10,marginTop:50}}>
        <Text style={{fontSize:15,marginLeft:15,marginTop:10,color:'rgba(255, 255, 255, 1)',color:'rgba(251, 255, 41, 1)'}}>Reserve a Parking Slot</Text>
        <Text style={{fontSize:10,marginLeft:15,marginTop:5,color:'rgba(255, 255, 255, 1)'}}>Win 300ml petrol on your first {"\n"}parking!</Text>
        <Image style={{height:40,width:40,marginLeft:140,marginTop:10}} source={require('../assets/images/explore.png')} /> 
       
        <View style={{height:18,width:80,marginLeft:12,marginTop:-23,borderWidth:1,backgroundColor:'white',borderRadius:8,borderColor:'white'}}>
            <Text style={{fontSize:8,padding:2,marginLeft:10}}> Explore  Now   </Text>
        </View>
        <View>
        </View>
        </View>
        </ScrollView>
        </View>


        <View style={{height:200,width:350,marginTop:20,borderWidth:1,marginLeft:20,backgroundColor:'white',borderWidth:1, borderColor:'rgba(245, 244, 244, 1)',shadowColor:'black',elevation:5,borderRadius:15}}>
     
     <Text style={{fontSize:16,marginTop:20,marginLeft:10,fontWeight:600}}> Your Car’s Center </Text>
   
 
 <Text>{"\n"}</Text>
 <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>

 <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',shadowColor:'black',elevation:5,}}>
        <Image style={{margin:7}} source={require('../assets/images/ticket2.png')} />
 </View>        
         <Text style={{marginTop:50,marginLeft:-85,fontSize:10,fontWeight:400}}>    Pay {"\n"}Challans</Text>
        
<View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',shadowColor:'black',elevation:5,}}>
         <Image style={{margin:7}} source={require('../assets/images/alarm.png')} />
 </View>        
         <Text style={{marginTop:50,marginLeft:-85,fontSize:10,fontWeight:400}}>  Crime {"\n"}Reporter</Text>
        
<View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',shadowColor:'black',elevation:5,}}>
         <Image style={{marginTop:8,marginLeft:12}} source={require('../assets/images/rto.png')} />
 </View>         
         <Text style={{marginTop:50,marginLeft:-85,fontSize:10,fontWeight:400}}>    RTO {"\n"}  Center</Text>
        
<View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',shadowColor:'black',elevation:5,}}>
         <Image style={{marginTop:8,marginLeft:12}} source={require('../assets/images/center.png')} />

</View>     
         <Text style={{fontSize:10,marginTop:50,marginLeft:-83,fontWeight:400}}>  PUCC {"\n"} Center</Text>
</View>

</View>

 <View>
           <Image  style={{marginLeft:30,marginTop:20}} source={require('../assets/images/img.png')} />
           <Text style={{color:'rgba(235, 255, 0, 1)', marginLeft:50,marginTop:-190,fontSize:28}}>Save 
             <Image source={require('../assets/images/rupies.png')}/> 500</Text>
           <Text style={{marginLeft:50,fontSize:20,marginTop:9,color:'white'}}>On Your First EV Parking</Text>
           <Text style={{marginLeft:50,marginTop:9,color:'white'}}>We provide dedicated monthly{"\n"}parking with surveillance</Text>
           <Image style={{marginLeft:220,marginTop:10}} source={require('../assets/images/img2.png')} />
           <Text style={{fontSize:23,marginLeft:270,marginTop:-35,color:'white'}}>100+</Text>
           <Text style={{marginLeft:275,color:'white',fontSize:10}}>Happy Customers</Text>
           <View style={{height:5,width:90,borderWidth:1,marginLeft:150,backgroundColor:'white',borderColor:'white',borderRadius:5}}>
             </View>
             <View style={{marginTop:-4,height:2,width:40,borderWidth:1,marginLeft:152,backgroundColor:'rgba(26, 158, 117, 1)',borderColor:'rgba(26, 158, 117, 1)'}}>
             </View>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>

 
      <View style={{height:150,width:350,marginTop:-20,borderWidth:1,marginLeft:20,backgroundColor:'white', borderColor:'rgba(245, 244, 244, 1)',shadowColor:'black',elevation:5,borderRadius:15}}>
       <Text style={{fontSize:16,marginLeft:20,marginTop:10,fontWeight:600}}>Exclusive Offers</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30,marginLeft:40}}>
         
          <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',marginLeft:-10,padding:4,shadowColor:'black',elevation:5,}}>
        <Image style={{marginLeft:4}} source={require('../assets/images/11.png')} />
        </View>
            <Text style={{marginTop:50,marginLeft:-95,fontSize:14,fontWeight:400}}>Rewards</Text>
            <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',marginLeft:20,padding:4,shadowColor:'black',elevation:5,}}>
        <Image style={{marginLeft:4}} source={require('../assets/images/12.png')} />
        </View> 
            <Text style={{marginTop:50,marginLeft:-100,fontSize:14,fontWeight:400}}>Discounts</Text>
            <View style={{borderWidth:1,backgroundColor:'rgba(240, 255, 250, 1)',height:41,width:51,borderColor:'rgba(240, 255, 250, 1)',marginLeft:10,padding:4,shadowColor:'black',elevation:5,}}>
        <Image style={{marginLeft:6}} source={require('../assets/images/13.png')} />
        </View> 
            <Text style={{marginTop:50,marginLeft:-110,marginRight:20,fontSize:14,fontWeight:400}}>Refer & Win</Text>
          </View>
       </View>
       
       <Text>{"\n"}</Text>
       <View>
       <Image style={{marginLeft:30,height:180}} source={require('../assets/images/bg.png')} />
       <Image style={{marginLeft:160,marginTop:-150}} source={require('../assets/images/phone.png')} />
       <Image style={{marginLeft:180,marginTop:-70}} source={require('../assets/images/play.png')} />
       </View>


       <Text>{"\n"}</Text>
       <Text>{"\n"}</Text>
       <Text>{"\n"}</Text>
       
       <Text>{"\n"}</Text>
       <Text>{"\n"}</Text>
       <Text>{"\n"}</Text>
       
       <Text>{"\n"}</Text>
       <Text>{"\n"}</Text>








</View>
</View>
</View>
  </ScrollView>

</View>

    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
    width:400,
    height:'100%',
    
    },
   
 
    header:{
    height:'8.2%',   
    width:400, 
    backgroundColor:'rgba(26, 158, 117, 1)',
    borderBottomLeftRadius: 90, 
    borderBottomRightRadius: 90, 
    
    },
    box1:{
    width: 350,
    height: 265,
    borderRadius:20, 
    marginTop:-120,
    marginLeft:21,
    backgroundColor: 'white',
    shadowColor:'black',
    elevation:5,

    
    
    },
    icons:{
    
    flexDirection:'row',
    justifyContent:'flex-end',
    marginRight:9
    
    },
    image:{
    
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:1
    
    
    },
    
    box2:{
    width: 350,
    height: 400, 
    borderRadius:20,
    marginTop:80,
    marginLeft:-10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor:'black',
    elevation:5,
    
    },
    buttons:{
    width:100,
    height:40,
    flexDirection:'row',
    marginLeft:10,
    marginRight:20,
    justifyContent:'space-between',
    color:'rgba(26, 158, 117, 1)'
    
    
    
    
    },
    button1:{
    height:30,
    width:250,
    
    
    },
    
    fastags:{
    width: 330,
    height: 380,
    borderRadius:40,
    marginTop:30,
    marginLeft:15,
    flexDirection:'row',
    justifyContent:'space-evenly',
    
    
    },
    fastags2:{
      width: 338,
      height: 150,
      borderRadius:15,
      marginTop:25,
      marginLeft:30,
      padding:25,
      backgroundColor:'white',
      borderWidth:1,
      borderColor:'rgba(245, 244, 244, 1)',
      
      shadowColor:'black',elevation:5,
      },
    box3:{
    height:30,
    width:60,
    backgroundColor:'rgba(26, 158, 117, 1)',
    
    }
    
    });
export default HomeScreen;