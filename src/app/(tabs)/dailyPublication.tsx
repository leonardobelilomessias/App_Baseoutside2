import { dailyPublicationMocks } from "@/mocks/itensShared/dailyPublicationMocks";
import { DailyPostScreen } from "@/screens/DailyPostScreen";
import { Heading, VStack } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";

export default function DailyPublication(){
    return(
        <ScrollView>
            <VStack p={8}>

            <DailyPostScreen amountComments={dailyPublicationMocks.amountComents} date={dailyPublicationMocks.date} id={dailyPublicationMocks.id} isLiked={dailyPublicationMocks.isLike}
            isSaved={dailyPublicationMocks.isSaved} text={dailyPublicationMocks.text} title={dailyPublicationMocks.title}  user={dailyPublicationMocks.userName} 
            />
            </VStack>
        </ScrollView>
    )
}