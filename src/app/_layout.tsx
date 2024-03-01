import { Slot } from 'expo-router';
import { WrapperScreens } from '@/Componets/WrapperScreens';
import { AgentDataProvider } from '@/context/UserContext';


export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: '/home',
};

export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.

      <AgentDataProvider>
        <WrapperScreens>
          <Slot  />
        </WrapperScreens>
      </AgentDataProvider>


  );
}
