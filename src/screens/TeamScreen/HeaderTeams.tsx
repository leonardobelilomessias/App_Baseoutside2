import { VerticalPaddingContainer } from "@/Componets/VerticalPaddingContainer";
import { extendedConfig } from "@/theme/config";
import { Avatar, AvatarFallbackText, AvatarGroup, AvatarImage, Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import React from "react";

export function HeaderTeams(){
    return(
        <VStack bg="white"   p={extendedConfig.defaulPaddingToCompanents} borderBottomWidth={1} borderBottomColor="$gray200">
                <HStack>
                    <Avatar mr={'$2'} size="lg">
                        <AvatarFallbackText>
                            My name
                        </AvatarFallbackText>
                    </Avatar>
                    <VStack>
                        <Text bold  size="2xl" alignItems="center" > Organização </Text>
                        <GroupsPeople  description=" 35 usarios ativos"/>    
                    </VStack>
                </HStack>
                <Box>
                    <Text color="$gray400" size="xs" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores, magni eligendi 
                    </Text>
                </Box>
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
