import { WrapperScreens } from '@/Componets/WrapperScreens';
import { Feed } from '@/theme/screens/Feed';
import { VStack,Text } from '@gluestack-ui/themed';
import { ScrollView, ScrollViewBase, ScrollViewComponent } from 'react-native';
export default function Home() {
  return (
    <ScrollView>
    <VStack p={8}>
      <Feed/>
    </VStack>
    </ScrollView>


  );
}
