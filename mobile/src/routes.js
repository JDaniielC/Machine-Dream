import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import main from './pages/main';
import profile from './pages/profile';

const Routes = createAppContainer ( 
    createStackNavigator({
        main: {
            screen: main,
            navigationOptions: {
                title: 'DevRadar'
            },
        },
        profile: {
            screen: profile,
            navigationOptions: {
                title: 'Perfil no Github'
            },
        }, 
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#7159c1'
            },
        },
    })
);

export default Routes;

//para iniciar o app: yarn global add expo-cli
//expo init mobile
//
//precisou instalar as seguintes dependências:
//yarn add react-navigation
//yarn add react-navigation-stack
//expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
//Se não funcionar instala dnv yarn add @react-native-community/masked-view
//yarn add socket.io-client