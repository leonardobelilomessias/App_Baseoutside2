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
    const text=`um bom dia para poder pensar sobre as coisas dessa  vida . hoje passamos por mais uma etapa crucial do nosso projetoe espero que todos estejam acompanhando. cada um pode oferecer aquilo que recebe então vamos fazendo nossa parte aqui`
    const {dataAgent} = useDataAgent()

    return(
        <VStack >
            <Text bold bg={'$green400'} color="white" textAlign="center" size="lg"> Render  rest components Test below</Text>
            <VideoPlayer/>
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
                    <HeaderPublication direction="horizontal" user_name={dataAgent.name} image_profile={dataAgent.image_profile}/>

                <Text> Foi muito incrivel Patriocinar de tudo isso espero ver essa missão crescer cada vez mais.</Text>
                <Pressable  bg="$green400" padding={8} borderRadius={'$md'}>
                    <Text color="white" textAlign="center" fontWeight="$medium">Ver Depoimento</Text>
                </Pressable>
            </VStack>
    )
}

type StatusVideotype={
isPlaying:AVPlaybackStatus
}

function VideoPlayer(){
    const {dataAgent} = useDataAgent()
    const video = React.useRef(null);
    const windowWidth = Dimensions.get('window').width;
    const [volumeVideo,setVolumeVideo] = useState(0)
    const [status, setStatus] = React.useState({} as AVPlaybackStatusSuccess | AVPlaybackStatusError);
    return(
        <VStack space="md" bg="$white" paddingVertical={12} borderBottomWidth={0.8} borderBottomColor="$gray300">
            <HeaderPublication image_profile={dataAgent.image_profile} user_name={dataAgent.name} />
            <VStack height={windowWidth} width={windowWidth}>

                <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                resizeMode={ResizeMode.COVER}
                isLooping
                shouldPlay
                volume={volumeVideo}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                <Pressable onPress={(volumevideo)=>setVolumeVideo(volumeVideo===0?1:0)} width={24} borderRadius={"$full"} alignContent="center" justifyContent="center" alignItems="center" height={24} bgColor="$black" position="absolute" bottom={10}  right={10}>
                    {
                        volumeVideo===0&&
                        <Ionicons name="volume-mute-sharp" size={14} color="white" />
                    }
                    {volumeVideo !==0 &&
                    <Ionicons name="volume-high-sharp" size={14} color="white" />
                    }
             </Pressable>
            </VStack>
       
       <BottonItemFeed amountComments={254}  />
        </VStack>
    )
}
const styles = StyleSheet.create({
    video:{
        width:"100%",
        height:'100%',
        backgroundColor:"red"
    }
})