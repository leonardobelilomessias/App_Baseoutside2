import { VStack, Spinner, Heading,Image,Text } from "@gluestack-ui/themed";
import CreatingPng from '@/assets/dailypost1.png'

export function CreatingDailyPost(){
    
    return(
        <VStack flex={1} bgColor='$white' padding={44} alignItems='center' space='md' minHeight={600} justifyContent='center'>
        <Spinner size={'small'} color={'green400'}/>
          <Heading color='$green400'>Criando Daily Post</Heading>
          <Image source={CreatingPng} width={170} height={210} />
          <Text textAlign='center' color='$green400' fontSize={'$sm'}>
                Sua publicação em breve estará disponivel  para todos seus sponsors e colabs
          </Text>
        </VStack>
    )
}