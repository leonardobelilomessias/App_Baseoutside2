import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { baseURL } from "@/utils/params";
import { VStack, HStack, Avatar, AvatarImage, Box, Text, Image } from "@gluestack-ui/themed";
import { Dimensions } from "react-native";
import { PhotosPublicationsScreenType } from "@/types/ScreenTypes/PhotosPublicationsScreenTypes";
import { OptionsPhoto } from "./OptionsPhoto";

export default function PhotoPublicationScreen({idPublication, userAvatar,userName,description,urlPhoto}:PhotosPublicationsScreenType){
    const windowWidth = Dimensions.get('window').width;
    return(
        <VStack flex={1} bg="$white">
            <HStack space="md" alignContent="center" justifyContent="space-between" alignItems="center"  p={8} mt={16}>
                <HStack alignContent="center" alignItems="center">
                <Avatar size="sm">
                    <AvatarImage source={{uri:`${baseURL}/Agent/${userAvatar}`}}/>
                </Avatar>
                <Text bold> {userName}</Text>
                </HStack>
                <OptionsPhoto publicationId={idPublication}/>
            </HStack>
            {
                (!!urlPhoto)&&
                <Box width={windowWidth} height={windowWidth} bg="$green300">
                    <Image source={{uri:`${baseURL}/PhotosPublications/${urlPhoto}`}} resizeMode="cover" size="full"/>
                
                </Box>
            }
            {
                (!urlPhoto)&&
             <Box width={windowWidth} height={windowWidth} bg="$green300">
                    <Image source={{uri:`${baseURL}/NotFound/not_found_image.jpg`}} resizeMode="cover" size="full"/>
            </Box>
            }
            <VStack p={4}>
            <Text bold>{userName}</Text>
            <Text>{description}</Text>
            </VStack>
            <BottonItemFeed amountComments={855}/>
        </VStack>
    )
}
