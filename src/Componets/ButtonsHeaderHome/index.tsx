import { useDataAgent } from "@/context/UserContext"
import { Badge, BadgeText, Box, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed"
import { router } from "expo-router"
import {Feather} from '@expo/vector-icons'

export function ButtonsHeaderHome(){
    const {handleLogout}= useDataAgent()
    return(
        <HStack style={{marginHorizontal:18}} space='sm' >
            <Pressable  onPress={()=>{ handleLogout()}}>
            <VStack style={{marginHorizontal:8}} width={'$full'}>
                <Feather name="heart"  size={24} color="black" />
                <Box minHeight={26} minWidth={26} alignItems="center" justifyContent="center" alignContent="center"  bg="$red600" borderRadius="$full" bottom={-14} right={2} zIndex={99}   position="absolute" >
                        <Text p={2} textAlign="center" color="$white" bold fontSize={12} >22</Text>
                </Box>
            </VStack>
            </Pressable>
            <Pressable   onPress={()=>{ router.push('/(tabs)/routesAgent/chatsAgent')}}>
                <VStack style={{marginHorizontal:8}} width={'$full'}>
                    <Box >
                        <Feather name="send"  size={24} color="black" />
                    </Box>
                    <Box minHeight={26} alignItems="center" justifyContent="center" alignContent="center"  minWidth={26}  bg="$red600" borderRadius="$full" bottom={-14} right={2} zIndex={99}   position="absolute" >
                        <Text p={2} textAlign="center" color="$white" bold fontSize={12} >2</Text>
                    </Box>
                </VStack>
            </Pressable>
            <Pressable  onPress={()=>{ handleLogout()}}>
                <Feather name="power" style={{marginHorizontal:8}} size={24} color="black" />
            </Pressable>
        </HStack>
    )
}