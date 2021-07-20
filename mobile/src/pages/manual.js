import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';


const manualScreen = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const [clickA, setClickA] = useState(true);
    const [clickB, setClickB] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    var touchA = {
        style: (clickA) ? styles.click : styles.clicked,
        onPress: () => setClickA(previousState => !previousState)
    }

    var touchB = {
        style: (clickB) ? styles.click : styles.clicked,
        onPress: () => setClickB(previousState => !previousState)
    }

    return (
      <View style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.tittle}>Programação Manual</Text>
            </View>

            <View style={styles.first}>
                <View style={styles.option}>
                    <Text style={styles.text}>Usar Esteira</Text>
                    <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#0000FF" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                </View>
                <View style={styles.option}>
                    <Text style={styles.text}>Loop da Bomba</Text>
                    <TouchableOpacity {...touchA}></TouchableOpacity>
                </View>
            </View>

            <View style={styles.second}>
                <Text style={styles.text}>Bomba</Text>
                <View style={styles.option}>
                    <Text style={styles.text}>Tempo da bomba</Text>
                    <TouchableOpacity {...touchB}></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.save}><Text style={{fontSize: 30, color: 'white'}}>Salvar</Text></TouchableOpacity>
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center', 
    },

    text: {
        fontSize: 20, 
        color: '#475B5A'
    },

    header: {
        width: 400,
        height: 55,
        borderBottomWidth: 1,
        borderBottomColor: '#BBBBBF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    tittle: {
        color: '#52D1DC',
        fontSize: 30,
        fontWeight: 'bold'
    },

    first: {
        width: 400,
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#BBBBBF',
    },

    second: {
        width: 400,
        height: 175,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 15
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    click: {
        backgroundColor: '#F1F1F4',
        borderRadius: 15,
        width: 50,
        height: 50,
    },

    clicked: {
        backgroundColor: 'green',
        borderRadius: 15,
        width: 50,
        height: 50,
    }

});

export default manualScreen;