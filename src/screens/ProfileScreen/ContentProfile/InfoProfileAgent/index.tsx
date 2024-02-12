import { VStack } from "@gluestack-ui/themed";
import { AboutAgent } from "./AboutAgent";
import { GoalsProfileAgent } from "./GoalsProfileAgent";
import { SkillsProfileAgent } from "./SkillsProfileAgent";
import { InterestsProfileAgent } from "./InterestsProfileAgent";
import { DepoimentsProfileAgent } from "./DepoimentsProfileAgent";
import { PublicationsProfileAgent } from "./PublicationsProfileAgent";

export function InfoProfileAgent(){
    return(
        <VStack borderRadius={"$lg"} bgColor="$white" space="xl" p={8}>
            <AboutAgent/>
            <GoalsProfileAgent/>
            <SkillsProfileAgent/>
            <InterestsProfileAgent/>
            <DepoimentsProfileAgent/>
            <PublicationsProfileAgent/>
        </VStack>
    )
}