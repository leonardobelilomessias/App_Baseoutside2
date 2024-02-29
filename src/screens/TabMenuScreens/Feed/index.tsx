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
import { DepoimentCard } from "@/Componets/Cards/DepoimentCard";
import { DepoimentPublicationCard } from "@/Componets/Cards/DepoimentPublicationCard";

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
        <VStack space={'md'} bg="$backgroundLight0" >
            <FlatList 
            ListHeaderComponent={()=>(
            <>
                <RestComponets/>
            </>
            )}

            showsVerticalScrollIndicator={false}
            data={content}  
            renderItem={(content)=>
                    <VStack marginVertical={4}>
                        {
                        content.item.type==='photo'&&
                        <PhotoPublicationCard is_liked={false}is_saved={false} amount_comments={2415} type={content.item.type}  description={content.item.description} image_profile={content.item.image_profile}id_colab={content.item.id_colab}
                        name={content.item.name} publication_id={content.item.publication_id} url={content.item.url}/>
                        }
                    </VStack>
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
            <DepoimentPublicationCard id_depoiment="01" send_by_id={dataAgent.id} send_by_image_profile={dataAgent.image_profile} send_by_name={dataAgent.name} send_to_id={dataAgent.id} send_to_image_profile={dataAgent.image_profile} send_to_name={dataAgent.name} text_body={text} send_to_nickName={dataAgent.user_name}/>
            <VideoCardPublication id="0001" isSaved={true} nick_name="JohnDoe" url_video="" amountComments={453} created_at={new Date()} description={videoDescption} id_creator={dataAgent.id} image_profile={dataAgent.image_profile} userName={dataAgent.name} isLiked={false} />
            <DailyPostCard amountComents={8} date={new Date()} id="0212154" isLike={true} isSaved={false} text={text} title={text} userAvatar={dataAgent.image_profile} userName="John Land"/>
        </VStack>
    )
}




