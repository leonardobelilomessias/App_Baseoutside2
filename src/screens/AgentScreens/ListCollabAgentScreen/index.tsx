import { CardUserPressableSimple } from "@/Componets/Cards/CardUserPressableSimple"
import { ListCollabs } from "@/Componets/ListCollabs"
import { tinyfakeColabs } from "@/mocks/collabs/collabsMocks"
import { ColabsType } from "@/types/MocksTypes/collabstypes"
import { linkToProfileAgent } from "@/utils/aplicationRouterLinks"
import { VStack } from "@gluestack-ui/themed"
import { useState } from "react"
import { FlatList } from "react-native"

export function ListCollabAgentScreen(){
    const [colabs,setColabs] = useState(tinyfakeColabs as ColabsType[])
    return( <ListCollabs/>)
}