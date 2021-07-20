import React, { useState, useEffect } from 'react';
import {StyleSheet, Image, View, Text, Switch, TouchableOpacity, StatusBar} from 'react-native';
import { Fontisto, MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View style={styles.setting}>
            <View style={styles.header}>
                <StatusBar backgroundColor='#61dafb' />
                <Text style={styles.tittle}>Configurações</Text>
            </View>
            <View style={styles.first}>
                <View style={{justifyContent: 'center'}}>
                <Text style={styles.simpleText}>Tipo de Conexão</Text>
                <View style={styles.connections}>
                    <Fontisto name="world-o" size={40} color="black" />
                    <MaterialIcons name="bluetooth-searching" size={41}/>
                </View>
                </View>
                <View></View>
            </View>
            <View style={styles.second}>
                <Text style={styles.simpleText}>Usar Programação Manual</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#0000FF" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                /> 
            </View>
            <View style={styles.thirt}>
                <Text style={styles.change}>Produto Selecionado</Text>
                <Text style={styles.change}>Ajuste de tempo</Text>
                <TouchableOpacity style={styles.save}><Text style={{fontSize: 30, color: 'white'}}>Salvar</Text></TouchableOpacity>
            </View>

            <Text style={styles.simpleText}>Testes iniciais</Text>

            <View>
                <View style={styles.option}>
                    <Text style={styles.simpleText}>Mover Esteira</Text>
                    <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#0000FF" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                </View>
                <View style={styles.option}>
                    <Text style={styles.simpleText}>Encher Bomba</Text>
                    <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#0000FF" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    setting: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center', 
    },

    simpleText: {
        fontSize: 20, 
        color: '#475B5A'
    },

    header: {
        width: 400,
        height: 49,
        borderBottomWidth: 1,
        borderBottomColor: '#BBBBBF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    tittle: {
       color: '#52D1DC',
       fontSize: 25,
       fontWeight: 'bold'
   },

   first: {
        width: 400,
        height: 120,
        borderBottomWidth: 1,
        borderBottomColor: '#BBBBBF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
   },

   connections: {
       marginTop: 9,
       justifyContent: 'space-around',
       flexDirection:'row',
    },

   second: {
        width: 400,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#BBBBBF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
   },

   thirt: {
        paddingLeft: 20,
        width: 400,
        height: 250,
        borderBottomWidth: 1,
        borderBottomColor: '#BBBBBF',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 12,
    },

    change: {
        backgroundColor: '#52D1DC',
        fontSize: 20,
        color: 'black',
        padding: 20, 
        width: 300, 
        borderRadius: 15
    },

    save: {
         backgroundColor: '#047A73',
         width: 130,
         height: 60,
         alignItems: 'center',
         borderRadius: 15,
         justifyContent: 'center',
 
    },
    
    option: {
        width: 350,
        height: 50,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default SettingsScreen;
