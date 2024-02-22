import { PhotoPublicationCard } from "@/Componets/Cards/PhotoPublicationCard";
import { AxiosApi } from "@/api";
import { useDataAgent } from "@/context/UserContext";
import { PhotoPublicationCardProps } from "@/types/ComponetsTypes/cardTypes";
import { goToSelectScreen } from "@/utils/linkGoToScreen";
import { Button, ButtonText, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";


export function Feed(){
    const {dataAgent} = useDataAgent()
    const [content,setContent] = useState([] as PhotoPublicationCardProps[])
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
            <Button onPress={()=>{router.push(goToSelectScreen.link)}}>
                <ButtonText>Go to   {goToSelectScreen.name}</ButtonText>
            </Button>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={content}  
            renderItem={(content)=>
                    <>
                        {
                        content.item.type==='photo'&&
                        <PhotoPublicationCard type={content.item.type}  description={content.item.description} image_profile={content.item.image_profile}id_colab={content.item.id_colab}
                        name={content.item.name} publication_id={content.item.publication_id} url={content.item.url}/>
                        }
                    </>
            }/>
        </VStack>
    )
}
