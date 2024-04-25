import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor:globalColors.background
      }}
      screenOptions={{
        // headerShown:false
        tabBarLabelStyle:{
          marginBottom:5,
          // display:'none'
        },
        headerStyle:{
          elevation:0, // no se muestre linea header en Android
          borderColor:'transparent',
          shadowColor:'transparent'
        },
        tabBarStyle:{
          borderTopWidth: 0, // no se muestre linea header en Ios
          elevation:0
        }
      }}
    >
      <Tab.Screen name="Tab1" options={{ title:'Tab 1', tabBarIcon: (props) => (<Text style={{ color: props.color }}>Tab 1</Text>) }} component={ Tab1Screen } />
      <Tab.Screen name="Tab2" options={{ title:'Tab 2', tabBarIcon: (props) => (<Text style={{ color: props.color }}>Tab 2</Text>) }} component={ TopTabsNavigator } />
      <Tab.Screen name="Tab3" options={{ title:'Tab 3', tabBarIcon: (props) => (<Text style={{ color: props.color }}>Tab 3</Text>) }} component={ StackNavigator } />
    </Tab.Navigator>
  );
}