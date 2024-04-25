import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';


const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={ (props) => <CustomDrawerContent {...props} />} 
      screenOptions={{
        drawerType: (dimensions.width >= 758 ) ? 'permanent' : 'slide',
        headerShown: false,

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle:{
          borderRadius:100,
          paddingHorizontal:20
        }
      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={ StackNavigator} /> */}
      <Drawer.Screen options={{ drawerIcon: ({color}) => ( <IonIcon name="layers-outline" color={color} /> ) }} 
        name="Tabs" component={ BottomTabNavigator } />
      <Drawer.Screen options={{ drawerIcon: ({color}) => ( <IonIcon name="person-outline" color={color} /> ) }} 
        name="Profile" component={ ProfileScreen } />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = ( props: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      <View style={{ height: 200, backgroundColor: globalColors.primary, margin:10, borderRadius:30 }} />
      <DrawerItemList { ...props } />
    </DrawerContentScrollView>
  )
}