import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

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
