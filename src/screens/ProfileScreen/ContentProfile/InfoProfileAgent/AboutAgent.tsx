import { VStack, AvatarGroup, Avatar, AvatarFallbackText, Text,Pressable, AvatarImage } from "@gluestack-ui/themed";
import React from "react";


export function AboutAgent(){
    return(
        <VStack  padding={0} borderRadius={'$md'}  borderBottomColor="$gray200" borderBottomWidth={1}>
        <Text fontWeight="$bold">Sobre</Text>
        <Text fontSize={'$sm'}>
        Empreendedor na área de desenvolvimento de tecnologias de apoio de agentes de transformações sociais missionarios e evagelistas. Com 2 
        projetos em curso.
        </Text>
<GroupsPeople description="+300 Pessoas estão Patriocinado" name="leonardo" />
    <Pressable borderWidth={1} p={4} marginVertical={4} borderColor="$green400" alignItems="center" borderRadius={'$md'}>
        <Text fontWeight="$medium" size="sm" color="$green400"> Ver Apresentação</Text>
    </Pressable>
    </VStack>
    )
}

function GroupsPeople({name,description}:{name:string,description:string}){
  
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
      <AvatarGroup alignItems="center"  paddingHorizontal={12}  justifyContent="flex-end" >
        <RenderAvatar/>
  
        <Avatar size="xs" borderColor="$white" borderWidth="$2" bg="$gray600" 
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