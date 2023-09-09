import { WrapperScreens } from '@/Componets/WrapperScreens';
import { Box, HStack, Heading, Image, Input, InputField, Pressable, Spinner, Text, VStack } from '@gluestack-ui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native';
import { extendedConfig } from '@/theme/config';
import { useState } from 'react';
import CreatingPng from '@/assets/dailypost1.png'
import { ShareScreen } from '@/theme/screens/ShareScreeen';



export default function Share() {
return(
  <>
  <ShareScreen/>
  
  </>
)
}