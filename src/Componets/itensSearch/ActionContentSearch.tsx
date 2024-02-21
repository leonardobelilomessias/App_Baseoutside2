import { Avatar, AvatarFallbackText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import {  SearchCardUser } from "./SearchCard";
import { FullAgentDTO } from "@/context/context.dtos/Authenticate.dto";
import { FlatList } from "react-native";import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ActionCard } from "../Cards/ActionCard";
import { ActionCardProps } from "@/types/ComponetsTypes/cardTypes";

type TypeSelectCardRender = {
    content:ActionCardProps[]
}

export function ActionContentSearch({content}:TypeSelectCardRender){
    return(

        <VStack flex={1} backgroundColor="$white" paddingHorizontal={16} borderRadius={16}  >

        <FlatList
            
            scrollEnabled={true}
            data={content}
            showsVerticalScrollIndicator={false}
            keyExtractor={(resultApi)=>resultApi.id
            }
            renderItem={({item})=>(
            <ActionCard id={item.id} title={item.title} description={item.description} participants={item.participants} tasks={item.tasks} image={item.image} vacancies={item.vacancies} />

            )}
            />
            </VStack>

    )
}
