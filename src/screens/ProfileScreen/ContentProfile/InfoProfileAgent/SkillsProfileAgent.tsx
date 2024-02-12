import { Badge, BadgeText, Box, HStack, Text, VStack } from "@gluestack-ui/themed";

export function SkillsProfileAgent(){
    return(
        <>
                 <VStack space="xs" borderBottomColor="$gray200" borderBottomWidth={1} paddingBottom={24} >
                    <Text fontWeight="$bold">Interesses</Text>
                    <Box>
                        <HStack flexWrap="wrap">

                    {
                        skillsProfile.map((skill)=>(
                            <Badge sx={{borderRadius:8}} m={2} size="sm" variant="solid" key={skill} borderRadius="$none" action="success">
                            <BadgeText >{skill}</BadgeText>
                            </Badge>
                        ))
                    }

                    </HStack>
                    </Box>
                </VStack>
        </>
    )
}

const skillsProfile = ['tecnologia','liderança','gestão','desenvolvimento de projetos']

