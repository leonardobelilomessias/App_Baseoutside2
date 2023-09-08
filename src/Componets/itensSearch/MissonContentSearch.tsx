import { Avatar, AvatarFallbackText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import {  SearchCardUser } from "./SearchCard";
import { FullAgentDTO } from "@/context/context.dtos/Authenticate.dto";
import { FlatList } from "react-native";import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

type TypeSelectCardRender = {
    selecCardRender:string
    content:FullAgentDTO[]
}

export function MissionContentSearch({selecCardRender,content}:TypeSelectCardRender){
    return(

        <VStack flex={1} backgroundColor="$white" p={16} borderRadius={16}  >

        <FlatList
            
            scrollEnabled={true}
            data={content}
            showsVerticalScrollIndicator={false}
            keyExtractor={(resultApi)=>resultApi.id
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
        <>
                <Box marginBottom={16}>
            <HStack alignItems="center"
            space="lg"
            >
            <Avatar 
                    bgColor="$black"
                    size="lg"
                    borderRadius="$full">
                        <AvatarFallbackText >
                           missão nova
                        </AvatarFallbackText>
                    </Avatar>
                    <VStack >
                        <Text  fontWeight="$bold">
                           Misssão nova
                        </Text>
                        <Text   lineHeight={16} flex={0}    fontSize={'$sm'} color="$gray300">
                            Tecnologia
                        </Text>
                        <Text   lineHeight={16} flex={0}    fontSize={'$sm'} color="$gray300">
                            Belo Horizonte - savassi
                        </Text>

                        <FooterMissionCard/>
                    </VStack>
            </HStack>
        </Box>
        </>
    )
}

function FooterMissionCard(){
    return(
        <HStack alignContent="center"  flexWrap="wrap">
            <HStack alignContent="center" alignItems="center" justifyContent="center" mr={12}>
                
            <MaterialCommunityIcons name="lightning-bolt" size={14} color="black" />
            <Text  lineHeight={16}    fontSize={'$xs'} color="$gray500">
                17 Açoes 
            </Text>
            </HStack>
            <HStack space="xs" alignItems="center" mr={12} >
            <FontAwesome name="group" size={12} color="black" />
            <Text  lineHeight={16}    fontSize={'$xs'} color="$gray500">
                 78 Colabs 
            </Text>
            </HStack>
            <HStack space="xs" alignItems="center">
            <FontAwesome5  name="tasks" size={12} color="black" />
            <Text   lineHeight={16}    fontSize={'$xs'} color="$gray500">
                33Taks
            </Text>
            </HStack>

        </HStack>
    )

}