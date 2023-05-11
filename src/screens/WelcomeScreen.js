import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const logo = require('../../assets/ecorpt.png');

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Welcome to ecoRPT</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Signup')}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"green",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:"90%",
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color:'#fff',
  },
  buttonContainer: {
    flexDirection: 'column',
    width:"85%",
    alignContent:'center',
    justifyContent:'center'
  },
  button: {  
    marginVertical: 5,
    width:"100%",
  },
  buttonText: {
    borderRadius: 5,
    textAlign:'center',
    padding: 10,
    color: 'green',
    backgroundColor:'#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default WelcomeScreen;