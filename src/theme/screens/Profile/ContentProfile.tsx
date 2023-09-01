import { Badge, BadgeIcon, BadgeText, Box, Button, ButtonText, GlobeIcon, HStack, Text, VStack } from "@gluestack-ui/themed";

export function ContentProfile(){
    return(
        <>
        <HStack  justifyContent="space-around" marginVertical={4} >
            <Button  variant="link">
                <ButtonText color="$green400" borderBottomColor="$green400" borderBottomWidth={4}>
                    info
                </ButtonText>
            </Button>
            <Button  variant="link">
                <ButtonText color="$gray400">
                    Area exclusiva
                </ButtonText>
            </Button>
        </HStack>
            <VStack borderRadius={"$lg"} bgColor="$white" space="md" p={8}>
                <VStack>
                    <Text fontWeight="$bold">Sobre</Text>
                    <Text fontSize={'$sm'}>
                    Empreendedor social  a 5 anos na 
                    área de desenvolvimento social. Com 2 
                    projetos em curso e mais de 2 mil jovens 
                    alcançados.
                    </Text>
                </VStack>
                <Skills/>
            </VStack>
        </>
    )
}

function Skills(){
    return(
        <>
                 <VStack space="md" >
                    <Text fontWeight="$bold">Habilidades</Text>
                    <Box>
                        <HStack flexWrap="wrap">

                    {
                        skillsProfile.map((skill)=>(
                            <Badge m={4} size="md" variant="solid" key={skill} borderRadius="$none" action="success">
                            <BadgeText>{skill}</BadgeText>
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