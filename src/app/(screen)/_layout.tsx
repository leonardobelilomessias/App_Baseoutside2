import { WrapperScreens } from '@/Componets/WrapperScreens';
import { AgentDataProvider, useDataAgent } from '@/context/UserContext';
import { Stack } from 'expo-router';
import { useEffect } from 'react';


export default function Layout() {
  const {dataAgent,loading}= useDataAgent()
  const {setTest,test} = useDataAgent()

  useEffect(()=>{

  },[dataAgent])
  return (
    <Stack 
    
    // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
      screenOptions={{
        headerShown:false
      }}>
      {/* Optionally configure static options outside the route. */}

      <Stack.Screen name="singup" options={{}}  />
      <Stack.Screen name="tabs" options={{}}  />
    </Stack>


  );
}
