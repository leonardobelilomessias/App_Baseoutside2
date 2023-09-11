import { extendedConfig } from "@/theme/config"
import { VStack, Heading, Input, InputField, HStack, Text ,Pressable, Spinner, Image} from "@gluestack-ui/themed"
import { router } from "expo-router"
import React, { useState } from "react"
import { TextInput} from "react-native"
import { Feather } from '@expo/vector-icons';
import CreatingPng from '@/assets/dailypost1.png'
import CreatedPostPng from '@/assets/confirm1.png'



export 
function DailyPost(){
    const [loadPublisher,setLoadPublisher] = useState(false)
    const [createdPublication, setCreatedPublication] = useState(false)
    function publisher(){
        setLoadPublisher(true)
        setCreatedPublication(true)
        setTimeout(() => {
          setLoadPublisher(false)
        }, 1500);
      }
    function handlerFinishedPublication(routeDirection:string){
        setLoadPublisher(false)
        setCreatedPublication(false)
        router.push(routeDirection)
    }
    return(
        <>
        {
            (!loadPublisher&&!createdPublication)&&
            <StartCreateDailyPost publisher={publisher}/>
        }
        {
            loadPublisher&&
            <CreatingPost/>
        }
        {
            !loadPublisher&&createdPublication&&
            <DailyPostCreated handlerFinishedPublication={handlerFinishedPublication}/>
        }
        </>
    )
  }

function StartCreateDailyPost({publisher}:{publisher:()=>void}){
    return(
        <>
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
    <Pressable bg='$gray300' borderRadius={'$md'} paddingHorizontal={8} paddingVertical={4} onPress={()=>{router.push('/otherProfile')}}>
      <Text color='$white'> Cancelar</Text>
    </Pressable>
    <Pressable bg='$green400' onPress={()=>{publisher()}} paddingHorizontal={8} borderRadius={'$md'} paddingVertical={4} >
      <Text color='$white' > Publicar</Text>
    </Pressable>
  </HStack>
  
  
      </VStack>
        </>
    )
}

  function CreatingPost(){
    return(
      <VStack flex={1} bgColor='$white' padding={44} alignItems='center' space='md' minHeight={600} justifyContent='center'>
      <Spinner size={'small'} color={'green400'}/>
        <Heading color='$green400'>Criando Daily Post</Heading>
        <Image source={CreatingPng} width={170} height={210} />
        <Text textAlign='center' color='$green400' fontSize={'$sm'}>Sua publicação em breve estará disponivel  para todos seus sponsors e colabs</Text>
      </VStack>
    )
  }
  function DailyPostCreated({handlerFinishedPublication}:{handlerFinishedPublication:(routerDirection:string)=>void}){
    return(
        <>
    <VStack flex={1} bgColor='$white' padding={44} alignItems='center' space='md' minHeight={600} justifyContent='center'>
        <Heading color='$green400' marginVertical={32}>Daily Post Criado</Heading>
        <Image source={CreatedPostPng} width={215} height={145} />
        <Text textAlign='center' marginVertical={32} color='$green400' fontSize={'$sm'}>Sua publicação já está disponivel</Text>
        <Pressable bg="$green400" width={'$1/2'} p={8} borderRadius={'$full'}>
            <Text textAlign="center" color="$white" onPress={()=>{handlerFinishedPublication('/dailyPublication')}}>
             Ver Publicação
            </Text>
        </Pressable>
        <Pressable borderWidth={1} borderColor="$green400" width={'$1/2'} p={8} borderRadius={'$full'} onPress={()=>{handlerFinishedPublication('/')}}>
            <Text textAlign="center" color="$green400">
             Voltar para o inicio
            </Text>
        </Pressable>
      </VStack>
        </>
    )
  }