import { linkNotFoundImageCoverMidia } from "@/utils/aplicationRouterLinks";
import { Box, HStack, Image, Text, VStack } from "@gluestack-ui/themed";

export function UpdatesAgentScreen(){
    return(
    <VStack bg="$white" flex={1} padding={8} space="md">
        <HStack space="md"> 
            <Image width={50} height={50} source={{uri:linkNotFoundImageCoverMidia}}/>
            <Text> <Text bold>john dow </Text>curtiu sua foto</Text>
        </HStack>

        <HStack space="md" display="flex" width={"$full"} > 
            <Box width={50} height={50}>
                <Image width={50} height={50} source={{uri:linkNotFoundImageCoverMidia}}/>
            </Box>
            <Box flex={1} >
                <Text lineBreakMode="head" textBreakStrategy="highQuality" flexWrap="wrap" size="sm"> <Text bold size="sm">john dow </Text>
                comentou em sua foto: Achei incrivel a iniciativa estou na espectativa da proxima ação
                </Text>
            </Box>
        </HStack>

        <HStack space="md" display="flex" width={"$full"} > 
            <Box width={50} borderRadius={'$md'} height={50} bgColor="$green300">
            </Box>
            <Box flex={1} >
                <Text size="sm"> Novo depoimento de john clique para ver completo</Text>
            </Box>
        </HStack>
    </VStack>
    )
}