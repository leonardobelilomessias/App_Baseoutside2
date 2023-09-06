import { WrapperScreens } from '@/Componets/WrapperScreens';
import { useDataAgent } from '@/context/UserContext';
import { Feed } from '@/theme/screens/Feed';
import { VStack,Text } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { Button, ScrollView, ScrollViewBase, ScrollViewComponent } from 'react-native';

export default function Home() {
  const {setTest,test} = useDataAgent()

//  golang()
  return (
    <ScrollView>
    <VStack p={8}>
      <Feed/>
    </VStack>
    </ScrollView>


  );
}
