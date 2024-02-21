import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { DailyPublicationScreenProsp } from "@/types/ScreenTypes/DailyScreenTypes";
import { formatDataExtensive } from "@/utils/functions/functionTimes";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";

export function DailyPostPublication( {id, user, date, title, text, amountComments, isLiked, isSaved}:DailyPublicationScreenProsp){
    const dateFormated =  formatDataExtensive(date)
    return(
        <ScrollView contentContainerStyle={{padding:8}} showsVerticalScrollIndicator={false} >
        <VStack bg="$white" p={14}  paddingBottom={'$12'}>
            <Text fontWeight="$extrabold" color="$gray400" textAlign="center">{dateFormated.day}</Text>
            <Text borderBottomWidth={1} borderColor="$gray200" fontWeight="$medium" textAlign="center" color="$gray400" marginBottom={12}>
                {dateFormated.month}
                {'\n'}
                <Text size="2xs" color="$gray400"> {dateFormated.weekDay} as {dateFormated.hours}:{dateFormated.minutes} de {dateFormated.year}</Text>
            </Text>
        <Heading color="$green400" size="xl" marginBottom={12} textAlign="center">
              {title}
        </Heading>
        <Text marginBottom={24} fontWeight="$light">
            {text}
        </Text>
        <Text marginBottom={20} size="sm" color="$green400" fontWeight="$bold" italic>@{user}</Text>
        <BottonItemFeed amountComments={Number(amountComments)} />
        </VStack>
    </ScrollView>
    )
}



