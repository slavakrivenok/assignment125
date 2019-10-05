import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View, Image, Alert } from 'react-native';

export default class Register extends Component {

onPressEvent() {
  Alert.alert('No members are yet registered on the App!')
}

  render() {
    return (
      <View style={styles.container}>
        
        <Image
        style={styles.logo}
          source={require('../assets/fritto.png')} // logo image
        />

        <Text style={styles.logoText}>Fritto's Pizzeria</Text> 


        <TextInput style={styles.whiteBox}
        onChangeText={
          
          text => this.setState({user: text}) //username field
        }
        style={styles.input}
        placeholder="Username"></TextInput> 

        <TextInput style={styles.whiteBox} // email field
        onChangeText={
          
          text => this.setState({email: text})
        }
        style={styles.input}
        placeholder="Email"></TextInput>

        <TextInput  //passfield 1 
        onChangeText={
          text => this.setState({pass: text})
        } 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry={true} 
        ></TextInput>
        <TextInput 
        onChangeText={
          text => this.setState({pass: text})
        } 
        style={styles.input} 
        placeholder="Confirm Password" // confirm passfield
        secureTextEntry={true} 
        ></TextInput>

            <Button 
            onPress = {this.onPressEvent} // on press alert user
            style={styles.h1} 
            title="Already a Member?"
          />

        <View style={styles.loginBut}>
          <Button 
            onPress={
              () => this.props.navigation.navigate('App') //goes app.js home navigator and opens 1st page 
            }
            style={styles.h1} 
            title="Register"
          />
        </View>

      </View>
    )
  }
}

//styles

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  loginBut: {
    backgroundColor: 'white',
    borderRadius: 20,
    color: 'white',
    position: 'absolute', 
    bottom: "24%",
    width: '90%',

  },
  h1: {
    fontSize: 10,
    height: 10,
    position: 'absolute', 
    bottom: "10%",
  },
  input: {
    
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 10,
    width: '50%',
    textAlign: 'center',
    borderRadius: 20,
    
    

  },
logo: {
  height: '20%',
  width: '20%',
  position: 'absolute',
  bottom: '76%',
  
  
},

logoText: {
  fontSize: 35,
  fontStyle: 'italic',
  color: "white",
  position: 'absolute',
  bottom: '70%',
},



});