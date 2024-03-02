import {  useDataAgent } from '@/context/UserContext';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

export default function Layout() {
  return (
    <Stack 
      screenOptions={{
        headerShown:false,
        headerStyle:{backgroundColor:'yellow'},
        headerTitle:()=>null,
        header:()=>null,
        
      }}
      >
      <Stack.Screen name="singup" options={{ headerShown:false, headerStyle:{backgroundColor:'yellow'}}}  />
      <Stack.Screen name="recouvery" options={{}}  />
      <Stack.Screen name="coderecouvery" options={{}}  />
    </Stack>
  );
}
