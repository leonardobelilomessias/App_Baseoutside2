import { WrapperScreens } from '@/Componets/WrapperScreens';
import { SearchScreen } from '@/theme/screens/SearchScreen';
import { VStack, styled } from '@gluestack-ui/themed';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default function Messages() {
  return (

      <ScrollView style={{flex:1}}>
        <VStack p={8} >

      <SearchScreen/>
        </VStack>
      </ScrollView>

  );
}

