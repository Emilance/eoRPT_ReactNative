import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
    
    const SampleReportList = () => {
      const sampleReports = [
        {
          id: '1',
          title: 'Illegal Dumping',
          description: 'Dumped waste on the street',
          image: require('../../assets/filterImage.jpg'),
          latitude: 37.7749,
          longitude: -122.4194,
        },
        {
          id: '2',
          title: 'Graffiti Vandalism',
          description: 'Graffiti on public walls',
          image: require('../../assets/filterImage.jpg'),
          latitude: 37.7735,
          longitude: -122.4365,
        },
        {
          id: '3',
          title: 'Broken Streetlight',
          description: 'Streetlight not working at night',
          image: require('../../assets/filterImage.jpg'),
          latitude: 37.7761,
          longitude: -122.4324,
        },
      ];
    
      
    
      const renderItem = ({ item }) => (
        <View style={styles.repCon}>
          <Image source={item.image} style={styles.img1} />
          <Text style={styles.title}>
            {item.title}
          </Text>
          <Text>{item.description}</Text>
          <Text>Location: {item.latitude}, {item.longitude}</Text>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Check Status</Text>
          </TouchableOpacity>
        </View>
      );
    
      return (
        <FlatList
        numRows={3}
          horizontal = {true}
          showsHorizontalScrollIndicator={false}
          data={sampleReports}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}
        />
      );
    };
    


    const styles = StyleSheet.create({
       repCon :{
         marginHorizontal: 10 
       },
       img1 :{
         width: '100%',
          height: 200 ,
          borderRadius: 5,

       },
       title :{ 
        fontSize: 18,
        fontWeight: 'bold', 
        marginTop: 10 
      },
      button :{ 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginTop: 10,
        height:40,
        borderRadius: 10,
        backgroundColor: "#5CBA47",
        justifyContent:"center",
        alignItems:"center",
      },
      buttonText : {
        color: 'white', 
        fontWeight: 'bold' 
      }
  
    })
    export default SampleReportList;