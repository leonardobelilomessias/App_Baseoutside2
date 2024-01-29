import { Avatar, AvatarFallbackText, AvatarImage, Badge, BadgeText, Box, Button, ButtonText, HStack, Heading, Icon, Image, Pressable, Text, VStack } from "@gluestack-ui/themed";
import cover from '@/assets/vl.jpg'
import { useState } from "react";
import { router } from "expo-router";
import { SimpleLineIcons } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { FlatList, ImageBackground } from "react-native";
import imgDepoiment from '@/assets/vl.jpg'
export default function ProfileMission(){
    const [isFollower,setIsFollower] = useState(false)
    return(
        <ScrollView style={{backgroundColor:'white', paddingBottom:12, paddingTop:0}}>
   
                <Button bgColor="$green500" onPress={()=>{ router.push('/(tabs)/screensMission/areasMission')}}>
                    <ButtonText> ir  para areas</ButtonText>
                </Button>

            <VStack flex={1} bg="$white" paddingBottom={24}>
           <Box>
            
           </Box>
                <Image source={cover} size="full" flex={1} resizeMode="cover" justifyContent="flex-start" alignItems="flex-start" height={100} position="absolute"/>
           
                <Avatar borderWidth={2} borderColor="white"   alignSelf="center" size="xl" mt={'$5'}>
                    <AvatarFallbackText>Base outside</AvatarFallbackText>
                <AvatarImage source={imgDepoiment}></AvatarImage>
                    
                </Avatar>

                <Heading textAlign="center" bg="white" >Base outside1</Heading>
                <Text fontSize={'$sm'} bg="white" color="$gray400" textAlign="center" lineHeight={'$sm'}>
                    Infraestrutura e desenvolvimento
                </Text>
        <HStack space="md" alignSelf="center" marginVertical={8}>
          {
            isFollower?
            <Button bg="$white" borderColor="$green400" size="sm" borderWidth={1} borderRadius={'$md'} onPress={()=>{setIsFollower(false)}}>
              <ButtonText color="$green400">+ Seguindo</ButtonText>
            </Button>:
            <Button bg="$green400" borderRadius={'$md'}size="sm" onPress={()=>{setIsFollower(true)}}>
              <ButtonText color="$white" >+ Seguir</ButtonText>
            </Button>
          }

            <Button action="secondary" size="sm" borderWidth={1} variant="outline" borderRadius={'$md'} borderColor="$green400" onPress={()=>{router.push('/(tabs)/screens/sponsorAgent')}}>
                <ButtonText color="$green400">$ Financiar</ButtonText>
            </Button>
        </HStack>
                <ButtonsMission/>
                <InfoMission/>
                <Depoments/>
            </VStack>
        </ScrollView>
    )
}
function HeaderProfileMission(){
    return(

        <HStack hardShadow="4"   borderRadius={'$lg'} bgColor="$white" justifyContent="space-between" p={8} paddingHorizontal={16} softShadow="4" marginHorizontal={8}>
          <ItemTopHeader  name="Açoes" number="0" />
          <ItemTopHeader name="Missoes" number="0" />
          <ItemTopHeader name="Colabs" number="0" />
          <ItemTopHeader name="Tasks" number="0" />
        </HStack>

    )
}
function ItemTopHeader({number,name}:{number:string,name:string}){
    return(
    <VStack alignItems="center">
        <Text fontSize={'$xl'} fontWeight="$bold">{number}</Text>
        <Text fontSize={'$sm'} fontWeight="$bold">{name}</Text>
    </VStack>
    )
}

function ButtonsMission(){
    return(
        <>
        <HStack bg="$green500" paddingHorizontal={12} paddingVertical={8} mt={4} justifyContent="space-between"  >
            <Pressable p={4} onPress={()=>{router.push('/screensMission/actionsMission')}} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8}  borderColor="$green400" >
            <Text color="white" size="xl" bold>25</Text>
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.white}>Actions</Text>
            </Pressable>
            <Pressable onPress={()=>{router.push('/screensMission/areasMission')}} p={4} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8}   borderColor="$green400" >
            <Text color="white" size="xl" bold>12</Text>
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.white}>Areas</Text>
            </Pressable>
            <Pressable onPress={()=>{router.push('/screensProfile/tasksMission')}} p={4} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8}   borderColor="$green400" >
            <Text color="white" size="xl" bold>7</Text>
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.white}>Tarefas</Text>
            </Pressable>
            <Pressable p={4} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8}   borderColor="$green400" >
            <Text color="white" size="xl" bold>37</Text>
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.white}>Avisos</Text>
            </Pressable>

        </HStack>
        </>
    )
}
function InfoMission(){
    const fields = ['politica', 'educação','empreendedorismo','negocios']
    return(
        <VStack p={8}  space="md">
            <Text fontWeight="$bold">
                Sobre
            </Text>
            <Text size="sm">
                Empreendedor social  a 5 anos na área de desenvolvimento social. 
                Com 2 projetos em curso e mais de 2 mil jovens alcançados.
            </Text>

            <Text fontWeight="$bold">
                Campo de atuação
            </Text>
            <Text>
                {
                    fields.map(field=>(
                        <Badge sx={{borderRadius:8}} m={4} size="sm" variant="solid" key={field} borderRadius="$none" action="success">
                            <BadgeText>{field}</BadgeText>
                            </Badge>
  
                    ))
                }
            </Text>
            <Pressable borderRadius={8} borderWidth={1} padding={8} borderColor="$green400">
                <Text fontWeight="$bold" color="$green400" textAlign="center">
                    Ver card de apresentação
                </Text>
            </Pressable>
        </VStack>
    )
}

function Depoments(){
    const names = ['abraah', 'isac', 'jaco']
    return(
        <>
            <FlatList
            data={names}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={(item)=>(
                <Box borderWidth={1} borderColor="$gray200" p={12} bg="$white" borderRadius={8} ml={12} width={250} height={150}>
                    <HStack alignItems="center" space="md">

                        <Avatar size="sm" >
                            <AvatarImage source={imgDepoiment}></AvatarImage>
                            <AvatarFallbackText>
                                {item.item}
                            </AvatarFallbackText>
                        </Avatar>
                        <Text>{item.item}</Text>
                    </HStack>
                    <Text fontSize={'$sm'}>
                    Momentos incriveis e unicos esperimentados por essa missão , 
                    sempre grato por participar de um projeto tão grander.
                    </Text>
                </Box>
            )}
            />
        </>
    )
}

