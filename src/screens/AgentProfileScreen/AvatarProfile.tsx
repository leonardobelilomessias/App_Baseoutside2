import { HStack, Avatar, AvatarFallbackText, AvatarImage, VStack, Heading, Text, AvatarBadge, Button, ButtonText } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { useState } from "react";

export function AvatarProfile(){
  const [isFollower,setIsFollower] = useState(false)
    return(
        <VStack space="md"   alignItems="center">
        <Avatar size="xl" borderColor="$white" borderWidth={5}>
          <AvatarFallbackText>Leonardo Belilo</AvatarFallbackText>
          <AvatarImage 
            source={{
              uri: "https://images.unsplash.com/profile-fb-1597267794-eb023d64bf1d.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
            }}
            
          />
          <AvatarBadge
            sx={{
                _dark: {
                borderColor: "$black",
                },
            }}
            />
          
        </Avatar>
        <VStack>
          <Heading size="sm" textAlign="center">Leonardo Belilo</Heading>
          <Text size="sm" textAlign="center" color="$gray500">Empreendedor Social</Text>
        </VStack>
        <HStack space="md">
          {
            isFollower?
            <Button bg="$white" borderColor="$green400" borderWidth={1} borderRadius={'$full'} onPress={()=>{setIsFollower(false)}}>
              <ButtonText color="$green400">+ Seguindo</ButtonText>
            </Button>:
            <Button bg="$green400" borderRadius={'$full'} onPress={()=>{setIsFollower(true)}}>
              <ButtonText color="$white" >+ Seguir</ButtonText>
            </Button>
          }

            <Button action="secondary" variant="outline" borderRadius={'$full'} onPress={()=>{router.push('/(tabs)/screens/sponsorAgent')}}>
                <ButtonText >$ Sponsor</ButtonText>
            </Button>
        </HStack>
      </VStack>
    )
}