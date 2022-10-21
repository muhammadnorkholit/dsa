import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Scan from './Screen/Scan';
import Home from './Screen/Home';
import Index from './Screen';
import Splash from './Screen/Splash';
import Kandidat from './Screen/Kandidat';
import Detail from './Screen/Kandidat/Details';
import Hasil from './Screen/hasil';
import Tentang from './Screen/Tentang';

const Stack = createNativeStackNavigator();
const option = {
  gestureEnabled: false,
  presentation: 'formSheet',
  animationDuration: 2,
  animation: 'slide_from_bottom',
  gestureDirection: 'horizontal',
  headerStyle: {backgroundColor: '#6799E8'},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
  headerShadowVisible: false,
  transitionSpec: {
    open: config,
    close: config,
  },
  headerRight: () => (
    <View>
      <Image
        source={require('./img/logo.png')}
        style={{width: 40, height: 40, borderRadius: 1000}}
      />
    </View>
  ),
};
const option2 = {
  gestureEnabled: false,
  presentation: 'formSheet',
  animationDuration: 2,
  animation: 'slide_from_right',
  gestureDirection: 'horizontal',
  headerShown: false,
};

const config = {
  animation: 'timing',
  config: {
    duration: 5000,
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen options={option2} name="index" component={Index} />
        <Stack.Screen options={option2} name="scan" component={Scan} />
        <Stack.Screen options={option2} name="splash" component={Splash} />
        <Stack.Screen options={option2} name="KETOSIN" component={Home} />
        <Stack.Screen options={option} name="Kandidat" component={Kandidat} />
        <Stack.Screen options={option} name="Detail" component={Detail} />
        <Stack.Screen options={option} name="Hasil" component={Hasil} />
        <Stack.Screen options={option} name="Tentang" component={Tentang} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text style={{color: 'black'}}>Scan</Text>
    // </View>
  );
};

export default App;
