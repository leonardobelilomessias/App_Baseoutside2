import { useDataAgent } from "@/context/UserContext"
import { Badge, BadgeText, Box, HStack, Pressable, VStack } from "@gluestack-ui/themed"
import { router } from "expo-router"
import {Feather} from '@expo/vector-icons'

export function ButtonsHeaderHome(){
    const {handleLogout}= useDataAgent()
    return(
        <HStack style={{marginHorizontal:18}} space='sm' >
            <Pressable  onPress={()=>{ handleLogout()}}>
            <VStack style={{marginHorizontal:8}}>
                <Feather name="heart"  size={24} color="black" />
                <Badge h={20} w={20} bg="$red600"borderRadius="$full" bottom={-10} right={-8} zIndex={99} variant="solid" alignSelf="flex-end" position="absolute" >
                        <BadgeText color="$white" fontSize={8}>2</BadgeText>
                    </Badge>
            </VStack>
            </Pressable>
            <Pressable   onPress={()=>{ router.push('/(tabs)/routesAgent/chatsAgent')}}>
                <VStack style={{marginHorizontal:8}}>
                    <Box >
                        <Feather name="send"  size={24} color="black" />
                    </Box>
                    <Badge h={20} w={20} bg="$red600"borderRadius="$full" bottom={-10} right={-8} zIndex={99} variant="solid" alignSelf="flex-end" position="absolute" >
                        <BadgeText color="$white" fontSize={8}>2</BadgeText>
                    </Badge>
                </VStack>
            </Pressable>
            <Pressable  onPress={()=>{ handleLogout()}}>
                <Feather name="power" style={{marginHorizontal:8}} size={24} color="black" />
            </Pressable>
        </HStack>
    )
}