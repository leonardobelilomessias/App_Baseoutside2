import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { DailyPostPublication } from "@/Componets/DailyPostPublication";
import { DailyPublicationScreenProsp } from "@/types/ScreenTypes/DailyScreenTypes";
import { formatDataExtensive } from "@/utils/functions/functionTimes";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";

export function DailyPostAgentScreen( {id, user, date, title, text, amountComments, isLiked, isSaved}:DailyPublicationScreenProsp){
    const dateFormated =  formatDataExtensive(date)
    return(<DailyPostPublication id={'id'}  date={date} amountComments={amountComments}user={user} isLiked={isLiked} isSaved={isSaved}text={text} title={title}  />)
}



