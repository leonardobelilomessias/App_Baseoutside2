import { AvatarImageAgent } from "@/Componets/AvatarImageAgent";
import { PhotoPublicationCard } from "@/Componets/Cards/PhotoPublicationCard";
import { AxiosApi } from "@/api";
import { useDataAgent } from "@/context/UserContext";
import { PhotoPublicationCardProps } from "@/types/ComponetsTypes/cardTypes";
import { goToSelectScreen } from "@/utils/linkGoToScreen";
import { Avatar, Box, Button, ButtonText, Center, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import { extendedConfig } from "@/theme/config";
import { DailyPostCard } from "@/Componets/Cards/DailyPostCard";
import { HeaderPublication } from "@/Componets/HeaderPublication";
import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus, AVPlaybackStatusSuccess, AVPlaybackStatusError } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { VideoCardPublication } from "@/Componets/Cards/VideoCardPublication";
import { linkToProfileAgent } from "@/utils/aplicationRouterLinks";

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
        <VStack space={'md'}  >
            <FlatList 
            ListHeaderComponent={()=>(
            <>
                <Button onPress={()=>{router.push(goToSelectScreen.link)}}>
                    <ButtonText>Go to   {goToSelectScreen.name}</ButtonText>
                </Button>
                <RestComponets/>
            </>
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


function RestComponets(){
    const videoDescption = "Uma pequena previa do que esta por vir nas proximas temparadas do nosso projeto"
    const text=`um bom dia para poder pensar sobre as coisas dessa  vida . hoje passamos por mais uma etapa crucial do nosso projetoe espero que todos estejam acompanhando. cada um pode oferecer aquilo que recebe então vamos fazendo nossa parte aqui`
    const {dataAgent} = useDataAgent()

    return(
        <VStack >
            <Text bold bg={'$green400'} color="white" textAlign="center" size="lg"> Render  rest components Test below</Text>
            <VideoCardPublication id="0001" isSaved={true} nick_name="JohnDoe" url_video="" amountComments={452} created_at={new Date()} description={videoDescption} id_creator={dataAgent.id} image_profile={dataAgent.image_profile} userName={dataAgent.name} isLiked={false} />
            <DepoimentTemp/>
            <DailyPostCard amountComents={8} date={new Date()} id="0212154" isLike={true} isSaved={false} text={text} title={text} userAvatar={dataAgent.image_profile} userName="John Land"/>
        </VStack>
    )
}




function DepoimentTemp(){
    const {dataAgent} = useDataAgent()

    return(
        <VStack  borderBottomColor="$gray200" borderBottomWidth={1} padding={12} bgColor="white" minHeight={250} space="lg">
                    <Text size="xs" color="$gray500" fontWeight="$medium">Publicou um  depoimento para <Text bold size="xs">@baseoutside</Text></Text>
                    <HeaderPublication infoRoute={{pathName:linkToProfileAgent, params:{id:dataAgent.id}}} direction="horizontal" user_name={dataAgent.name} image_profile={dataAgent.image_profile}/>

                <Text> Foi muito incrivel Patriocinar de tudo isso espero ver essa missão crescer cada vez mais.</Text>
                <Pressable  bg="$green400" padding={8} borderRadius={'$md'}>
                    <Text color="white" textAlign="center" fontWeight="$medium">Ver Depoimento</Text>
                </Pressable>
            </VStack>
    )
}
