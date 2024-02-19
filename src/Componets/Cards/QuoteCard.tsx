import { dailyPublicationMocks } from "@/mocks/itensShared/dailyPublicationMocks";
import { extendedConfig } from "@/theme/config";
import { VStack, HStack, Box, Text } from "@gluestack-ui/themed";
import { BottonItemFeed } from "../BottonItemFeed";

export function QuoteCard(){
    return(

       <VStack space="xl" borderBottomColor={extendedConfig.tokens.colors.gray100} borderBottomWidth={1} paddingBottom={'$10'}>
       <HStack alignItems="center">
               <Box width={'$8'} borderRadius={'$full'} height={'$8'} bg="$green300" marginRight={8}></Box>
               <Text fontWeight="$medium">Mike JHerry</Text>
           </HStack>
           <Text textAlign="center" fontSize={'$xl'} fontWeight="$normal">
           Muito bom colaborar com pessoas que tem um visão ampla de uma missão.Parabens!
           </Text>
           <BottonItemFeed amountComments={dailyPublicationMocks.amountComents}/>
       </VStack>
    )
}