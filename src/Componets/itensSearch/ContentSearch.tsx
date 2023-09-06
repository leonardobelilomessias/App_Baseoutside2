import { Box, Text, VStack } from "@gluestack-ui/themed";
import {  SearchCardUser } from "./SearchCard";
import { FullAgentDTO } from "@/context/context.dtos/Authenticate.dto";
import { FlatList } from "react-native";



type TypeSelectCardRender = {
    selecCardRender:string
    content:FullAgentDTO[]
}

export function ContentSearch({selecCardRender,content}:TypeSelectCardRender){
    return(

        <VStack flex={1} backgroundColor="$white" p={16} borderRadius={16}  >

        <FlatList
            
            scrollEnabled={true}
            data={content}
            showsVerticalScrollIndicator={false}
            keyExtractor={(resultApi)=>resultApi.id
            }
            renderItem={({item})=>(
                <SearchCardUser name={item.name} />
            )}
            />
            </VStack>

    )
}