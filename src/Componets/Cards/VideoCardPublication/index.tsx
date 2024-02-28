
import { useDataAgent } from "@/context/UserContext";
import { HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import {  useState } from "react";
import { HeaderPublication } from "@/Componets/HeaderPublication";
import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Video, ResizeMode,  AVPlaybackStatusSuccess, AVPlaybackStatusError } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { linkToProfileAgent } from "@/utils/aplicationRouterLinks";

type VideoCardPublicationType ={
    id:string
    created_at:Date
    format?:"4:4"|"16:4"
    userName:string
    description:string
    url_video:string
    amountComments:number
    isLiked:boolean
    isSaved:boolean
    image_profile:string | null
    nick_name:string
    id_creator:string
}
export function VideoCardPublication({id,userName,isLiked, description,format,created_at,isSaved,amountComments,url_video, image_profile,nick_name, id_creator}:VideoCardPublicationType){
    const video = React.useRef(null);
    const windowWidth = Dimensions.get('window').width;
    const [volumeVideo,setVolumeVideo] = useState(0)
    const [status, setStatus] = React.useState({} as AVPlaybackStatusSuccess | AVPlaybackStatusError);
    return(
        <VStack  bg="$white" paddingVertical={12} borderBottomWidth={0.8} borderBottomColor="$gray300">
            <HStack padding={4}>
                <HeaderPublication infoRoute={{pathName:linkToProfileAgent, params:{id:id_creator}}} image_profile={image_profile} user_name={userName} />
            </HStack>
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
                <Pressable onPress={()=>setVolumeVideo(()=>volumeVideo===0?1:0)} width={24} borderRadius={"$full"} alignContent="center" justifyContent="center" alignItems="center" height={24} bgColor="$black" position="absolute" bottom={10}  right={10}>
                    {
                        volumeVideo===0&&
                        <Ionicons name="volume-mute-sharp" size={14} color="white" />
                    }
                    {volumeVideo !==0 &&
                    <Ionicons name="volume-high-sharp" size={14} color="white" />
                    }
             </Pressable>
            </VStack>    
                <Text p={4} textBreakStrategy="highQuality"><Text bold >{nick_name}</Text>  {!!description && (description).slice(0,78)}{ description?.length>=78 &&"..."}</Text>         
           
        <BottonItemFeed amountComments={amountComments} isLiked={isLiked} isSaved={isSaved} />
        </VStack>
    )
}
const styles = StyleSheet.create({
    video:{
        width:"100%",
        height:'100%',
        backgroundColor:"black"
    }
})