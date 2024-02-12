import { Avatar, AvatarFallbackText, AvatarImage, Box, HStack, Text, VStack , Pressable} from "@gluestack-ui/themed";
import { FlatList } from "react-native-gesture-handler";
import imageProfile from '@/assets/develop.jpg'
import { baseURL } from "@/utils/params";
import { useState } from "react";
import { router } from "expo-router";

interface IColabs{
    name:string
    vocation:string
    id:string
}

export function ColabsAgentScreen(){
    const [colabs,setColabs] = useState(fakeColabs as IColabs[])

    return(

        <VStack flex={1} backgroundColor="$white" paddingHorizontal={16} borderRadius={16}  >

        <FlatList
            
            scrollEnabled={true}
            data={colabs}
            showsVerticalScrollIndicator={false}
            keyExtractor={(resultApi)=>resultApi.id.toString()
            }
            renderItem={({item})=>(
                <ColabCard name={item.name} id={item.id} vocation={item.vocation} key={item.id} />
            )}
            />
            </VStack>
    )
}
export function ColabCard({name, vocation, id}:IColabs){
    return(
        <Pressable paddingVertical={12} onPress={()=>{router.push('/(tabs)/screensProfile/profileAgent')}} borderBottomWidth={0.7} borderBottomColor="$gray100">
            <HStack alignItems="center"space="lg">
                <Avatar 

                        bgColor="$black"
                        size="md"
                        borderRadius="$full">
                            <AvatarFallbackText>
                                {name}
                            </AvatarFallbackText>
                            <AvatarImage source={{uri:`${baseURL}/NotFound/not_found_image.jpg`}}/>
                </Avatar>
                 <VStack>
                        <Text fontWeight="$bold">
                           {name}
                        </Text>
                        <Text fontSize={'$sm'} color="$gray300">
                            {vocation}
                        </Text>
                </VStack>
            </HStack>
        </Pressable>
    )
}


const fakeColabs=[
{name:'lucas Magno', vocation:'Professor',id:'00'}, 
{name:'lucas Magno', vocation:'Professor',id:'01'},
 {name:'Marcos Alves', vocation:'Musica',id:'02'},
 {name:'Lorena albany', vocation:"Arttes",id:'03'},
 {name:'Pedro Gontijo', vocation:'Empreendedor',id:'04'},
 {name:'Ana Flavia', vocation:'Direitos Humanos',id:'05'},
 {name:'CAmila Borges', vocation:'Computação',id:'06'},
 {name:'Diogenes Carlos', vocation:'Saúde',id:'07'},
 {name:'lucas Magno', vocation:'Professor',id:'08'},
 {name:'Marcos Alves', vocation:'Musica', id:'09'},
 {name:'Lorena albany', vocation:"Arttes", id:'10'},
 {name:'Pedro Gontijo', vocation:'Empreendedor', id:'11'},
 {name:'Ana Flavia', vocation:'Direitos Humanos', id:'12'},
 {name:'CAmila Borges', vocation:'Computação', id:'13'},
 {name:'Diogenes Carlos', vocation:'Saúde',id:'14'}


]