import { Tags } from "@/Componets/Tags";
import { skillsProfileMocks } from "@/mocks/agents/dataProfileMocks";
import { Badge, BadgeText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";

export function SkillsProfileAgent(){
    return(
        <Tags elements={skillsProfileMocks} title="Habilidade"/>
    )
}



