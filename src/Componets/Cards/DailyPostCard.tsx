import { VStack, HStack, Text,Pressable } from "@gluestack-ui/themed"
import { router } from "expo-router"
import { BottonItemFeed } from "../BottonItemFeed"
import { DailyPostCardProps } from "@/types/ComponetsTypes/cardTypes"
import { dailyPublicationMocks } from "@/mocks/itensShared/dailyPublicationMocks"
import { linkToDailyPublication } from "@/utils/aplicationRouterLinks"
import { formatDataExtensive } from "@/utils/functions/functionTimes"



export function DailyPostCard({id,userName,title,userAvatar,text,date,amountComents,isLike,isSaved}:DailyPostCardProps){
    const dateFormated =  formatDataExtensive(date)
    
    return(
        <VStack space="xl" paddingBottom={32}  borderBottomColor="$gray200" borderBottomWidth={1} >
            <HStack  space="xl" p={8}  alignContent="center" alignItems="center">
                <VStack  h={50}  >
                    <Text color="$gray400" fontWeight="$bold" fontSize={'$lg'} >
                        {dateFormated.day}
                    </Text>
                    <Text color="$gray400" fontWeight="$bold" size="xs" lineHeight={12} >{dateFormated.month.slice(0,3)}</Text>
                </VStack>
                <Text  minHeight={10}  textBreakStrategy="balanced"  overflow="hidden" fontWeight="$bold" color="$green400" textAlign="center" size="xl"  >
                    {title.slice(0,400)}
                </Text>
            </HStack>
            <Text >
                {text.slice(0,180)}
            </Text>
            <BottonItemFeed amountComments={dailyPublicationMocks.amountComents}/>
            <Pressable onPress={()=>{router.push(linkToDailyPublication)}}>
                <Text textAlign="center" fontWeight="bold" color="$green400" borderWidth={1} borderColor="$green400" padding={4} borderRadius={'$md'}>Ver Completo</Text>
            </Pressable>
    </VStack>
    )
}