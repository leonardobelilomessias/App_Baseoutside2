import { VStack } from "@gluestack-ui/themed";
import {  SearchCardUser } from "./SearchCard";
import { FlatList } from "react-native";
import { CardUserPressableSimpleProps } from "@/types/ComponetsTypes/cardTypes";
import { CardUserPressableSimple } from "../Cards/CardUserPressableSimple";



type TypeSelectCardRender = {
    content:CardUserPressableSimpleProps[]
}

export function ListAgentSearch({content}:TypeSelectCardRender){
    return(

        <VStack flex={1} backgroundColor="$white" paddingHorizontal={16} borderRadius={16}  >
            <FlatList
                scrollEnabled={true}
                data={content}
                showsVerticalScrollIndicator={false}
                keyExtractor={(resultApi)=>resultApi.id
                }
                renderItem={({item})=>(
                    <CardUserPressableSimple id={item.id} image={item.image} name={item.name} link={item.link} label="Teacher"/>
                )}
                />
        </VStack>

    )
}