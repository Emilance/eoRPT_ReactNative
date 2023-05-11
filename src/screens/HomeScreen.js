import { View, Text,Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import { filterData } from '../data/DummyData'
import SampleReportList from '../components/HomeReports'
import { StatusBar } from 'react-native'
import MapView, { Marker } from 'react-native-maps';


const HomeScreen = ({navigation}) => {
    const [location, setLocation] = useState({"latitude": 7.469952869752125, "longitude": 4.548700265586376});
    const statusBarHeight = StatusBar.currentHeight || 0;
    const handleMapPress = (event) => {
        const { coordinate } = event.nativeEvent;
        setLocation(coordinate);
        console.log(coordinate)
      };

  return (
    <View style={{paddingTop: statusBarHeight }} >
        <View style={styles.header}>
            <View  style={styles.icon1}>
                <Icon type = "material-community"
                  name="menu"
                  color ="#fff"
                  size={40}
                  onPress={()=>  navigation.openDrawer()}
                />
            </View>
        </View>
        <ScrollView >
            <View style={styles.home} >
                <Text style={styles.text}>Report to Save Eco</Text>
                <View  style={styles.view2} >
                    <Text style={styles.text1}>
                        Safe our planet and save your env
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("ReportFormScreen")} >
                    <Text style={styles.buttonText}>Report</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer} >
                    <Image style={styles.img1}    resizeMode="cover" source={require("../../assets/earth.png")} />
                </View>
          </View>
          <View style={styles.bottom}>

                <Text style={styles.title2} >Filter By</Text>
                <FlatList 

                 numRows={4}
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
                 data={filterData}
                 keyExtractor = {(item => item.id)}
                 renderItem={({item})=> (
                    <View style= {styles.card} >
                        <View style ={styles.view3} >
                            <Image style={styles.img1}  source={item.image} />
                        </View> 
                        <View >
                            <Text style= {styles.cardName}>{item.title}</Text>
                        </View>
                    </View>
                 )} 
                 />
          <Text style={styles.title2} >Nearest Reports</Text>
           
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude:7.469952869752125,
          longitude: 4.548700265586376,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && (
          <Marker coordinate={location} title="Selected Location" />
        )}
      </MapView>


      <Text style={styles.title2} >Last Reports</Text>

          <SampleReportList/>
          </View>
        </ScrollView>
        <StatusBar style="light" backgroundColor="#4CAF50" translucent/> 
    </View>
  )
}


const styles =StyleSheet.create({
    container :{
        
    },
    header : {
        paddingTop:3,
        width:"100%",
        backgroundColor: "#5CBA47",
        paddingHorizontal:10,
        
    },
    icon1:{
        alignSelf:'flex-start',

    },
    home :{
        paddingHorizontal:10,
        height:170,
        position:"relative",
        backgroundColor: "#5CBA47",

    },
    text1:{
      color:"#fff",
      fontSize : 12,
      textAlign:"right",
      marginVertical:10,
    },
    map: {
        width: '100%',
        height: 200,
        marginBottom: 20,
      },
    text: {
        color:"#fff",
        fontSize : 28,
        textAlign:"right",
        marginVertical:10,
        fontWeight:"700"
    },
    button :{
        backgroundColor:"grey",
        width:"35%",
        marginVertical:5,
        borderRadius:10,
        borderWidth:0,
        alignSelf:"flex-end",
        backgroundColor:"#3A4284",
        padding: 10
    },
    buttonText: {
        textAlign:'center',
        fontWeight:"800",
        color:"#fff"
    },
    imageContainer:{
        width: 100,
        height: 100,
        position:"absolute",
        left: 0,
        bottom: 0,
    },
    img1:{
    width:"100%",
    height: "100%",
    borderRadius:7
    },
    view3 :{
       width:"100%",
       height:60
    },
    card :{
        margin:18,
        marginTop:10,
        width : 70,
        justifyContent:"center",
        alignItems:'center'
    },
    bottom : {
        marginHorizontal:10,
    },
    title2 :{
        fontWeight:"800",
        fontSize: 20,
        color: "#3A4284",
        marginVertical:10,
    },
    cardName : {  
        fontWeight:"700",
        color: "#3A4284"
    }
})
export default HomeScreen