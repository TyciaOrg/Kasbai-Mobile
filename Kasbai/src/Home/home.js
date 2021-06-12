import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';





import { Component } from 'react';


export default class HomeScreen extends Component {

    state = {
        sectionArray :['Add Entry', 'View Entry']
    }

    renderItem = ({ item }) => {
        const navigateTo = item == 'Add Entry' ? 'selectType' : 'showEntry'
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate(navigateTo)} style={{ margin:10, padding:10, backgroundColor: 'white', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', margin: 10, shadowRadius: 6,
            shadowOpacity: 0.2,
            height: 130, width:'100%',
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            elevation: 3,
            borderRadius: 10}}>
                <Image style={{width:'60%', height:'80%'}} resizeMode="contain" source={require('../../assets/Questionnaire.png')} ></Image>
                <Text>{item}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
                <View style={{margin:10}}>
                <Text style={{fontSize:22, fontWeight:'bold'}}>Welcome Sandesh</Text>
                <FlatGrid data={this.state.sectionArray} itemDimension={130} renderItem={this.renderItem}>

                </FlatGrid>
                </View>
                



        )
    }
}

