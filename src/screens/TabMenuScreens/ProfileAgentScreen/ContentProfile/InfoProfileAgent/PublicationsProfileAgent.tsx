import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { extendedConfig } from "@/theme/config";
import { Box, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { ImageBackground } from "react-native";
import { router } from "expo-router";
import { DailyPostCard } from "@/Componets/Cards/DailyPostCard";
import { dailyPublicationMocks } from "@/mocks/itensShared/dailyPublicationMocks";
import { QuoteCard } from "@/Componets/Cards/QuoteCard";
import { VidePublicationCard } from "@/Componets/Cards/VideoPublicationCard";



export function PublicationsProfileAgent(){
    
    return(
        <VStack space="md" padding={extendedConfig.defaulPaddingToCompanents}>
            <   Text bold marginBottom={24}>Timeline</Text>
                <QuoteCard/>
                <DailyPostCard  amountComents={dailyPublicationMocks.amountComents} date={dailyPublicationMocks.date} 
                id={dailyPublicationMocks.id} isLike={dailyPublicationMocks.isLike} isSaved={dailyPublicationMocks.isSaved} userAvatar={dailyPublicationMocks.userAvatar}
                text={dailyPublicationMocks.text} title={dailyPublicationMocks.title} userName={dailyPublicationMocks.userName}
                />
                <VidePublicationCard/>
        </VStack>
    )
}


