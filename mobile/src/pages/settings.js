import React, { useState, useEffect } from 'react';
import {StyleSheet, Image, View, Text, Switch, TouchableOpacity,} from 'react-native';
import { Fontisto, MaterialIcons } from '@expo/vector-icons';
// import Switch from '@material-ui/core/Switch';

const SettingsScreen = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
      <View style={{backgroundColor: '#FFFFFF', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View>
              <Text>Configurações</Text>
          </View>
          <View>
              <Text>Tipo de Conexão </Text>
              <View>
                <Fontisto name="world-o" size={24} color="black" />
                <MaterialIcons name="bluetooth-searching" size={41}/>
              </View>
          </View>
          <View>
                <Text>Usar Programação Manual</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#0000FF" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                /> 
            </View>
          <View>
              <Text>Produto Selecionado</Text>
              <Text>Ajuste de tempo</Text>
              <TouchableOpacity><Text>Salvar</Text></TouchableOpacity>
          </View>
          <Text>Testes iniciais</Text>
          <View>
                <Text>Mover Esteira</Text>
                <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#0000FF" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <Text>Encher Bomba</Text>
                <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#0000FF" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
          </View>
      </View>
    );
}

export default SettingsScreen;
