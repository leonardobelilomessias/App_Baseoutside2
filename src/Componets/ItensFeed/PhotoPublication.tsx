import { Avatar, AvatarFallbackText, Badge, BadgeIcon, BadgeText, Box, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import vl from '@/assets/vl.jpg'
import { AgentDTO, AgentsFake } from "@/mocks/agents/fakerAgents";
export function PhotoPublication(){
    
    return(
        <>
            {AgentsFake.slice(1,4).map((agent)=>(
                <CardPublication agent={agent} key={agent.id}/>
            ))}
        </>
    )
}

function CardPublication({agent}:{agent:AgentDTO}){
    return(
        <>
        <Box>
            <VStack bg="$white" borderRadius={'$2xl'} p={12}  width={'100%'} >
                <HStack p={8}  zIndex={1} alignItems="center" space={'md'} justifyContent="space-between">
                    <HStack alignItems="center" space="md">
                    <Avatar bgColor="$green400" size="sm" borderRadius="$full">
                        <AvatarFallbackText>{agent.name}</AvatarFallbackText>
                    </Avatar>
                    <Text>{agent.name}</Text>
                    </HStack>
                    <Badge  size="sm" variant="solid" borderRadius="$none" action="success">
                        <BadgeText>New feature</BadgeText>
                    </Badge>
                </HStack>
                <Image source={vl} w={'100%'}  h={300}>
                </Image>
                <Text fontSize={'$sm'} sx={{overflow:'hidden'}}>
                    Dia de  ação social e sem pre um dia de muito aprendizaado,
                    obrigado a todos que participaram.
            </Text>
            </VStack>

            </Box>
        </>
    )
}