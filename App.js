import {StatusBar, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RootNavigator from './src/navigations/RootNavigators';

export default function App() {
  const statusBarHeight = StatusBar.currentHeight || 0;

  return (
    // {/* <WelcomeScreen/> */}
    //  {/* <LoginScreen/> */}
  //  <View  style={{paddingTop: statusBarHeight }}>
  //      <HomeScreen />
  //  </View>
    <RootNavigator  />
  )
}





