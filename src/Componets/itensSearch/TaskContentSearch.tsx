import { Avatar, AvatarFallbackText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import {  SearchCardUser } from "./SearchCard";
import { FullAgentDTO } from "@/context/context.dtos/Authenticate.dto";
import { FlatList } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { CardUserPressableSimpleProps, TaskCartProps } from "@/types/ComponetsTypes/cardTypes";
import { TaskCard } from "../Cards/TaskCard";

type TypeSelectCardRender = {
    content:TaskCartProps[]
}

export function ListTaksSearch({content}:TypeSelectCardRender){
    return(

        <VStack flex={1} backgroundColor="$white" paddingHorizontal={8} borderRadius={16}  >

        <FlatList
            
            scrollEnabled={true}
            data={content}
            showsVerticalScrollIndicator={false}
            keyExtractor={(resultApi)=>resultApi.id
            }
            renderItem={({item})=>(
                <TaskCard key={item.id} id={item.id} area={item.area} date={item.date} deadlineTime={item.deadlineTime} requiredSkills={item.requiredSkills} title={item.title} userName={item.userName} wage={item.wage}  />   

            )}
            />
            </VStack>

    )
}



