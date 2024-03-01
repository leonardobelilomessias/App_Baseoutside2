import { WrapperScreens } from '@/Componets/WrapperScreens';
import { AgentDataProvider, useDataAgent } from '@/context/UserContext';
import { Singin } from '@/screens/AccessScreens/Singin';
import { Text } from '@gluestack-ui/themed';
import { Redirect } from 'expo-router';
import { View } from 'react-native';

export default function singin() {
const {dataAgent,tokenAgent, loading} = useDataAgent()
if(loading)return(
  <View>
    <Text>Loading</Text>
  </View>
)
if(tokenAgent){
  return(
    <Redirect href={'/(tabs)'}/>
  )
}
  return (
      <AgentDataProvider>
        <WrapperScreens >
          <Singin/>
        </WrapperScreens>
      </AgentDataProvider>
  );
}