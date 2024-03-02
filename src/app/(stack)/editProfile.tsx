import { Avatar, AvatarImage, Input, InputField, Pressable, Text, Textarea, TextareaInput, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { extendedConfig } from "@/theme/config";
import { useDataAgent } from "@/context/UserContext";
import { AxiosApi } from "@/api";
import { storageUserSave } from "@/storage/storageUser";
import { BackHandler } from "react-native";


export default function editProfile(){
    const [image, setImage] = useState(null);
    const {tokenAgent, dataAgent} = useDataAgent()
    const [imageProfile,setImageProfile] = useState(`http://192.168.15.169:3333/Agent/${dataAgent.image_profile}`)

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
        });
        
        delete (result as any).cancelled;
        if(result.canceled) return

        if (!result.canceled) {
            const fileExtension = result.assets[0].uri.split('.').pop()
            const photofile = {
                name:`${'leo'}.${fileExtension}`.toLocaleLowerCase(),
                uri:result.assets[0].uri,
                type:`${result.assets[0].type}/${fileExtension}`
            }as any

            const formPhoto = new FormData()
            formPhoto.append(`image_profile`,photofile)
            setImageProfile(result.assets[0].uri)
            let config = {
                headers: {
                'Content-Type': 'multipart/form-data',
                  'Authorization': 'Bearer ' + tokenAgent
                }
              }
            try{

                const responseEditimage = await  AxiosApi.patch(`/agent/imageProfile`,formPhoto,config)
                 const userUpdate = dataAgent
                 userUpdate.image_profile = responseEditimage.data.image_profile
                 storageUserSave(userUpdate)
            }catch(e){
                console.log(e)
            } 
        }
       
    }
    return(
        <ScrollView>

        <VStack alignItems="center" padding={12} space="md">
        <Avatar size="2xl">
            <AvatarImage 
                        source={{
                            uri: imageProfile,
                          }}
                          
                          ></AvatarImage>
        </Avatar>
        <Pressable onPress={pickImage} >
        <Text color="$green400" bold>Trocar Foto2</Text>
        </Pressable>
        <VStack width={'$full'}>

        <Text size="xs" width={'$full'}>Nome</Text>
        <Input>

                          <InputField placeholder="Digite seu nome"/>
        </Input>
        </VStack>
    <VStack width={'$full'}>

        <Text size="xs" width={'$full'}>Vocação</Text>
        <Input>

                          <InputField placeholder="Digite sua vocação"/>
        </Input>
        </VStack>
    
    <VStack width={"$full"}>
        
    <Text size="xs" width={'$full'}>Sobre</Text>
        <TextInput style={{borderColor:extendedConfig.tokens.colors.gray300,borderWidth:1,alignItems: 'flex-start', padding:8, borderRadius:8 }} textAlignVertical="top"  multiline={true} numberOfLines={10}>

        </TextInput>
        </VStack>
        <Pressable bg={'$green400'} borderRadius={8} width={'$full'} padding={12}>
            <Text color="$white" textAlign="center"> Salvar</Text>
        </Pressable>
        <Pressable onPress={()=> router.push('/')} borderWidth={1} borderRadius={8} padding={12} borderColor="$green400" width={'$full'}>
            <Text color="$green400" textAlign="center"> Cancelar</Text>
        </Pressable>
        </VStack>
    </ScrollView>
    )
}