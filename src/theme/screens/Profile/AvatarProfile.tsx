import { HStack, Avatar, AvatarFallbackText, AvatarImage, VStack, Heading, Text, AvatarBadge, Button, ButtonText } from "@gluestack-ui/themed";

export function AvatarProfile(){
    return(
        <VStack space="md"   alignItems="center">
        <Avatar size="xl" borderColor="$white" borderWidth={5}>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage 
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
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
          <Heading size="sm">Ronald Richards</Heading>
          <Text size="sm">Nursing Assistant</Text>
        </VStack>
        <HStack space="md">
            <Button bg="$green400" borderRadius={'$full'}>
                <ButtonText >+ Follow</ButtonText>
            </Button>
            <Button action="secondary" variant="outline" borderRadius={'$full'}>
                <ButtonText>$ Sponsor</ButtonText>
            </Button>
        </HStack>
      </VStack>
    )
}