import { WrapperScreens } from '@/Componets/WrapperScreens';
import { AgentDataProvider, useDataAgent } from '@/context/UserContext';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';


export default function Layout() {
  const {dataAgent,loading}= useDataAgent()
  const {setTest,test} = useDataAgent()

  useEffect(()=>{

  },[dataAgent])
  return (
    <Stack 
    
    // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
      screenOptions={{
        headerShown:false,
        headerStyle:{backgroundColor:'yellow'}
      }}>
      {/* Optionally configure static options outside the route. */}

      <Stack.Screen name="singup" options={{ headerShown:false, headerStyle:{backgroundColor:'yellow'}}}  />
      <Stack.Screen name="tabs" options={{}}  />
      <Stack.Screen name="recouvery" options={{}}  />
      <Stack.Screen name="coderecouvery" options={{}}  />
    </Stack>


  );
}
