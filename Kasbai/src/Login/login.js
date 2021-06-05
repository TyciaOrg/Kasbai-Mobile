import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Alert, Linking } from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {support_email} from '../Utils/Constants'

import { Component } from 'react';


export default class Login extends Component {

    state = {

    }
    support = () => {
        try {
          Alert.alert('', `Please contact us on ${support_email}`, [{
            text: 'Send mail', onPress: () => {
              Linking.openURL(`mailto:${support_email}`).then({
    
              }).catch(error => {
    
              })
            }
          }, {
            text: 'Cancel',
          }])
        } catch (error) {
          Alert.alert(error.message)
        }
    
      }

      handleAuthorize = ()=>{
          this.props.navigation.navigate('homeScreen')
      }
    render() {
        return (
            <View style={styles.bottom}>
            <TouchableOpacity disabled={this.state.isLoading} style={styles.buttonContainer} onPress={() => this.handleAuthorize()}>
              <Text style={{ fontSize: 20, color: 'white' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainerPrivacyPolicy} onPress={() => Linking.openURL(policy)}>
              <Text style={{ fontSize: 10, color: 'green' }}>Terms and Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainerPrivacyPolicy} onPress={() => this.support()}>
              <Text style={{ fontSize: 10, color: 'black'}}>Trouble logging in</Text>
            </TouchableOpacity>
          </View>



        )
    }
}
const styles = {
    backgroundImage: { height: '100%', width: '100%' },
    buttonContainer: {
      backgroundColor:'green',
      borderColor: "#BABABA",
      borderRadius: 7,
      height: 40,
  
      shadowRadius: 10,
      shadowOpacity: 0.6,
      shadowColor: 'gray',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      marginTop: 10,
      justifyContent: "center",
      alignItems: 'center',
      margin: 20,
    },
    buttonText: {
      textAlign: 'center',
      color: 'green',
      fontWeight: '900',
    },
    buttonContainerPrivacyPolicy: {
      marginTop: 10,
      justifyContent: "center",
      alignItems: 'center',
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: '5%',
  
    }
  };
