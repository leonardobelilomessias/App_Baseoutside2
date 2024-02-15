import { CardUserPressableSimple } from "@/Componets/Cards/CardUserPressableSimple"
import { tinyfakeColabs } from "@/mocks/collabs/collabsMocks"
import { ColabsType } from "@/types/MocksTypes/collabstypes"
import { linkToProfileAgent } from "@/utils/aplicationRouterLinks"
import { VStack } from "@gluestack-ui/themed"
import { useState } from "react"
import { FlatList } from "react-native"

export function ListCollabScreen(){
    const [colabs,setColabs] = useState(tinyfakeColabs as ColabsType[])
    return(

    <VStack flex={1} backgroundColor="$white" paddingHorizontal={16} borderRadius={16}  >
        <FlatList scrollEnabled={true} data={colabs} showsVerticalScrollIndicator={false} 
        keyExtractor={(resultApi)=>resultApi.id.toString()}
        renderItem={({item})=>(
            <CardUserPressableSimple name={item.name} id={item.id} link={linkToProfileAgent} image={item.image} label={item.vocation} key={item.id} />
        )}
        />
    </VStack>
    )
}