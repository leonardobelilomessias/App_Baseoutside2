import { VStack, HStack, Text,Pressable } from "@gluestack-ui/themed"
import { router } from "expo-router"
import { BottonItemFeed } from "../BottonItemFeed"
import { DailyPostCardProps } from "@/types/ComponetsTypes/cardTypes"
import { dailyPublicationMocks } from "@/mocks/itensShared/dailyPublicationMocks"



export function DailyPostCard({id,userName,title,userAvatar,text,date,amountComents,isLike,isSaved}:DailyPostCardProps){
    return(
        <VStack space="xl" paddingBottom={32}  borderBottomColor="$gray200" borderBottomWidth={1} >
            <HStack  space="xl" p={8}  alignContent="center" alignItems="center">
                <VStack  h={50}  >
                    <Text color="$gray400" fontWeight="$bold" fontSize={'$lg'} >
                        {date.day}
                    </Text>
                    <Text color="$gray400" fontWeight="$bold" size="xs" lineHeight={12} >{date.month}</Text>
                </VStack>
                <Text  minHeight={10} height={50} fontWeight="$bold" color="$green400" textAlign="center" size="xl" justifyContent="center" alignContent="center" >
                    {title.slice(0,400)}
                </Text>
            </HStack>
            <Text >
                {text.slice(0,180)}
            </Text>
            <BottonItemFeed amountComments={dailyPublicationMocks.amountComents}/>
            <Pressable onPress={()=>{router.push('/(tabs)/screensProfile/dailyPublication')}}>
                <Text textAlign="center" fontWeight="bold" color="$green400" borderWidth={1} borderColor="$green400" padding={4} borderRadius={'$md'}>Ver Completo</Text>
            </Pressable>
    </VStack>
    )
}