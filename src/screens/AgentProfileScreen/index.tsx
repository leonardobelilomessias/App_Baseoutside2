import { Avatar, Text, VStack } from "@gluestack-ui/themed";
import { TopHeaderProfile } from "./TopHeaderProfile";
import { AvatarProfile } from "./AvatarProfile";
import { ContentProfile } from "./ContentProfile";
import { ScrollView } from "react-native";

export function AgentProfileScreen(){
    return(
        <ScrollView>

        <VStack space="md" >
           <TopHeaderProfile/>
           <AvatarProfile/>
           <ContentProfile/>
        </VStack>
    </ScrollView>
    )
}