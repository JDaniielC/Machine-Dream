import React, { useState, useEffect } from 'react';
import {StyleSheet, Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = ({navigation}) => {
    const {navigate} = navigation;
    
    var touchProps = {
        style: styles.acess,
    }

    const backBottom = () => {
        navigate('Connection')
    };

    return (
        <View style={styles.page}>
            <MaterialCommunityIcons.Button
            name="arrow-expand-left" 
            size={40} 
            color="green" 
            style={styles.back}
            onPress={backBottom}
            />
            <View style={styles.box}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <View style={styles.first}>
                    <TextInput style={styles.input} placeholder='Usuário' />
                    <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true}/>
                    <TouchableOpacity {...touchProps}>
                        <Text style={{fontSize: 30}}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    box: {
        width: 400,
        alignItems: 'center',
    },

    page: {
        flex: 1,
        backgroundColor: 'white',
    },

    input: {
        fontSize: 30,
        backgroundColor: '#F1F1F4',
        padding: 10,
        margin: 15,
        borderRadius: 3,
    },

    logo: {
        width: 300,
        height: 170,
        marginTop: 33
    },

    first: {
        marginTop: 40,
        justifyContent: 'space-between',
    },

    acess: {
        marginTop: 15,
        width: 270,
        padding: 15,
        borderRadius: 15,
        backgroundColor: '#52D1DC',
        alignItems: 'center',
   },

   back: {
        backgroundColor: 'white',
        
   }

});

export default Login;
