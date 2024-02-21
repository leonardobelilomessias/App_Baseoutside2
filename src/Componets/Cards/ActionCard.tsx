import { HStack, VStack, Box,Image,Text } from "@gluestack-ui/themed";
import ImageArea from '@/assets/vl.jpg'
import { baseURL } from "@/utils/params";
import { ActionCardProps } from "@/types/ComponetsTypes/cardTypes";

export function ActionCard({title, description,participants,tasks,vacancies,image}:ActionCardProps){
    const imageCover = image === null || image ==="" ? baseURL+"/NotFound/undefined_group.png":image
    return(
        <HStack  marginHorizontal={8} space="md" paddingVertical={12}>
        <Image borderRadius={12} source={{uri:imageCover}} size='lg' borderWidth={3} borderColor="$gray200" ></Image>
        <VStack display="flex" flex={1} justifyContent="space-between">
            <Text fontWeight="$medium">{title}</Text>
            <Box >
                <Text flexWrap="wrap" size="sm" color="$gray500">
                    {description}
                </Text>
            </Box>
            <HStack space="md">
                <Text color="$green400" fontSize={'$xs'} fontWeight="$bold">
                    {vacancies} vagas
                </Text>
                <Text color="$green400" fontSize={'$xs'} fontWeight="$bold">
                    {tasks} Tasks
                </Text>
                <Text color="$green400" fontSize={'$xs'} fontWeight="$bold">
                    {participants} participantes
                </Text>
            </HStack>
        </VStack>
    </HStack>
    )
}