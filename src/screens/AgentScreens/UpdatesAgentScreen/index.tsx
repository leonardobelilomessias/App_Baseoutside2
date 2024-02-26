import { linkNotFoundImageCoverMidia } from "@/utils/aplicationRouterLinks";
import { Box, Center, HStack, Image, Spinner, Text, VStack } from "@gluestack-ui/themed";
import { Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { formatHourAndMinutes } from "@/utils/functions/functionTimes";
import { FlatList } from "react-native-gesture-handler";
import { CardUpdate } from "@/Componets/Cards/CardUpdate";
import { useEffect, useState } from "react";
import { UpdateType } from "@/types/ScreenTypes/UpdatesScreen";
import { EmptyUpdate } from "./EmptyUpdate";
import { fetchDataApi } from "@/api/handlerApi";

export function UpdatesAgentScreen() {
    const [updates, setUpdates] = useState([] as UpdateType[])
    const [load, setLoad] = useState(true)
    useEffect(()=>{
        setLoad(true)
        fetchDataApi({path:"/updatesAgent",funcLoad:setLoad,funcSetArray:setUpdates})
    },[])
    return (
        <VStack bg="$white" flex={1} padding={8} space="md">
            <FlatList
                ListEmptyComponent={()=>(
                    <>
                    {load ?  <Spinner size={"large"} color={"$green500"}/>:
                    <EmptyUpdate/>
                    }
                    </>
                )}
                showsVerticalScrollIndicator={false}
                data={updates}
                renderItem={({ item }) => (
                    <CardUpdate text_body={item.text_body} created_at={item.created_at} dispatch_from_id={item.dispatch_from_id} dispatch_to_id={item.dispatch_from_id} dispatch_from_name={item.dispatch_from_name} dispatch_to_name={item.dispatch_to_name} id={item.id} image={item.image} target={item.target} type={item.type} />
                )}
            />
        </VStack>
    )
}

type DescrptionCardUpdateType = { 
    name: string, 
    type: "comment" | "response_comment" | "liked" | "new_depoiment" | "new_sponsor" | "new_colab"
    target: "photo" | "daily_post" | "comment" | "depoiment"|"colab" |"sponsor"
    text_body: string | null 
}


