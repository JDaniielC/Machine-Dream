import React, { useState, useEffect } from 'react';
import {StyleSheet, Image, View, Text, TextInput, TouchableOpacity,} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const home = ({navigation}) => {
    return (
        <>
            <View style={{backgroundColor: '#FFFFFF', alignItems: 'center', flex: 1}}>
                <View style={styles.map}>
                    <Image source={require('./logo.png')} style={styles.logo}/>
                </View>
    
                <View style={styles.rectangle}>
                    <MaterialIcons name="bluetooth-searching"style={styles.bluetooth}size={41}/>
                    <Image source={require('../assets/bottle.gif')} style={styles.bottle} />
                </View>
    
                <View style={styles.contBox}>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            style={styles.contador}
                            placeholder="Contador"
                        />
                        <TouchableOpacity style={styles.zerarButton}>
                            <Text style={{fontSize: 30, color: 'white'}}>Zerar</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity style={styles.turn}>
                        <Text style={{fontSize: 60, color: 'white'}}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        width: 400,
        height: 61,
        borderBottomWidth: 1,
        borderBottomColor: '#BBBBBF',
        alignItems: 'center',
    },
    
    logo: {
        width: 200,
        height: 44.43,
        marginTop: 8,
    },
    
    rectangle: {
        marginTop: 80,
        alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: '#F1F1F4',
            width: 306,
            height: 192,
            borderRadius: 17,
            position: 'absolute'
    },
    
    bottle: {
        marginTop: 10,
        width: 60,
        height: 149.86,
    },
    
    bluetooth: {
        color: "green",
        position: 'absolute',
        left: 10,
        bottom: 10,
    },
    
    contBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 220,
    },
    
    contador: {
        height: 50,
        backgroundColor: '#F1F1F4',
        color: '#333',
        borderRadius: 5,
        paddingHorizontal: 30,
        fontSize: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    zerarButton: {
        width: 130,
        height: 50,
        backgroundColor:'#047A73',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },
    
    turn: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1BE86D',
        width: 250,
        height: 250,
        borderRadius: 180
    }
});

export default home;
    
    