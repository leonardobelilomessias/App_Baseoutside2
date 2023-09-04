import { Text, VStack } from "@gluestack-ui/themed";
import {  SearchCardUser } from "./SearchCard";

type selecCardRender = 'Agentes'| 'Missions'| 'Actions'| 'Taks'
export function ContentSearch({selecCardRender}:{selecCardRender:string}){
    return(
        <>
            <VStack 
            flex={1}
            minHeight={600}
            borderRadius={60}
            backgroundColor="$white"
            p={24}
            pt={32}
            >
                <Text>{selecCardRender}</Text>
                <SearchCardUser/>
            </VStack>
        </>
    )
}