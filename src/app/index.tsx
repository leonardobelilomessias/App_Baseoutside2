import { WrapperScreens } from '@/Componets/WrapperScreens';
import { AgentDataProvider, useDataAgent } from '@/context/UserContext';
import SignIn from './(auth)/sign-in';

export default function Index() {
  return (
      <AgentDataProvider>
        <WrapperScreens >
          <SignIn/>
        </WrapperScreens>
      </AgentDataProvider>
  );
}