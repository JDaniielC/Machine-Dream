import React, { useState, useEffect } from 'react';
import {StyleSheet, Image, View, Text, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const home = () => {
    var [ isPress, setIsPress ] = useState(true);
    const [count, setCount] = useState(0);

    var touchProps = {
        activeOpacity:  1,
        underlayColor: "red",
        style: isPress ? styles.turnOff : styles.turnOn, 
        onPress: () => setIsPress(previousState => !previousState, setCount(count + 1)),
    };

    var touchPropsA = {
        onPress: () => setCount(0),
        style: styles.zerarButton
    }
    
    var propsB = {
        style: isPress ? styles.esteira : styles.bottle,
        source: isPress ? require('../assets/esteira.gif') : require('../assets/bottle.gif')
    }

    var text = (isPress) ? 'Iniciar' : 'Parar';

    return (
        <>
            <View style={{backgroundColor: '#FFFFFF', alignItems: 'center', flex: 1}}>
                <View style={styles.map}>
                    <Image source={require('./logo.png')} style={styles.logo} />
                </View>
    
                <View style={styles.rectangle}>
                    <MaterialIcons name="bluetooth-searching"style={styles.bluetooth}size={41}/>
                    <Image {...propsB}/>
                </View>
    
                <View style={styles.contBox}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.contador}>
                            <Text style={styles.simpleText}>
                                {count ? count : 0}
                            </Text>
                        </View>
                        <TouchableOpacity {...touchPropsA}>
                            <Text style={{fontSize: 30, color: 'white'}}>Zerar</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableHighlight {...touchProps}>
                        <Text style={{fontSize: 60, color: 'white'}}>{text}</Text>
                    </TouchableHighlight>
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

    esteira: {
        width: 215,
        height: 130,
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
        marginTop: 230,
    },
    
    contador: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#F1F1F4',
        color: '#333',
        borderRadius: 5,
        paddingHorizontal: 30,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    simpleText: {
        fontSize: 20,
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
    
    turnOff: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1BE86D',
        width: 250,
        height: 250,
        borderRadius: 120
    },

    turnOn: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: 250,
        height: 250,
        borderRadius: 120
    }
});

export default home;
    
    