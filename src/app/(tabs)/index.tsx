import { WrapperScreens } from '@/Componets/WrapperScreens';
import { useDataAgent } from '@/context/UserContext';
import { Feed } from '@/theme/screens/Feed';
import { VStack,Text } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { Button, ScrollView, ScrollViewBase, ScrollViewComponent } from 'react-native';

export default function Home() {
  const {setTest,test} = useDataAgent()

  console.log('testeaqii layout tabs index,', test)
//  golang()
  return (
    <ScrollView>
    <VStack p={8}>
      <Feed/>
      <Button title='press' onPress={()=>console.log(test)}></Button>
      <Button title='press2' onPress={()=>{setTest(!test)}}></Button>
    </VStack>
    </ScrollView>


  );
}
