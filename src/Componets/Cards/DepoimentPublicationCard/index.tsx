import { Text, VStack,Pressable } from "@gluestack-ui/themed"
import { DepoimentCard } from "../DepoimentCard"

type DepoimentPublicationCardType = {
    id_depoiment:string
    send_to_id:string
    send_by_id:string
    send_by_name:string
    send_by_image_profile:string | null | undefined
    send_to_image_profile:string | null | undefined
    send_to_name:string
    text_body:string
    send_to_nickName:string
    
}
export function DepoimentPublicationCard({id_depoiment,send_by_id,send_by_name,send_to_id,send_to_name,text_body,send_to_nickName,send_by_image_profile,send_to_image_profile}:DepoimentPublicationCardType){
    const text=` bom dia para poder pensar sobre as coisas dessa  vida . hoje passamos por mais uma etapa crucial do nosso projetoe espero que todos estejam acompanhando. cada um pode oferecer aquilo que recebe então vamos fazendo nossa parte aqui`


    return(
        <VStack   borderBottomColor="$gray200" borderBottomWidth={1} padding={12} bgColor="white" minHeight={250} space="md">

                    <Text size="xs" color="$gray500" fontWeight="$medium">Publicou um  depoimento para <Text bold size="xs">@{send_to_nickName}</Text></Text>
            <VStack alignItems="center" bg="$green100" p={8}>
                    <DepoimentCard id={id_depoiment} created_by={send_by_id} created_to={send_to_id} image_profile={send_by_image_profile} text={text} userName={send_by_name}  />
            </VStack>
                    
                <Pressable  bg="$green400" padding={8} borderRadius={'$md'}>
                    <Text color="white" textAlign="center" fontWeight="$medium">Ver Depoimento</Text>
                </Pressable>
            </VStack>
    )
}