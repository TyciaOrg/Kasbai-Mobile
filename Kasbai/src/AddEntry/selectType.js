import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';





import { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';


export default class SelectType extends Component {

    state = {
        sectionArray: ['Add Entry', 'View Entry']
    }



    render() {
        let data = [{
            value: 'Vaccination',
        }, {
            value: 'Kits Distribution',
        }, {
            value: 'something',
        }];
        let regionData = [{
            value: 'Maharashtra',
        }, {
            value: 'MP',
        }, {
            value: 'Bihar',
        }]
        let tribeData = [{
            value: 'Korku',
        }, {
            value: 'Bhils',
        }, {
            value: 'Garo',
        }]
        return (
            <View style={{ margin: 10 }}>
                <Text></Text>
                <Dropdown
                    useNativeDriver={false}
                    label='Select Program Type'
                    data={data}
                />
                <Dropdown
                    useNativeDriver={false}

                    label='Select region'
                    data={regionData}
                />
                <Dropdown
                    useNativeDriver={false}

                    label='Select Tribe'
                    data={tribeData}
                />
                <TouchableOpacity disabled={this.state.isLoading} style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('addEntry')}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Next</Text>
                </TouchableOpacity>
            </View>




        )
    }
}

const styles = {
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
    }
}