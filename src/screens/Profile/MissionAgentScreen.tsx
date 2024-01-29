
import { Avatar, AvatarFallbackText, AvatarImage, Box, HStack, Text, VStack,Pressable
 } from "@gluestack-ui/themed";

import { FullAgentDTO } from "@/context/context.dtos/Authenticate.dto";
import { FlatList } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { AxiosApi } from "@/api";
import imageProfile from '@/assets/develop.jpg'
import { extendedConfig } from "@/theme/config";
type TypeSelectCardRender = {
    selecCardRender:string
    content:FullAgentDTO[]
}

export function MissionAgentScreen(){
    const numbers = [1,2,5,4,8,9,6,10]
    const [content,setContent] = useState({}as FullAgentDTO[])
    function fetchMissions(){
        
    }
    useEffect(()=>{
        
    },[])
    return(

        <VStack flex={1} bg="white" paddingHorizontal={16} borderRadius={16}  >

        <FlatList
            contentContainerStyle={{paddingVertical:18}}
            scrollEnabled={true}
            data={numbers}
            showsVerticalScrollIndicator={false}
            keyExtractor={(resultApi)=>resultApi.toString()
            }
            renderItem={({item})=>(
                <MissionCardSearch name=""/>
            )}
            />
            </VStack>

    )
}

function MissionCardSearch({name}:{name:string}){
    return(
        <Pressable paddingVertical={12} onPress={()=>{router.push('/screensProfile/profileMission')}}  borderBottomWidth={1}  borderBottomColor="$gray100">
        <VStack paddingVertical={0} >
            <HStack alignItems="center" space="lg"  >
            <Avatar bgColor="$black" size="lg" borderRadius="$full" borderWidth={2} borderColor="$gray300">
                        <AvatarFallbackText >
                           missão nova
                        </AvatarFallbackText>
                    <AvatarImage source={imageProfile}/>    
            </Avatar>
            <VStack >
                <Text  fontWeight="$bold" size="sm">
                    Misssão nova
                </Text>
                <Text   lineHeight={16} flex={0}    fontSize={'$xs'} color="$gray300">
                    Tecnologia
                </Text>
                <Text   lineHeight={16} flex={0}    fontSize={'$xs'} color="$gray300">
                    Belo Horizonte - savassi
                </Text>

                <FooterMissionCard/>
            </VStack>
            </HStack>
        </VStack>
        </Pressable>
    )
}

function FooterMissionCard(){
    return(
        <HStack alignContent="center" space="md" flexWrap="wrap" >
            <HStack alignContent="center" alignItems="center" justifyContent="center" >
                <MaterialCommunityIcons name="lightning-bolt" size={12}color={extendedConfig.tokens.colors.gray500} />
                <Text  lineHeight={16}    fontSize={'$xs'} color="$gray400">
                    17 Açoes 
                </Text>
            </HStack>
            <HStack space="xs" alignItems="center" mr={12} >
                <FontAwesome name="group" size={8} color={extendedConfig.tokens.colors.gray500} />
                <Text  lineHeight={16}    fontSize={'$xs'} color="$gray400">
                    78 Colabs 
                </Text>
            </HStack>
            <HStack space="xs" alignItems="center">
                <FontAwesome5  name="tasks" size={10} color={extendedConfig.tokens.colors.gray500}/>
                <Text   lineHeight={16}    fontSize={'$xs'} color="$gray400">
                    33Taks
                </Text>
            </HStack>

        </HStack>
    )

}