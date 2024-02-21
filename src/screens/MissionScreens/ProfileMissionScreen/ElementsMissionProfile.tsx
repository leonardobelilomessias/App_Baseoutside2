import { extendedConfig } from "@/theme/config"
import { HStack, Pressable,Text } from "@gluestack-ui/themed"
import { router } from "expo-router"

export function ElementsMissionProfile(){
    return(
        <>
        <HStack bg="$green500" paddingHorizontal={12} paddingVertical={8} mt={4} justifyContent="space-between"  >
            <Pressable p={4} onPress={()=>{router.push('/screensMission/actionsMission')}} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8}  borderColor="$green400" >
            <Text color="white" size="xl" bold>25</Text>
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.white}>Actions</Text>
            </Pressable>
            <Pressable onPress={()=>{router.push('/screensMission/areasMission')}} p={4} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8}   borderColor="$green400" >
            <Text color="white" size="xl" bold>12</Text>
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.white}>Areas</Text>
            </Pressable>
            <Pressable onPress={()=>{router.push('/screensProfile/tasksMission')}} p={4} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8}   borderColor="$green400" >
            <Text color="white" size="xl" bold>7</Text>
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.white}>Tarefas</Text>
            </Pressable>
            <Pressable p={4} alignContent="center" alignItems="center" width={60} height={60} borderRadius={8}   borderColor="$green400" >
            <Text color="white" size="xl" bold>37</Text>
            <Text  fontSize={'$xs'} fontWeight="$bold" color={extendedConfig.tokens.colors.white}>Avisos</Text>
            </Pressable>

        </HStack>
        </>
    )
}