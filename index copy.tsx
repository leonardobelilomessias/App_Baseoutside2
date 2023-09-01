
import { extendedConfig } from '@/theme/config';
import { Profile } from '@/theme/screens/Profile';
import { SingUp } from '@/theme/screens/SingUp';


import { Button, ButtonText, GluestackUIProvider, VStack } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (

<GluestackUIProvider config={extendedConfig}>
<SafeAreaView style={styles.container}>
  <VStack  flex={1} space='md'>
    <SingUp/>
  </VStack>
  <StatusBar style="light" translucent={false} />
</SafeAreaView>
</GluestackUIProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: extendedConfig.tokens.colors.gray100,
    padding:8
  },
});
