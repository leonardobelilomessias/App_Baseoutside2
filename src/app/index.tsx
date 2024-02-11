import { Button, Text, View } from 'react-native';


import { WrapperScreens } from '@/Componets/WrapperScreens';
import Root from './(tabs)/_layout';
import { Profile } from '@/screens/Profile';
import { AgentDataProvider, useDataAgent } from '@/context/UserContext';
import { ScrollView } from 'react-native-gesture-handler';
import Page from './(stack)';
import Home from './(tabs)';
import { router, useNavigation } from 'expo-router';
import SignIn from './(auth)/sign-in';

export default function Index() {

 const {setTest,dataAgent} = useDataAgent()
  return (
<AgentDataProvider>
  <WrapperScreens >
    <SignIn/>
  </WrapperScreens>
</AgentDataProvider>

  );
}