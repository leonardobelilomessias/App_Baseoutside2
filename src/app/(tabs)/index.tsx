import { WrapperScreens } from '@/Componets/WrapperScreens';
import { useDataAgent } from '@/context/UserContext';
import { Feed } from '@/screens/TabMenuScreens/Feed';
import { VStack,Text } from '@gluestack-ui/themed';
import { router, useNavigation } from 'expo-router';
import { Button, ScrollView, ScrollViewBase, ScrollViewComponent } from 'react-native';
import { useEffect } from 'react';


export default function Home() {
  const {setTest,test} = useDataAgent()



//  golang()
  return (

    <VStack p={8} bgColor='$white'>
      <Feed/>
    </VStack>



  );
}
