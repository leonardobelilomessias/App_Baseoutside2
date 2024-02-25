import { linkNotFoundImageCoverMidia } from "@/utils/aplicationRouterLinks"
import { Center, Image } from "@gluestack-ui/themed"
import React from "react"
import { Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";


export function AvatarCardUpdate({target, type,}:{target: "photo" | "daily_post" | "comment" | "depoiment"|"colab" |"sponsor",   type: "comment" | "response_comment" | "liked" | "new_depoiment" | "new_sponsor" | "new_colab"}){
    if(target==="photo") return(
         <Center>
             <Image width={50} height={50} source={{ uri: linkNotFoundImageCoverMidia }} />
         </Center>
     )
     if(target==="depoiment") return(
         <Center width={50} borderRadius={'$md'} height={50} bgColor="$green300">
             <MaterialCommunityIcons color={'white'} size={30} name="card-account-details" />
             
         </Center>
     )
     if(target==="colab") return(
         <Center width={50} borderRadius={'$md'} height={50} bgColor="$green300">
             <FontAwesome5 color={'white'} size={30} name="user" />
         </Center>
     )
     if(target==="sponsor") return(
         <Center width={50} borderRadius={'$md'} height={50} bgColor="$green300">
             <MaterialIcons color={'white'} size={30} name="monetization-on" />
         </Center>
     )
     if(target==="daily_post") return(
         <Center width={50} borderRadius={'$md'} height={50} bgColor="$green300">
             <MaterialCommunityIcons color={'white'} size={30} name="text-account" />
         </Center>
     )
     if(target==="comment" && type==="response_comment") return(
         <Center width={50} borderRadius={'$md'} height={50} bgColor="$green300">
             <MaterialCommunityIcons color={'white'} size={30} name="comment" />
         </Center>
     )
 }
 