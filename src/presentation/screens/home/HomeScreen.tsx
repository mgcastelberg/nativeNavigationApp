import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';
import { IonIcon } from '../../components/shared/IonIcon';

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable style={{ marginLeft:15 }} onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }>
          <IonIcon name="menu-outline" />
        </Pressable>
      )
    })
  }, []);

  return (
    <View style={ globalStyles.container }>
      <PrimaryButton label="Productos" onPress={ () => navigation.navigate('Products') } />
      <PrimaryButton label="Settings" onPress={ () => navigation.navigate('Settings') } />

      <Pressable onPress={ () => navigation.navigate('Products') } style={ globalStyles.primaryButton } >
          <Text style={ globalStyles.buttonText } >Productos</Text>
      </Pressable>
    </View>
  )
}
