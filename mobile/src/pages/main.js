import React, { useState, useEffect } from 'react';
import {StyleSheet, Image, View, Text, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import api from '../services/api';

const bottleImg = require('../assets/bottle.gif');
const esteiraImg = require('../assets/esteira.gif');
const offImg = require('../assets/off.png');
let pooling = null;

const home = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [imgSource, setImgSource] = useState(offImg);
    const [imgStyle, setImgStyle] = useState(styles.off);
    const [status, setStatus] = useState(0);
    const [count, setCount] = useState(0);

    async function verifyStatus() {
        const { data } = await api.get('/api/status/');
        setStatus(data.status);
        setCount(data.count);
    }
    useEffect(() => {
        async function verifyIsRunning() {
            const { data } = await api.get('/api/control/');
            setIsRunning(data.status);
        }

        verifyIsRunning();
        clearInterval(pooling);
        pooling = setInterval(verifyStatus, 50000);
    }, []);
    
    useEffect(() => {
        let result = { style: styles.off, source: offImg };
        if (isRunning) {
            if (status == 1) {
                result.source = esteiraImg;
                result.style = styles.esteira;
            } else if (status == 2) {
                result.source = bottleImg;
                result.style = styles.bottle;
            } 
        }
        setImgSource(result.source);
        setImgStyle(result.style);
    }, [status])

    async function toggleRunning() {
        await api.post('/api/control/');
        clearInterval(pooling);
        if (!isRunning) {
            pooling = setInterval(verifyStatus, 5000);
        }
        setIsRunning(!isRunning);
    }

    var turnTouch = {
        activeOpacity:  1,
        underlayColor: "red",
        style: isRunning ? styles.turnOn : styles.turnOff, 
        onPress: toggleRunning,
    };

    var resetTouch = {
        onPress: async () => {
            setCount(0)
            await api.post('/api/statistics/')
        },
        style: styles.zerarButton
    }

    var text = (isRunning) ? 'Parar' : 'Iniciar';

    return (
        <View style={{backgroundColor: '#FFFFFF', alignItems: 'center', flex: 1}}>
            <View style={styles.map}>
                <Image source={require('./logo.png')} style={styles.logo} />
            </View>

            <View style={styles.rectangle}>
                <MaterialIcons name="bluetooth-searching"style={styles.bluetooth}size={41}/>
                <Image style = {imgStyle} source = {imgSource}/>
            </View>

            <View style={styles.contBox}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.contador}>
                        <Text style={styles.simpleText}>
                            {count ? count : 0}
                        </Text>
                    </View>
                    <TouchableOpacity {...resetTouch}>
                        <Text style={{fontSize: 30, color: 'white'}}>Zerar</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableHighlight {...turnTouch}>
                    <Text style={{fontSize: 60, color: 'white'}}>{text}</Text>
                </TouchableHighlight>
            </View>
        </View>
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
    
    off: {
        width: 100,
        height: 180
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
    
    