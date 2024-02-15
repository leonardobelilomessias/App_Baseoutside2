import { DailyPublications } from "@/Componets/ItensFeed/DailyPublications";
import { PhotoPublications } from "@/Componets/ItensFeed/PhotoPublications";
import { VideoPublication } from "@/Componets/ItensFeed/VideoPulication";
import { AxiosApi } from "@/api";
import { useDataAgent } from "@/context/UserContext";
import { goToSelectScreen } from "@/utils/linkGoToScree";
import { Button, ButtonText, Text, VStack } from "@gluestack-ui/themed";
import { Stack, router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";

type ContentDTO={
    

    name: string,
    id_colab: string
    image_profile:string
    description: string
    publication_id: string
    url: string
    type:string
}
export function Feed(){
    const {dataAgent} = useDataAgent()
    const [content,setContent] = useState([] as ContentDTO[])
    async function getContent() {
        try{
            console.log(dataAgent.id)
            const result = (await AxiosApi.get('/agent/feedColab',{params:{id_agent:dataAgent.id}})).data
            setContent(result)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getContent()
    },[])
    return(
        <VStack space={'md'} >
            <Button onPress={()=>router.push(goToSelectScreen.link)}><ButtonText>Go to {goToSelectScreen.name}</ButtonText></Button>

        <FlatList data={content}  renderItem={(content)=>
        <>
        {
            content.item.type==='photo'&&<PhotoPublications description={content.item.description} image_profile={content.item.image_profile}id_colab={content.item.id_colab}
            name={content.item.name} publication_id={content.item.publication_id} url={content.item.url}
            />
        }
        </>
        }>

        </FlatList>
        </VStack>
    )
}