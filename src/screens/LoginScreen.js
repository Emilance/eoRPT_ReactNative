import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const logo = require('../../assets/ecorpt.png');

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Input your correct password and UserName</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oaUTH}>
          <Text style={{...styles.buttonText,  color: "#4CAF50"}}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    width : '30%',
    top: 30,
    left: 20,
    borderRadius:5,
    padding:5,
    backgroundColor: "grey"
  },
  logo: {
    width:"100%",
    height:34
   
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign:"center"
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    width:"100%",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },
  oaUTH:{
        backgroundColor: '#fff',
        width:"100%",
        padding: 10,
        borderRadius: 5,
        marginTop : 20,
        borderWidth:2,
        borderColor: "#4CAF50",
        

}
});

export default LoginScreen;
