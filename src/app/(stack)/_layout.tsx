import {  useDataAgent } from '@/context/UserContext';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: '(stack)',
};

export default function Layout() {
  return (
    <Stack 
      screenOptions={{
        headerShown:false,
        headerStyle:{backgroundColor:'yellow'},
        headerTitle:()=>null,
        header:()=>null,
        
      }}
      initialRouteName='tabs'
      >
      <Stack.Screen name="tabs" options={{}}   />
      <Stack.Screen name="singup" options={{ headerShown:false, headerStyle:{backgroundColor:'yellow'}}}  />
      <Stack.Screen name="recouvery" options={{}}  />
      <Stack.Screen name="coderecouvery" options={{}}  />
    </Stack>
  );
}
