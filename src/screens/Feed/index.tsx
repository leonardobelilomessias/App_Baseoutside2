import { DailyPublications } from "@/Componets/ItensFeed/DailyPublications";
import { PhotoPublications } from "@/Componets/ItensFeed/PhotoPublications";
import { VideoPublication } from "@/Componets/ItensFeed/VideoPulication";
import { useDataAgent } from "@/context/UserContext";
import { VStack } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import { useState } from "react";

type ContentDTO={
    

    name: string,
    id_colab: string
    image_profile:string
    description: string
    publication_id: string
    url: string
}
export function Feed(){
    const {dataAgent} = useDataAgent()


    return(
        <VStack space={'md'} >
        <PhotoPublications  id_colab={dataAgent.id}  />
        <DailyPublications/>
        <VideoPublication/>
        </VStack>
    )
}