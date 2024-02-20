import { VerticalPaddingContainer } from "@/Componets/VerticalPaddingContainer";
import { extendedConfig } from "@/theme/config";
import { Avatar, AvatarFallbackText, AvatarGroup, AvatarImage, Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { HeaderTeams } from "./HeaderTeams";
import { AdvicesHorizontalContainer } from "@/Componets/Advices/AdvicesHorizontalContainer";
import { listAdvicesmock } from "@/mocks/advices/advicesMocks";
import { MenuTypeUnderline } from "@/Componets/Menus/MenuTypeUnderline";
import { TasksList } from "@/Componets/TasksList";
import { tasksAgentMock } from "@/mocks/tasksMocks";
import { ScrollView } from "react-native-gesture-handler";

export function TeamScreen(){
    const itensMenu = ["Em andamento","Proximas", "Concluidas"]
    const [itemSelected,setItemSelected]= useState(itensMenu[0])
    const advices = listAdvicesmock
    const listTaks = tasksAgentMock
    return(
        <VStack bg="white" flex={1} >
          <HeaderTeams/>
          <ScrollView showsVerticalScrollIndicator={false}>
               <AdvicesHorizontalContainer listAdvices={advices}/>
               <Text bold padding={8} paddingBottom={1}>Tasks</Text>
               <MenuTypeUnderline itemSelected={itemSelected} itensMenu={ itensMenu}setItenSelected={setItemSelected}/>
               <TasksList listTasks={listTaks} />
          </ScrollView>
        </VStack>
    )
}


function GroupsPeople({name,description}:{name?:string,description:string}){
  
    const avatars = [
        { src: 'https://example.com.jpg', alt: 'Sandeep Srivastva' , color:'$emerald600' },
        { src: 'https://example.com.jpg', alt: 'Arjun Kapoor', color:'$cyan600' },
        { src: 'https://example.com.jpg', alt: 'Ritik Sharma ', color:'$indigo600' },
        { src: 'https://example.com.jpg', alt: 'Akhil Sharma', color:'$gray600' },
        { src: 'https://example.com.jpg', alt: 'Rahul Sharma ', color:'$red400' },
    ];
    const extraAvatars = avatars.slice(3);
    const remainingCount = extraAvatars.length;
    return (
      <AvatarGroup alignItems="center"   >
        <RenderAvatar/>
  
        <Avatar size={'xs'} borderColor="$white" borderWidth="$2" bg="$gray600" 
        $dark-borderColor="$black">
            <AvatarFallbackText >{"+ " + remainingCount + ""}</AvatarFallbackText>
        </Avatar>
        <Text size="2xs" color="$gray400" >{description} {name}</Text>
      </AvatarGroup>
    );
  }
  
  function RenderAvatar(){
    const avatars = [
      { src: 'https://example.com.jpg', alt: 'Sandeep Srivastva' , color:'$emerald600' },
      { src: 'https://example.com.jpg', alt: 'Arjun Kapoor', color:'$cyan600' },
      { src: 'https://example.com.jpg', alt: 'Ritik Sharma ', color:'$indigo600' },
      { src: 'https://example.com.jpg', alt: 'Akhil Sharma', color:'$gray600' },
      { src: 'https://example.com.jpg', alt: 'Rahul Sharma ', color:'$red400' },
  ];
  const extraAvatars = avatars.slice(3);
  const remainingCount = extraAvatars.length;
    return(
        <>
          {
          avatars.slice(0, 3).map((avatar, index)=>(
            <Avatar   size="xs" borderColor="$white" borderWidth="$2" key={index} bgColor={avatar.color} $dark-borderColor="$black">
            <AvatarFallbackText>{avatar.alt}</AvatarFallbackText>
            <AvatarImage  source={{uri:avatar.src}}/>
          </Avatar>
          ))
        }
        </>
    )
  }
