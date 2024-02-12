import { extendedConfig } from "@/theme/config"
import { VStack, Heading, Input, InputField, HStack, Text ,Pressable, Spinner, Image} from "@gluestack-ui/themed"
import { router } from "expo-router"
import React, { useState } from "react"
import { TextInput} from "react-native"
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from "react-native"

export function ShareDailyPost({publisher}:{publisher:()=>void}){
    return(
      <>
            <VStack bg='$white' flex={1} borderRadius={20} p={"$1.5"} space='md'>
                  
                  <Heading textAlign='center'>Daily Post</Heading>
                  <Text fontSize={'$xs'} color='$gray400' >
                      <Feather name="info" size={12} color="gray" style={{padding:8}} />
                      {' '}Daily post são relatos de experiencias de atividades e
                      acontecimentos diarios compartilhadas com seus sponsos e colabs. 
                  </Text>
                  <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} borderRadius={8} borderColor='$gray300'     >
                    <InputField placeholder="Digite um titulo" placeholderTextColor={'$gray300'} />
                  </Input>
                  <TextInput multiline={true} numberOfLines={18}  maxLength={50} onChangeText={()=>{}}textAlignVertical='top' style={style.Textinput}/>
                  <VStack space='md' justifyContent='flex-end'>
                    <Pressable bg='$green400' onPress={()=>{publisher()}} paddingHorizontal={8} borderRadius={'$md'} paddingVertical={10} >
                        <Text textAlign="center" color='$white' > Publicar</Text>
                    </Pressable>
                    <Pressable bg='$white' borderRadius={'$md'} borderWidth={1} borderColor="$green400" paddingHorizontal={8} paddingVertical={10} onPress={()=>{router.push('/')}}>
                        <Text color='$green400' textAlign="center" > Cancelar</Text>
                    </Pressable>
                  </VStack>
        
            </VStack>
        </>
    )
  }
const style = StyleSheet.create({
  Textinput:{padding: 10, 
    backgroundColor:'white', 
    borderColor:extendedConfig.tokens.colors.gray300,
    borderWidth:1,
    borderRadius:8, }
})

