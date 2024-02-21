import { Tags } from "@/Componets/Tags";
import { interestsProfileMocks, skillsProfileMocks } from "@/mocks/agents/dataProfileMocks";
import { extendedConfig } from "@/theme/config";
import { Badge, BadgeText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";

export function InterestsProfileAgent(){
    return(
        <Box paddingHorizontal={extendedConfig.defaulPaddingToCompanents}>
            <Tags elements={interestsProfileMocks} title="Interesses"/>
        </Box>

    )
}




