import { Tags } from "@/Componets/Tags"
import { VStack, Badge, BadgeText,Text,Pressable } from "@gluestack-ui/themed"

export function AboutMissionProfile(){
    const fields = ['politica', 'educação','empreendedorismo','negocios']
    return(
        <VStack p={12} space="md">
            <Text fontWeight="$bold">
                Sobre
            </Text>
            <Text>
                Empreendedor social  a 5 anos na área de desenvolvimento social. 
                Com 2 projetos em curso e mais de 2 mil jovens alcançados.
            </Text>
            <Tags elements={fields} title="Campos de atuação"/>            
            <Pressable borderRadius={8} borderWidth={1} padding={12} borderColor="$green400">
                <Text fontWeight="$bold" color="$green400" textAlign="center">
                    Ver card de apresentação
                </Text>
            </Pressable>
        </VStack>
    )
}