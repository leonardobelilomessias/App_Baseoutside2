import { Avatar, AvatarFallbackText, AvatarImage, Badge, BadgeText, Box, HStack, Image, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { BottonItemFeed } from "../BottonItemFeed";
import { PhotoPublicationCardProps } from "@/types/ComponetsTypes/cardTypes";
import { linkToProfileAgent } from "@/utils/aplicationRouterLinks";
import { HeaderPublication } from "../HeaderPublication";

export function PhotoPublicationCard({ description,id_colab,image_profile,name,publication_id,type,url,amount_comments,is_liked,is_saved}:PhotoPublicationCardProps){
    return(
        <>
        <Box borderBottomColor="$gray300" borderBottomWidth={0}>
            <VStack bg="$white"  p={12}  width={'100%'}  borderColor="$gray200" borderTopWidth={0.35}  borderBottomWidth={0.45} softShadow="1">
                <Pressable onPress={()=>{router.push({pathname:linkToProfileAgent, params:{name:name, id:id_colab}})}}>

                <HStack p={8}  zIndex={1} alignItems="center" space={'md'} justifyContent="space-between">
                    <HStack  alignItems="center" space="sm">
                    <HeaderPublication image_profile={image_profile} infoRoute={{pathName:linkToProfileAgent,params:{id:id_colab,name:name,}}} user_name={name} />
                    </HStack>
                    <Badge  size="sm" variant="solid" borderRadius="$none" action="success">
                        <BadgeText>Recente</BadgeText>
                    </Badge>
                </HStack>
                </Pressable>
                <Image source={{uri:`http://192.168.15.169:3333/PhotosPublications/${url}`}} w={'100%'}  h={300}>
                </Image>

            <BottonItemFeed amountComments={amount_comments}  isLiked={is_liked} isSaved={is_saved}>
            <Text fontSize={'$sm'} sx={{overflow:'hidden'}}>
                    <Text size="sm" color="$gray500" bold marginRight={8}>leobelilo </Text> {description}
            </Text>
            </BottonItemFeed>

            </VStack>

            </Box>
        </>
    )
}