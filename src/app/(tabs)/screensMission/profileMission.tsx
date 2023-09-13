import { Avatar, AvatarFallbackText, Badge, BadgeText, Box, Button, ButtonText, HStack, Heading, Icon, Image, Pressable, Text, VStack } from "@gluestack-ui/themed";
import cover from '@/assets/vl.jpg'
import { useState } from "react";
import { router } from "expo-router";
import { SimpleLineIcons } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { FlatList } from "react-native";
export default function ProfileMission(){
    const [isFollower,setIsFollower] = useState(false)
    return(
        <ScrollView style={{backgroundColor:'white', paddingBottom:12}}>
            <VStack flex={1} bg="$white" paddingBottom={24}>
                <Box   bg="red" height={'$48'} mt={'$4'} position="absolute" >
                </Box>
                <HeaderProfileMission/>
                <Avatar alignSelf="center" size="xl" mt={'$24'}>
                    <AvatarFallbackText>Base outside</AvatarFallbackText>
                </Avatar>
                <Heading textAlign="center">Base outside</Heading>
                <Text fontSize={'$sm'} color="$gray400" textAlign="center" lineHeight={'$sm'}>Empreendedor social</Text>
        <HStack space="md" alignSelf="center" marginVertical={8}>
          {
            isFollower?
            <Button bg="$white" borderColor="$green400" borderWidth={1} borderRadius={'$full'} onPress={()=>{setIsFollower(false)}}>
              <ButtonText color="$green400">+ Seguindo</ButtonText>
            </Button>:
            <Button bg="$green400" borderRadius={'$full'} onPress={()=>{setIsFollower(true)}}>
              <ButtonText color="$white" >+ Seguir</ButtonText>
            </Button>
          }

            <Button action="secondary" variant="outline" borderRadius={'$full'} onPress={()=>{router.push('/(tabs)/screens/sponsorAgent')}}>
                <ButtonText >$ Sponsor</ButtonText>
            </Button>
        </HStack>

                <ButtonsMission/>
                <InfoMission/>
                <Depoments/>
                <ActivitInfo/>
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
        <HStack bg="$green100" p={12} mt={4} justifyContent="space-between">
            <Pressable p={4} onPress={()=>{router.push('/screensMission/actionsMission')}} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8} bg="$white" borderWidth={1} borderColor="$green400" >
            <SimpleLineIcons name="energy" size={24} color={extendedConfig.tokens.colors.green400} />
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.green400}>Actions</Text>
            </Pressable>
            <Pressable onPress={()=>{router.push('/screensMission/areasMission')}} p={4} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8} bg="$white" borderWidth={1} borderColor="$green400" >
            <SimpleLineIcons name="energy" size={24} color={extendedConfig.tokens.colors.green400} />
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.green400}>Areas</Text>
            </Pressable>
            <Pressable onPress={()=>{router.push('/screensMission/tasksMission')}} p={4} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8} bg="$white" borderWidth={1} borderColor="$green400" >
            <FontAwesome5 name="tasks" size={24} color={extendedConfig.tokens.colors.green400} />
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.green400}>Tarefas</Text>
            </Pressable>
            <Pressable p={4} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8} bg="$white" borderWidth={1} borderColor="$green400" >
            <AntDesign name="warning" size={24}  color={extendedConfig.tokens.colors.green400}/>
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.green400}>Avisos</Text>
            </Pressable>

        </HStack>
        </>
    )
}
function InfoMission(){
    const fields = ['politica', 'educação','empreendedorismo','negocios']
    return(
        <VStack p={12} space="md">
            <Text fontWeight="$bold">
                Sobre
            </Text>
            <Text>
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
            <Pressable borderWidth={1} padding={12} borderColor="$green400">
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

                        <Avatar size="sm">
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


function ActivitInfo(){
    return(
        <>
        <VStack alignItems="center" p={16} space="lg">
            <VStack alignItems="center">
                <Text textAlign="center" fontSize={'$md'} fontWeight="$semibold">Atividade</Text>
                <HStack  space="sm" alignItems="center" justifyContent="center">
                    <Box rounded={'$full'} width={10} height={10} bg='$blue400'></Box>
                    <Text sx={{fontSize:25}} fontWeight="$bold" lineHeight={30}>25</Text>
                </HStack>
                <Text fontSize={'$sm'} textAlign="center">
                    Mantendo a mesma quantidade da semana passada.
                </Text>
            </VStack>

            <VStack alignItems="center">
                <Text textAlign="center" fontSize={'$md'} fontWeight="$semibold">Engajamento</Text>
                <HStack  space="sm" alignItems="center" justifyContent="center">
                    <Box rounded={'$full'} width={10} height={10} bg='$red400'></Box>
                    <Text sx={{fontSize:25}} fontWeight="$bold" lineHeight={30}>25</Text>
                </HStack>
                <Text fontSize={'$sm'} textAlign="center">
                4 a menos que semana passada.
                </Text>
            </VStack>
            <VStack alignItems="center">
                <Text textAlign="center" fontSize={'$md'} fontWeight="$semibold">Transparência</Text>
                <HStack  space="sm" alignItems="center" justifyContent="center">
                    <Box rounded={'$full'} width={10} height={10} bg='$green400'></Box>
                    <Text sx={{fontSize:25}} fontWeight="$bold" lineHeight={30}>100%</Text>
                </HStack>
                <Text fontSize={'$sm'} textAlign="center">
                De suas atividade financeiras foram declaradas.
                </Text>
            </VStack>
        </VStack>
        </>
    )
}