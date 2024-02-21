import { VStack } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";
import { AboutMissionProfile } from "./AboutMissionProfile";
import { AvatarProfileMission } from "./AvatarProfileMission";
import { ElementsMissionProfile } from "./ElementsMissionProfile";

export function ProfileMissionScreen(){
    return(
        <VStack>
            <ScrollView  style={{backgroundColor:'white', paddingBottom:12, paddingTop:0}}>

                <VStack flex={1} bg="$white" paddingBottom={24}>
                    <AvatarProfileMission/>
                    <ElementsMissionProfile/>
                    <AboutMissionProfile/>
                </VStack>
            </ScrollView>
        </VStack>
    )
}