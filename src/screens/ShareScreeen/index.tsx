import {  Heading, VStack } from '@gluestack-ui/themed';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native';
import { DailyPost } from '@/Componets/ItensShare/DailyPost';
import { PhotoPublicationScreen } from '../SearchScreen/PhotoPublicationScreen';


export  function ShareScreen() {
  const {choice} = useLocalSearchParams();
  console.log(choice)
  return (

    <VStack p={8} flex={1} bgColor='$white'>
        { choice==='daily'&&<DailyPost status="create" /> }
        { choice==='quote'&& <Quote/> }
        { choice==='photo'&& <PhotoPublicationScreen/> }
    </VStack>
  );
}


function Quote(){
  return(
    <>
    <Heading textAlign='center'>Quote</Heading>
    </>
  )
}

