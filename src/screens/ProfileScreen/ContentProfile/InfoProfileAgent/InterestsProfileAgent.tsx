import { Tags } from "@/Componets/Tags";
import { interestsProfileMocks, skillsProfileMocks } from "@/mocks/agents/dataProfileMocks";
import { Badge, BadgeText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";

export function InterestsProfileAgent(){
    return(
        <Tags elements={interestsProfileMocks} title="Interesses"/>

    )
}




