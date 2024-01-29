import { HStack, Avatar, AvatarFallbackText, AvatarImage, VStack, Heading, Text, AvatarBadge, Button, ButtonText, Box, Pressable, AvatarGroup } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";
import { useDataAgent } from "@/context/UserContext";
import { baseURL } from "@/utils/params";
import { BackHandler } from "react-native";


export function AvatarProfile(){
  const [isFollower,setIsFollower] = useState(false)
  const {dataAgent} = useDataAgent()
  const imageProfile = `${baseURL}/Agent/${dataAgent.image_profile}`

    return(
        <VStack space="xs"  alignItems="center">

        <Avatar size="2xl" borderColor="$gray200" borderWidth={5} >
          <AvatarFallbackText>Leonardo Belilo</AvatarFallbackText>
          <AvatarImage 
            source={{
              uri: imageProfile,
            }}
            
          />

                    <AvatarBadge alignItems="center" justifyContent="center"
                    
                    sx={{
                      _dark: {
                        borderColor: "$black",
                      },
                    }}
                    >
              <Pressable flex={1} alignItems="center" justifyContent="center" onPress={()=>router.push('/screensProfile/editProfile')}>
                        <FontAwesome name="pencil" color='white' size={18}/>
              </Pressable>                    
                        </AvatarBadge>
          
        </Avatar>
        <VStack mb={4}>
          <Heading size="xl" color="$gray600" lineHeight={'$xl'} textAlign="center">Leonardo Belilo</Heading>
          <Text size="sm" textAlign="center" fontWeight="$light" lineHeight={'$sm'} color="$gray400">Empreendedor Social</Text>
             
     
        </VStack>

        <HStack space="md" marginHorizontal={'$1'}>
          {
            isFollower?
            <Button bgColor="#F7FDF7"  borderColor="$green400" borderWidth={1} borderRadius={8} size="sm" onPress={()=>{setIsFollower(false)}}>
              <ButtonText color="$green400"> Seguindo</ButtonText>
            </Button>:
            <Button bg="$green400" size="sm" borderRadius={8} onPress={()=>{setIsFollower(true)}}>
              <ButtonText color="$white" >+ Seguir</ButtonText>
            </Button>
          }

            <Button flex={4} action="secondary" variant="outline" borderColor="$green300" size="sm" borderRadius={8} onPress={()=>{router.push('/(tabs)/screensProfile/sponsorAgent')}}>
                <ButtonText color="$green400" >  Patriocinar Mensalmente </ButtonText>
            </Button>

        </HStack>

        <VStack  position="absolute" right={5} space="sm">
          <Pressable onPress={()=>{router.push('/(tabs)/screensProfile/chatProfile')}} alignItems="center" justifyContent="center"  p={12} borderWidth={1}  borderRadius={'$full'} borderColor={extendedConfig.tokens.colors.green300}>
             <FontAwesome name="send-o" size={16} color={extendedConfig.tokens.colors.green300} />
          </Pressable>
          <Box alignItems="center" justifyContent="center"  p={12} borderWidth={1}  borderRadius={'$full'} borderColor={extendedConfig.tokens.colors.green300}>
             <FontAwesome name="share-alt" size={16} color={extendedConfig.tokens.colors.green300} />
          </Box>
          <Box alignItems="center" justifyContent="center"  p={12} borderWidth={1}  borderRadius={'$full'} borderColor={extendedConfig.tokens.colors.green300}>
             <FontAwesome name="link" size={16} color={extendedConfig.tokens.colors.green300} />
          </Box>
          
        </VStack>
        

      </VStack>
      
    )
}


function GroupsPeople({name}:{name:string}){
  
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
    <AvatarGroup alignItems="center">
      <RenderAvatar/>

      <Avatar size="xs" borderColor="$white" borderWidth="$2" bg="$gray600" 
      $dark-borderColor="$black">
          <AvatarFallbackText >{"+ " + remainingCount + ""}</AvatarFallbackText>
      </Avatar>
      <Text size="2xs" color="$gray400" >+300 Pessoas estão Patriocinado {name}</Text>
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