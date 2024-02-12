import { VStack } from "@gluestack-ui/themed";
import { TopHeaderProfile } from "../../Componets/Profile/TopHeaderProfile";
import { AvatarProfile } from "../../Componets/Profile/AvatarProfile";
import { ContentProfile } from "./ContentProfile";

export function ProfileScreen(){
    return(
        <VStack space="sm" flex={1} >
        <TopHeaderProfile/>
        <AvatarProfile/>
        <ContentProfile/>
        </VStack>
    )
}