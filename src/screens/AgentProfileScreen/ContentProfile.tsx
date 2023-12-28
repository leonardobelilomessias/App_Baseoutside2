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
                    área de desenvolvimento social. Com 20 
                    projetos em curso e mais de 2 mil jovens 
                    alcançados.
                    </Text>
                </VStack>
                <Skills/>
                <Interests/>
                <ActivitInfo/>
            </VStack>
        </>
    )
}

function Skills(){
    return(
        <>
                 <VStack space="md" >
                    <Text fontWeight="$bold">Interesses</Text>
                    <Box>
                        <HStack flexWrap="wrap">

                    {
                        skillsProfile.map((skill)=>(
                            <Badge sx={{borderRadius:8}} m={4} size="sm" variant="solid" key={skill} borderRadius="$none" action="success">
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
function Interests(){
    return(
        <>
                 <VStack space="md" >
                    <Text fontWeight="$bold">Habilidades</Text>
                    <Box>
                        <HStack flexWrap="wrap">

                    {
                        skillsProfile.map((skill)=>(
                            <Badge sx={{borderRadius:8}} m={4} size="sm" variant="solid" key={skill} borderRadius="$none" action="success">
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

function ActivitInfo(){
    return(
        <>
        <VStack alignItems="center" p={16} space="lg">
            <VStack alignItems="center">
                <Text textAlign="center" fontSize={'$md'} fontWeight="$semibold">Atividade</Text>
                <HStack  space="sm" alignItems="center" justifyContent="center">
                    <Box rounded={'$full'} width={10} height={10} bg='$blue400'></Box>
                    <Text sx={{fontSize:25}} fontWeight="$bold" lineHeight={30}>25</Text>
                </HStack>
                <Text fontSize={'$sm'} textAlign="center">
                    Mantendo a mesma quantidade da semana passada.
                </Text>
            </VStack>

            <VStack alignItems="center">
                <Text textAlign="center" fontSize={'$md'} fontWeight="$semibold">Engajamento</Text>
                <HStack  space="sm" alignItems="center" justifyContent="center">
                    <Box rounded={'$full'} width={10} height={10} bg='$red400'></Box>
                    <Text sx={{fontSize:25}} fontWeight="$bold" lineHeight={30}>25</Text>
                </HStack>
                <Text fontSize={'$sm'} textAlign="center">
                4 a menos que semana passada.
                </Text>
            </VStack>
            <VStack alignItems="center">
                <Text textAlign="center" fontSize={'$md'} fontWeight="$semibold">Transparência</Text>
                <HStack  space="sm" alignItems="center" justifyContent="center">
                    <Box rounded={'$full'} width={10} height={10} bg='$green400'></Box>
                    <Text sx={{fontSize:25}} fontWeight="$bold" lineHeight={30}>100%</Text>
                </HStack>
                <Text fontSize={'$sm'} textAlign="center">
                De suas atividade financeiras foram declaradas.
                </Text>
            </VStack>
        </VStack>
        </>
    )
}
const skillsProfile = ['tecnologia','liderança','gestão','desenvolvimento de projetos']