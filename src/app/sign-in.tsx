import { WrapperScreens } from '@/Componets/WrapperScreens';
import { AgentDataProvider, useDataAgent } from '@/context/UserContext';
import { Singin } from '@/screens/AccessScreens/Singin';
import { LoadingAuthRoutes } from '@/screens/Load/LoadingAuthRoutes';
import { Text } from '@gluestack-ui/themed';
import { Redirect, router } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function SingIn() {
const {dataAgent,tokenAgent, loading} = useDataAgent()

if(loading)return(
<LoadingAuthRoutes/>
)
if(tokenAgent){
  return<Redirect href={'/'}/>
  
}
  return (

          <Singin/>

  );
}