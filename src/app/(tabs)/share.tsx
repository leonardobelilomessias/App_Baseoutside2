import { WrapperScreens } from '@/Componets/WrapperScreens';
import { Box, HStack, Heading, Input, InputField, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { useLocalSearchParams } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native';
import { extendedConfig } from '@/theme/config';


export default function Messages() {
  const {choice} = useLocalSearchParams();
  console.log(choice)
  return (

<ScrollView >

    <Box p={8} flex={1}>
      {
        choice==='daily'&&
        <DailyPost/>
      }
      {
        choice==='quote'&&
        <Quote/>
      }
    </Box>
</ScrollView>

  );
}

function DailyPost(){
  return(
    <VStack bg='$white' flex={1} borderRadius={20} p={32} space='md'>
    <Heading textAlign='center'>Daily post</Heading>
    <Text fontSize={'$sm'} color='$gray400' >
    <Feather name="info" size={12} color="black" style={{padding:8}} />
     {' '}Daily post são relatos de experiencias de atividades e
     acontecimentos diarios compartilhadas com seus sponsos e colabs. 
    </Text>
    <Input
  variant="outline"
  size="md"
  isDisabled={false}
  isInvalid={false}
  isReadOnly={false}
  borderRadius={12}
  borderColor='$green400'
>
  <InputField placeholder="Digite um titulo" placeholderTextColor={'$green400'} />
</Input>
<TextInput
        
        multiline={true}
        numberOfLines={18}
        maxLength={50}
        onChangeText={()=>{}}
        textAlignVertical='top'
        style={{padding: 10, backgroundColor:'white', borderColor:extendedConfig.tokens.colors.green400,borderWidth:1,borderRadius:12, }}
      />
<HStack space='md' justifyContent='flex-end'>
  <Pressable bg='$gray300' borderRadius={'$md'} paddingHorizontal={8} paddingVertical={4}>
    <Text color='$white'> Cancelar</Text>
  </Pressable>
  <Pressable bg='$green400' paddingHorizontal={8} borderRadius={'$md'} paddingVertical={4} >
    <Text color='$white'> Publicar</Text>
  </Pressable>
</HStack>


    </VStack>
  )
}
function Quote(){
  return(
    <>
    <Heading textAlign='center'>Quote</Heading>
    </>
  )
}