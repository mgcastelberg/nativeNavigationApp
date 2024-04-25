import { DrawerActions, useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

// import Icon from 'react-native-vector-icons/Ionicons';
import { IonIcon } from '../../components/shared/IonIcon';

export const Tab1Screen = () => {

  return (
    <View>
        <HamburgerMenu />
        <Text>Tab1Screen</Text>
        {/* <Icon name="rocket-outline" size={70} color="#900" /> */}
        <IonIcon name='rocket-outline' color='orange'/>
    </View>
  )
}
