import { Box } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { CardAction } from "./ActionCard";
import { useEffect, useState } from "react";
import { CardActionProps } from "@/types/ComponetsTypes/cardTypes";

export function ActionCardsContainer({menuSelected, ArrayToRender}:{menuSelected:string, ArrayToRender:CardActionProps[]}){
    const [actionsFiltered, setActionsFiltered] = useState(()=>(ArrayToRender))
    function filterActionsByStatus(){
        const acc = filterActions(menuSelected, ArrayToRender)
        setActionsFiltered(()=>(acc))
    }
    useEffect(()=>{
        filterActionsByStatus()
    },[menuSelected])
    return(
        <FlatList
            data={actionsFiltered}
            ItemSeparatorComponent={()=>(
                <Box width={"$full"}  height={1} bgColor="$gray100"></Box>
            )}
            ListFooterComponent={()=>(
                <Box width={"$full"} height={1} bgColor="$gray100"></Box>
            )}
            renderItem={({item})=>(
                <CardAction title={item.title} description={item.description} participants={item.participants} tasks={item.tasks} image={item.image} vacancies={item.vacancies} />
            )}
            />
    )
}

function filterActions(menuSelected:string,arrayElement:CardActionProps[]):CardActionProps[]{
    let actions :CardActionProps[] =[]
    switch (menuSelected) {
        case "Em andamento":
                actions = arrayElement.filter((actions)=>( actions.status==="in_progress"))
            break;
        case "Concluidas":
                actions = arrayElement.filter((actions)=>( actions.status==="finished"))
            break;
        case "Proximas":
            actions = arrayElement.filter((actions)=>( actions.status==="comming"))
            break;
        default:
            break;
    }
    return actions
}
