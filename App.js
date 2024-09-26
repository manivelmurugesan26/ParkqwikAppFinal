import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/NearByParking';
import Wallet from './screens/Wallet';
import AddVachile from './screens/AddVachile';
import Payment from './screens/Payment';
import CarWash from './screens/CarWash';
import VachileInsurence from './screens/VachileInsurence';
import VachileInsurence2 from './screens/VacileInsurence2';
import CarModel1 from './screens/CarModel1';
import FuelPage1 from './screens/FuelPage1';
import RoadSide from './screens/RoadSide';
import TollEstimator from './screens/TollEstimator';
import ValetParking from './screens/ValetParking';
import BuyFastag from './screens/BuyFastag';
import ReplaceFastag from './screens/ReplaceFastag';
import CloseFastag from './screens/CloseFastag';
import ActiveFastag from './screens/ActiveFastag';
import RentoutHelmet from './screens/RentoutHelmet';
import FuelPrice from './screens/FuelPrice';
import CarShop from './screens/CarShop';
import Protocols from './Protocols';
import BuyFastag2 from './screens/BuyFastag2';
import BuyFastag3 from './screens/BuyFastag3';

const Stack = createNativeStackNavigator();


export default function App() {

    return(
      <NavigationContainer>
      <Stack.Navigator>


        <Stack.Screen name=" " component={HomeScreen}  options={{headerShown:false}}/>
        <Stack.Screen name={'DetailsScreen'} component={DetailsScreen} options={{ headerTitle: 'Buy FASTag',headerStyle:{
          backgroundColor:'#1A9E75'}} }/>
        <Stack.Screen name={'Wallet'} component={Wallet} options={{headerShown:true}} />
        <Stack.Screen name={'AddVachile'} component={AddVachile} options={{headerShown:true}}/>
        <Stack.Screen name={'CarWash'} component={CarWash} options={{headerShown:true}}/>
        <Stack.Screen name={'VachileInsurence'} component={VachileInsurence} options={{headerShown:true}}/>
        <Stack.Screen name={'Payment'} component={Payment} options={{headerShown:true}} />
        <Stack.Screen name={'VachileInsurence2'} component={VachileInsurence2} options={{headerShown:true}} />
        <Stack.Screen name={'CarModel1'} component={CarModel1} options={{headerShown:true}} />
        <Stack.Screen name={'FuelPage1'} component={FuelPage1} options={{headerShown:true}} />
        <Stack.Screen name={'RoadSide'} component={RoadSide} options={{headerShown:true}} />
        <Stack.Screen name={'TollEstimator'} component={TollEstimator} options={{headerShown:true}} />
        <Stack.Screen name={'ValetParking'} component={ValetParking} options={{headerShown:true}} />
        <Stack.Screen name={'BuyFastag'} component={BuyFastag} options={{headerShown:true}} />
        <Stack.Screen name={'BuyFastag2'} component={BuyFastag2} options={{headerShown:true}} />
        <Stack.Screen name={'BuyFastag3'} component={BuyFastag3} options={{headerShown:true}} />
        <Stack.Screen name={'ReplaceFastag'} component={ReplaceFastag} options={{headerShown:true}} />
        <Stack.Screen name={'CloseFastag'} component={CloseFastag} options={{headerShown:true}} />
        <Stack.Screen name={'ActiveFastag'} component={ActiveFastag} options={{headerShown:true}}  />
        <Stack.Screen name={'RentoutHelmet'} component={RentoutHelmet} options={{headerShown:true}}  />
        <Stack.Screen name={'FuelPrice'} component={FuelPrice} options={{headerShown:true}}  />
        <Stack.Screen name={'CarShop'} component={CarShop} options={{headerShown:true}}  />
        <Stack.Screen name={'Protocols'} component={Protocols} options={{headerShown:true}} />
</Stack.Navigator>

</NavigationContainer>
);


};
