import * as React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack" ;
import HomeScreen from '../screens/HomeScreen';
import ReportFormScreen from '../screens/ReportFormScreen';
import ReportScreen from '../screens/ReportScreen';

const Home = createNativeStackNavigator()

export  function HomeStack(){
    return(
        <Home.Navigator >
            <Home.Screen  
               name ="HomeScreen"
               component = {HomeScreen}
               options = {{ headerShown : false }}
            />
              <Home.Screen  
               name ="ReportFormScreen"
               component = {ReportFormScreen}
               options = {{ headerShown : false }}
            />
               <Home.Screen  
               name ="ReportScreen"
               component = {ReportScreen}
               options = {{ headerShown : false }}
            />


        </Home.Navigator>
    )
}