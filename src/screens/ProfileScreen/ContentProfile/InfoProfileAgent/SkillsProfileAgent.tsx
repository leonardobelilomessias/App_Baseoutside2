import { Tags } from "@/Componets/Tags";
import { skillsProfileMocks } from "@/mocks/agents/dataProfileMocks";
import { extendedConfig } from "@/theme/config";
import { Badge, BadgeText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";

export function SkillsProfileAgent(){
    return(
        <Box paddingHorizontal={extendedConfig.defaulPaddingToCompanents}>
            <Tags elements={skillsProfileMocks} title="Habilidade"/>
        </Box>
    )
}



