import { Avatar, VStack } from "@gluestack-ui/themed";
import { TopHeaderProfile } from "./TopHeaderProfile";
import { AvatarProfile } from "./AvatarProfile";
import { ContentProfile } from "./ContentProfile";

export function Profile(){
    return(
        <VStack space="sm" flex={1} >
        <TopHeaderProfile/>
        <AvatarProfile/>
        <ContentProfile/>
        </VStack>
    )
}