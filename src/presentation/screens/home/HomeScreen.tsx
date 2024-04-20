import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={ globalStyles.container }>
      <PrimaryButton label="Productos" onPress={ () => navigation.navigate('Products' as never) } />
      <PrimaryButton label="Settings" onPress={ () => navigation.navigate('Settings' as never) } />

      <Pressable onPress={ () => navigation.navigate('Products' as never) } style={ globalStyles.primaryButton } >
          <Text style={ globalStyles.buttonText } >Productos</Text>
      </Pressable>
    </View>
  )
}
