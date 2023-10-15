import { DailyPublications } from "@/Componets/ItensFeed/DailyPublications";
import { PhotoPublications } from "@/Componets/ItensFeed/PhotoPublications";
import { VideoPublication } from "@/Componets/ItensFeed/VideoPulication";
import { useDataAgent } from "@/context/UserContext";
import { Button, ButtonText, VStack } from "@gluestack-ui/themed";
import { Stack, router } from "expo-router";
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
            {/*<Button onPress={()=>router.push('/screens/editProfile')}><ButtonText>Go to editscreen</ButtonText></Button>*/}
        <PhotoPublications  id_colab={dataAgent.id}  />
        <DailyPublications/>
        <VideoPublication/>
        </VStack>
    )
}