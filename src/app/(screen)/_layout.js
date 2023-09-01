import { WrapperScreens } from '@/Componets/WrapperScreens';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <WrapperScreens>

    <Stack style={{backgoundColor:'red'}}
      // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
      screenOptions={{
        headerShown:false
      }}>
      {/* Optionally configure static options outside the route. */}
      <Stack.Screen name="home" options={{}}  />
      <Stack.Screen name="singup" options={{}}  />
      <Stack.Screen name="tabs" options={{}}  />



    </Stack>
    </WrapperScreens>
  );
}
