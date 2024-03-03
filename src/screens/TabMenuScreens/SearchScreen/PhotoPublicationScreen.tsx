import { Box, Button, ButtonText, Center, Heading, Image, Input,  InputField,  Spinner,  Text, VStack } from "@gluestack-ui/themed";
import { MaterialIcons } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";
import { router, useFocusEffect } from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import { useDataAgent } from "@/context/UserContext";
import { AxiosApi } from "@/api";
import { useCallback, useEffect, useState } from "react";
import { BackHandler, KeyboardAvoidingView, ScrollView, TextInput } from "react-native";

type IPublication={
    content:{
        id_publication:string
    }
    id_publication:string

}
export function PhotoPublicationScreen(){
    const [load,setLoad] = useState(false)
    const [statePublication,setStatePublication] = useState('initial')
    const [dataPublication, setDataPublication] = useState({} as IPublication)
    const [image, setImage] = useState('');
    const [description,setDescription] = useState('')
    let [dataImage,setDataImage ]= useState({name:'', type:'', uri:''})
    const {tokenAgent, dataAgent} = useDataAgent()
    useFocusEffect(
        useCallback(()=>{
            setImage('')        
    },[])
    )

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
            const photopublication = {
                name:`${'leo'}.${fileExtension}`.toLocaleLowerCase(),
                uri:result.assets[0].uri,
                type:`${result.assets[0].type}/${fileExtension}`
            }as any 
            setDataImage({name:photopublication.name,uri:photopublication.uri,type:photopublication.type})
            setImage(result.assets[0].uri)
 
        }
    }
  async   function sendPhoto(){
        const formPhoto = new FormData()
        formPhoto.append(`photos`,dataImage as any)
        formPhoto.append('description',description)
        formPhoto.append('type',"photo")
        formPhoto.append('id_agent',dataAgent.id)

        let config = {
            headers: {
            'Content-Type': 'multipart/form-data',
              'Authorization': 'Bearer ' + tokenAgent
            }
          }
        try{

            setLoad(true)
            const responseEditimage = await  AxiosApi.post(`/agent/photoPublication`,formPhoto,config)

            setDataPublication(responseEditimage.data)
            setStatePublication('created')

        }catch(e){
            console.log(e)
        } finally{
            setLoad(false)
        }
     
    }
    function handleShare(publication_id:string){
        router.push({ pathname: '/(tabs)/photoPublication', params: { publication_id:publication_id } })
          
      }
    return(
        <VStack  alignItems="center" height={'$full'} space="md"  flex={1}>
            {
            !!load? <CreatingPublication/>:
            <ScrollView>

            {
                statePublication==='created'?
                <VStack width={'$full'} alignContent="center" alignItems="center"  flex={1} height={'$full'} space="lg" justifyContent="center">
                <Text bold>Criado com sucesso</Text>
                    <MaterialIcons name="check" size={100} color={'green'}/>
                <Button width={'90%'} bg="$green400" onPress={()=>{handleShare(dataPublication.id_publication)}} >
                    <ButtonText> Ver Publicação</ButtonText>
                </Button>
                <Button width={'90%'} onPress={()=>{router.push('/')}}  borderColor="$green400" variant="outline"  >
                    <ButtonText color="$green400"> Voltar para Tela inicial</ButtonText>
                </Button>
                
                </VStack>
                :
                <>
            <Heading>Publicar Foto</Heading>
            <Box alignContent="center"  justifyContent="center" alignItems="center" borderWidth={!!image?0:0} borderStyle="dashed" bg="$gray100" borderColor="$gray300" width={'$80'} height={'$80'} >
                {
                    !!image?
                    <Image source={{uri:image}}size="full" />
                    :
                    <MaterialIcons name="add-photo-alternate" size={100} color={extendedConfig.tokens.colors.gray400} />
                }
            </Box>

            <KeyboardAvoidingView style={{flex:1, alignContent:"center" , alignItems:"center"}} behavior="padding" >
            {
                !!image&&
                <TextInput placeholder="Digite algo sobre" onChangeText={(text)=>{setDescription(text)}} placeholderTextColor={extendedConfig.tokens.colors.gray400} style={{borderColor:extendedConfig.tokens.colors.gray300,borderWidth:1,alignItems: 'flex-start', padding:8, borderRadius:4,width:'95%' }}textAlignVertical="top"  multiline={true} numberOfLines={4} >
            </TextInput>
            }
            <VStack flex={1} width={'100%'} space="md" margin={4}>
                {!!image?
                <Button width={'$full'} bg="$green400" onPress={sendPhoto} >
                    <ButtonText> Publicar</ButtonText>
                </Button>
                :
                <Button width={'$full'} bg="$green400" onPress={pickImage} >
                    <ButtonText> Escolher Foto</ButtonText>
                </Button>
                }
                <Button width={'$full'} onPress={()=>{router.push('/(tabs)/photoPublication')}}  borderColor="$green400" variant="outline"  >
                    <ButtonText color="$green400"> Cancelar</ButtonText>
                </Button>
            </VStack>
                       
                </KeyboardAvoidingView>
             </>  }
            </ScrollView>
            }
        </VStack>
    )
}

function CreatingPublication(){
    return(
        <Center flex={1}>
            <Spinner size={'large'} color={'$green300'}/>
            <Text bold> Criando Publicação</Text>
        </Center>
    )
}