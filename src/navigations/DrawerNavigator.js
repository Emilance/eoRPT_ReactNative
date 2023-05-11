import * as React from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer" ;
import { HomeStack } from './StackNavigators';
import { Icon } from 'react-native-elements';
import ReportFormScreen from '../screens/ReportFormScreen';
import ReportScreen from '../screens/ReportScreen';

const Drawer = createDrawerNavigator()

export default function DrawerNavigator (){
    return (
        <Drawer.Navigator>
            <Drawer.Screen  
                 name = "HomeStack"
                 component = {HomeStack}
                 options = {{
                    title : "Home",
                    drawerIcon: ({focussed, size}) => <Icon  type='material-community' 
                    name="home" color= {focussed ? "#7cc" : "grey"}
                    size = {size}
                    />,
                    headerShown: false
                 }}
            />
             <Drawer.Screen  
                 name = "ReportFormScreen"
                 component = {ReportFormScreen}
                 options = {{
                    title : "Report An issue",
                    drawerIcon: ({focussed, size}) => <Icon  type='material-community' 
                    name="form-select" color= {focussed ? "#7cc" : "grey"}
                    size = {size}
                    />,
                    headerShown: false
                 }}
            />
              <Drawer.Screen  
                 name = "ReportScreen"
                 component = {ReportScreen}
                 options = {{
                    title : "List Of Reports",
                    drawerIcon: ({focussed, size}) => <Icon  type='material-community' 
                    name="list-status" color= {focussed ? "#7cc" : "grey"}
                    size = {size}
                    />,
                    headerShown: false
                 }}
            />
        </Drawer.Navigator>
    )
}