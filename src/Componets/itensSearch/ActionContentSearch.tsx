import { Avatar, AvatarFallbackText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import {  SearchCardUser } from "./SearchCard";
import { FullAgentDTO } from "@/context/context.dtos/Authenticate.dto";
import { FlatList } from "react-native";import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

type TypeSelectCardRender = {
    selecCardRender:string
    content:FullAgentDTO[]
}

export function ActionContentSearch({selecCardRender,content}:TypeSelectCardRender){
    return(

        <VStack flex={1} backgroundColor="$white" paddingHorizontal={16} borderRadius={16}  >

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
                           Nova Ação
                        </AvatarFallbackText>
                    </Avatar>
                    <VStack >
                        <Text  fontWeight="$bold">
                        Nova Ação
                        </Text>
                        <Text   lineHeight={16} flex={0}    fontSize={'$sm'} color="$gray300">
                             começa em 8 dias
                        </Text>
                        <Text   lineHeight={16} flex={0}    fontSize={'$sm'} color="$gray300">
                            Belo Horizonte - savassi
                        </Text>

                        <FooterActionCard/>
                    </VStack>
            </HStack>
        </Box>
        </>
    )
}

function FooterActionCard(){
    return(
        <HStack alignContent="center"  flexWrap="wrap" space="sm">
            <Feather name="info" size={14} color="black" />
            <Text lineHeight={14}    fontSize={'$xs'} color="$gray500">
            25 pessoas inscritas , 7 departamentos 8 vagas disponiveis.
            </Text>
        </HStack>
    )

}