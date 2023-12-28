import { Avatar, VStack } from "@gluestack-ui/themed";
import { TopHeaderProfile } from "./TopHeaderProfile";
import { AvatarProfile } from "./AvatarProfile";
import { ContentProfile } from "./ContentProfile";

export function Profile(){
    return(
        <VStack space="sm" >
        <TopHeaderProfile/>
        <AvatarProfile/>
        <ContentProfile/>
        </VStack>
    )
}