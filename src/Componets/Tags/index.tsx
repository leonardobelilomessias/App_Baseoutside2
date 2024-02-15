import { skillsProfileMocks } from "@/mocks/agents/dataProfileMocks";
import { VStack, Box, HStack, Badge, BadgeText, Text } from "@gluestack-ui/themed";

export function Tags({elements,title}:{elements:string[], title:string}){
    return(
        <VStack space="xs" borderBottomColor="$gray200" borderBottomWidth={1} paddingBottom={24} >
        <Text fontWeight="$bold">{title}</Text>
        <Box>
            <HStack flexWrap="wrap">

        {
            elements.map((skill)=>(
                <Badge sx={{borderRadius:8}} m={2} size="sm" variant="solid" key={skill} borderRadius="$none" action="success">
                <BadgeText >{skill}</BadgeText>
                </Badge>
            ))
        }

        </HStack>
        </Box>
    </VStack>
    )
}