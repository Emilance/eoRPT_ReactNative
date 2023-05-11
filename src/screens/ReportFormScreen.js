import React, { useState } from 'react';
import { View,TextInput, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MapView, { Marker } from 'react-native-maps';
import * as ImagePicker from 'expo-image-picker';

import HeaderComponent from '../components/HeaderComponent';
import { ScrollView } from 'react-native';

const ReportFormScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [media, setMedia] = useState(null);

  const handleCapturePhoto = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.errorCode) {
        setMedia(response.uri);
      }
    });
  };

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setMedia(result.assets[0].uri);
      }
  
  };

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setLocation(coordinate);
  };
  const handleTextChange = (value) => {

};

  return (
    <ScrollView>

    <View style={styles.container}>
        <HeaderComponent  navigation={navigation}/>
      <Text style={styles.title}>Submit Report</Text>

      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && (
          <Marker coordinate={location} title="Selected Location" />
        )}
      </MapView>
      <View style={styles.buttonCon}>
      <TouchableOpacity style={styles.photoButton} onPress={handleCapturePhoto}>
        <Text style={styles.buttonText}>Capture Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.photoButton} onPress={handleChoosePhoto}>
        <Text style={styles.buttonText}>Choose Photo</Text>
      </TouchableOpacity>

      </View>
      <TextInput
        style={styles.textInput}
        multiline={true}
        placeholder="Enter your report description"
        onChangeText={handleTextChange}
      />
      {media && <Image source={{ uri: media }} style={styles.image} />}
      <TouchableOpacity style={styles.submitButton}  onPress={() => console.log('Report submitted')}>
        <Text style={{...styles.buttonText,   color : '#5CBA47'}}>Submit Report</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  buttonCon : {
     flexDirection:"row",
     width:'100%',
     justifyContent:"space-around"
  },
  photoButton: {
    backgroundColor: '#5CBA47',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    
    marginBottom: 10,
  },
  submitButton:{
    borderColor: '#5CBA47',
    backgroundColor:'transparent',
    color : '#5CBA47',
    borderWidth: 3,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width:"95%",
    marginTop:3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },
  textInput: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});



export default ReportFormScreen