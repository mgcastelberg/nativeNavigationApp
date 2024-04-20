import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

export const ProductsScreen = () => {

  const products = [
    { id:1, name:'Producto 1'},
    { id:2, name:'Producto 2'},
    { id:3, name:'Producto 3'},
    { id:4, name:'Producto 4'},
    { id:5, name:'Producto 5'},
    { id:6, name:'Producto 6'},
    { id:7, name:'Producto 7'},
    { id:8, name:'Producto 8'},
    { id:9, name:'Producto 9'},
    { id:10, name:'Producto 10'},
    { id:11, name:'Producto 11'},
    { id:12, name:'Producto 12'},
  ];
  const navigation = useNavigation();

  return (
    <View style={ globalStyles.container }>
        <Text style={{ marginBottom:10, fontSize:30 }} >Productos</Text>
        <FlatList 
          data={ products }
          renderItem={ ( { item } ) => (
            <PrimaryButton 
              onPress={()=> navigation.navigate('Product' as never)}
              label={ item.name }
              />
            )}
        />
        <Text style={{ marginBottom:10, fontSize:30 }} >Ajustes</Text>
        <PrimaryButton onPress={()=> navigation.navigate('Settings' as never)} label="Ajustes"/>
    </View>
  )
}
