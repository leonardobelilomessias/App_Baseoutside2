import {  Heading, VStack } from '@gluestack-ui/themed';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native';
import { DailyPost } from '@/Componets/ItensShare/DailyPost';
import { PhotoPublicationScreen } from '../SearchScreen/PhotoPublicationScreen';
import { CreateQuoteAgentScreen } from '@/screens/AgentScreens/PublicationsAgentScreens/Create/CreateQuoteAgentScreen';


export  function ShareScreen() {
  const {choice} = useLocalSearchParams();
  return (

    <VStack p={8} flex={1} bgColor='$white'>
        { choice==='daily'&&<DailyPost status="create" /> }
        { choice==='quote'&& <CreateQuoteAgentScreen/> }
        { choice==='photo'&& <PhotoPublicationScreen/> }
    </VStack>
  );
}




