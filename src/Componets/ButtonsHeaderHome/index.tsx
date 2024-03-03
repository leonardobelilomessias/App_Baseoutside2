import { useDataAgent } from "@/context/UserContext"
import { Badge, BadgeText, Box, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed"
import { router } from "expo-router"
import {Feather} from '@expo/vector-icons'
import { useEffect, useState } from "react"
import { linkToListChatsAgent } from "@/utils/aplicationRouterLinks"

export function ButtonsHeaderHome(){
    const [amountMessage,setAmountMessage]= useState(0)
    const [amountUpdate, setAmountUpdate] = useState(0)
    useEffect(()=>{

        setTimeout(()=>{
            setAmountMessage((amount)=>(amount+1))
        },3000)
        setTimeout(()=>{
            setAmountUpdate(()=>(amountUpdate+1))
        },80000)
    },[])
    const {handleLogout}= useDataAgent()
    return(
        <HStack style={{marginHorizontal:18}} space='sm' >
            <Pressable  onPress={()=>{ setAmountUpdate(0) ;router.push("/(tabs)/routesAgent/updatesAgent")}}>
            <VStack style={{marginHorizontal:8}} width={'$full'}>
                <Feather name="heart"  size={24} color="black" />
                <BadgeNotification amount={amountUpdate} />

            </VStack>
            </Pressable>
            <Pressable   onPress={()=>{setAmountMessage(0); router.push(linkToListChatsAgent)}}>
                <VStack style={{marginHorizontal:8}} width={'$full'}>
                    <Box >
                        <Feather name="send"  size={24} color="black" />
                    </Box>
                    <BadgeNotification amount={amountMessage} />
                </VStack>
            </Pressable>
            <Pressable  onPress={()=>{ handleLogout()}}>
                <Feather name="power" style={{marginHorizontal:8}} size={24} color="black" />
            </Pressable>
        </HStack>
    )
}

function BadgeNotification({amount}:{amount:number}){
    if (amount <= 0) return 
    return(
        <Box minHeight={26} alignItems="center" justifyContent="center" alignContent="center"  minWidth={26}  bg="$red600" borderRadius="$full" bottom={-14} right={2} zIndex={99}   position="absolute" >
            <Text p={2} textAlign="center" color="$white" bold fontSize={12} >{amount}</Text>
        </Box>
    )
}