import { VStack, Heading,Pressable,Text,Image } from "@gluestack-ui/themed"
import CreatedPostPng from '@/assets/confirm1.png'
import { router } from "expo-router"



export function SuccessCreateDailyPost(){
        function handlerFinishedPublication(routeDirection:string){
        router.push(routeDirection)
        router.push({ pathname: routeDirection, params: { idPublication:'01' } })
    }
    
    return(
        <>
        <VStack flex={1} bgColor='$white' padding={44} alignItems='center' space='md' minHeight={600} justifyContent='center'>
           
            <Heading color='$green400' marginVertical={32}>Daily Post Criado</Heading>
            <Image source={CreatedPostPng} width={215} height={145} />
            <Text textAlign='center' marginVertical={32} color='$green400' fontSize={'$sm'}>
                Sua publicação já está disponivel
            </Text>
            <Pressable bg="$green400" width={'$full'} p={8} borderRadius={'$md'}>
                <Text textAlign="center" color="$white" onPress={()=>{handlerFinishedPublication('/(tabs)/screensProfile/dailyPublication')}}>
                    Ver Publicação
                </Text>
            </Pressable>

            <Pressable borderWidth={1} borderColor="$green400" width={'$full'} p={8} borderRadius={'$md'} onPress={()=>{handlerFinishedPublication('/')}}>
                <Text textAlign="center" color="$green400">
                 Voltar para o inicio
                </Text>
            </Pressable>

          </VStack>
            </>
    )
}