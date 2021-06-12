import React from 'react';
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity , TextInput} from 'react-native';





import { Component } from 'react';


export default class AddEntry extends Component {

    state = {
        sectionArray :['Add Entry', 'View Entry']
    }
renderTextField = (lable)=>{
    return (
        <View>
            <Text style={styles.labelStyle}>{lable}</Text>
            <TextInput style={styles.textInputStyle}></TextInput>
        </View>
    )
}


    render() {
        return (
                <View style={styles.viewStyle}>
               {this.renderTextField('Area')}
               {this.renderTextField('No of vaccinations')}
               {this.renderTextField('Mode of transport')}
               <TouchableOpacity disabled={this.state.isLoading} style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('addEntry')}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Submit</Text>
                </TouchableOpacity>


                </View>
                



        )
    }
}

const styles = {
    viewStyle: {
        backgroundColor:'white', padding:10
    },
    containerStyle: {
        borderWidth: .3,
        borderRadius: 15,
        borderColor: '#ddd',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        padding: 2,
        flexDirection: 'row'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'green',
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
    },
    textInputStyle: {
        borderRadius: 5, fontSize: 20, height: Platform.OS == 'ios' ? 40 : null, width: '90%', backgroundColor: 'lightgray', margin:10
    },
    labelStyle: {
        marginLeft: 10,
        color: 'black'
    },
  

};

