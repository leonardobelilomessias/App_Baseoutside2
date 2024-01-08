import { WrapperScreens } from '@/Componets/WrapperScreens';
import { Box, HStack, Heading, Image, Input, InputField, Pressable, Spinner, Text, VStack } from '@gluestack-ui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, TextInput } from 'react-native';
import { extendedConfig } from '@/theme/config';
import { useState } from 'react';
import { DailyPost } from '@/Componets/itensShare/DailyPost';
import { PhotoPublicationScreen } from '../SearchScreen/PhotoPublicationScreen';


export  function ShareScreen() {
  const {choice} = useLocalSearchParams();

  console.log(choice)

  return (


    <VStack p={8} flex={1} bgColor='$white'>
      <ScrollView contentContainerStyle={{flex:1}} >
      {
        choice==='daily'&&
        
        <DailyPost />

      }
      {
        choice==='quote'&&
        <Quote/>
      }
            {
        choice==='photo'&&
        <PhotoPublicationScreen/>
      }
      </ScrollView>
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

