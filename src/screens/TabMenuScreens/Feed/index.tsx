import { AvatarImageAgent } from "@/Componets/AvatarImageAgent";
import { PhotoPublicationCard } from "@/Componets/Cards/PhotoPublicationCard";
import { AxiosApi } from "@/api";
import { useDataAgent } from "@/context/UserContext";
import { PhotoPublicationCardProps } from "@/types/ComponetsTypes/cardTypes";
import { goToSelectScreen } from "@/utils/linkGoToScreen";
import { Avatar, Button, ButtonText, Center, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import { extendedConfig } from "@/theme/config";

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

            <FlatList 
            ListHeaderComponent={()=>(
            <Button onPress={()=>{router.push(goToSelectScreen.link)}}>
                <ButtonText>Go to   {goToSelectScreen.name}</ButtonText>
            </Button>
            )}
            ListFooterComponent={({item})=>(
                <RestComponets />
            )}
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

type CompenetFeedType = {

    creator_name:string

}

function RestComponets(){
    const {dataAgent} = useDataAgent()

    return(
        <VStack >
            <Text> Rest components</Text>
            <VStack padding={12} bg="$white" height={300} space="xl">
                    <HeaderPublication user_name={dataAgent.name} image_profile={dataAgent.image_profile}/>
                    <Text size="xs">Publicou um  depoimento para <Text bold size="xs">@leonardobelilomessias</Text></Text>
                <Center>
                    <MaterialCommunityIcons name="card-account-details" size={36} color={extendedConfig.tokens.colors.green400}/>
                    <Text color="$green500" bold size="lg">Compromisso</Text>
                </Center>

                <Text> Foi muito incrivel Patriocinar de tudo isso espero ver essa missão crescer cada vez mais.</Text>
                <Pressable bg="$green400" padding={8} borderRadius={'$md'}>
                    <Text color="white" textAlign="center" fontWeight="$medium">Ver Depoimento</Text>
                </Pressable>
            </VStack>
        </VStack>
    )
}


function HeaderPublication({image_profile,user_name}:{image_profile:string | null, user_name:string}){
    console.log(image_profile)
    return(
        <HStack space="md" alignItems="center">
                <AvatarImageAgent  image_profile={image_profile} sizeAvatar="sm" sizeIcon={10}/>
                <Text bold>{user_name}</Text>
        </HStack>
    )
}

