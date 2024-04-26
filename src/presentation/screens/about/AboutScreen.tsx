import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const AboutScreen = () => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{
      flex:1,
      paddingHorizontal: 20,
      marginTop: top + 20
    }}>
        <Text>AboutScreen</Text>
    </View>
  )
}
