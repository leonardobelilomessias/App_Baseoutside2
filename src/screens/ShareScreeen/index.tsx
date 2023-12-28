import { WrapperScreens } from '@/Componets/WrapperScreens';
import { Box, HStack, Heading, Image, Input, InputField, Pressable, Spinner, Text, VStack } from '@gluestack-ui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, TextInput } from 'react-native';
import { extendedConfig } from '@/theme/config';
import { useState } from 'react';
import { DailyPost } from '@/Componets/itensShare/DailyPost';


export  function ShareScreen() {
  const {choice} = useLocalSearchParams();

  console.log(choice)

  return (

<ScrollView >

    <Box p={8} flex={1} bgColor='white'>
      {
        choice==='daily'&&
        
        <DailyPost />

      }
      {
        choice==='quote'&&
        <Quote/>
      }
    </Box>
</ScrollView>

  );
}


function Quote(){
  return(
    <>
    <Heading textAlign='center'>Quote</Heading>
    </>
  )
}

