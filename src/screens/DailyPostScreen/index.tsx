import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { DailyPublicationScreenProsp } from "@/types/ScreenTypes/DailyScreenTypes";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { format, } from "date-fns";
import {ptBR} from "date-fns/locale"

export function DailyPostScreen( {id, user, date, title, text, amountComments, isLiked, isSaved}:DailyPublicationScreenProsp){
 console.log(date)
    const dateFormated =  format(date,"dd MMMM yyyy EEEE k m" ,{locale:ptBR}).split(" ")
    console.log(dateFormated)
    const monthCapitalized = dateFormated[1].replace(dateFormated[1][0],dateFormated[1][0].toUpperCase())
    return(
        <VStack bg="$white" p={12}  paddingBottom={'$24'}>

            <Text fontWeight="$extrabold" color="$gray400" textAlign="center" >
                {dateFormated[0]}
            </Text>
            <Text borderBottomWidth={1} borderColor="$gray200" fontWeight="$medium" textAlign="center" color="$gray400" marginBottom={12}>
                {monthCapitalized}
                {'\n'}
                <Text size="2xs" color="$gray400"> {dateFormated[3]} as {dateFormated[4]}:{dateFormated[5]}</Text>
            </Text>
        <Heading color="$green400" size="xl" marginBottom={12} textAlign="center">
              {title}
        </Heading>
        <Text marginBottom={24} fontWeight="$light">
            {text}
        </Text>
        <Text marginBottom={20} size="sm" color="$green400" fontWeight="$bold" italic>@leonardobelilo</Text>
        <BottonItemFeed amountComments={Number(amountComments)} />
        </VStack>
    )
}

