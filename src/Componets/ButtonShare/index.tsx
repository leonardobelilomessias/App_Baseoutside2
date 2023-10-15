
import {  router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { extendedConfig } from '@/theme/config';
import { AgentDataProvider, useDataAgent } from '@/context/UserContext';
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Box, Button, ButtonText, HStack, Pressable, Text } from '@gluestack-ui/themed';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const colorSelected = extendedConfig.tokens.colors.green400

export function ButtonShare({focused}:{focused:boolean}){
    const [showActionsheet, setShowActionsheet] = React.useState(false)
    const handleClose = () => setShowActionsheet(!showActionsheet)
    function handleShare(route:string,choice:string){
      console.log(choice)
        router.push({ pathname: route, params: { choice:choice } })
        handleClose()
    }
    return (
      <>
    <Pressable onPress={handleClose} alignItems='center' justifyContent='center'  flex={1} width={"$full"} >

    <Feather 
    name="share" 
    size={24} 
    color={focused? colorSelected :"black"}/>
</Pressable>
        <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
          <ActionsheetBackdrop />
          <ActionsheetContent zIndex={999}>
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
              
            <Text paddingVertical={24} fontWeight='$bold' fontSize={'$xl'}>Compartilhar</Text>
            </ActionsheetDragIndicatorWrapper>
            <ActionsheetItem onPress={()=>{handleShare('/share','daily')}}>
              <HStack alignContent='center' alignItems='center'>
              <Feather name="book-open" size={16} color="black" />
              <ActionsheetItemText>Daily</ActionsheetItemText>
              </HStack>
            </ActionsheetItem>
            <ActionsheetItem onPress={()=>{handleShare('/share','quote')}}>
              <HStack alignItems='center'>
              <MaterialCommunityIcons name="comment-quote-outline" size={16} color="black" />
              <ActionsheetItemText>Citação</ActionsheetItemText>
              </HStack>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <HStack alignItems='center'>
              <FontAwesome name="photo" size={16} color="black" />
              <ActionsheetItemText>Foto</ActionsheetItemText>
              </HStack>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <HStack alignItems='center'>
              <Foundation name="play-video" size={20} color="black" />
              <ActionsheetItemText>Video</ActionsheetItemText>
              </HStack>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <HStack alignItems='center'>
              <FontAwesome5 name="tasks" size={18} color="black" />
              <ActionsheetItemText>Task</ActionsheetItemText>
              </HStack>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <HStack>
              <MaterialIcons name="attach-money" size={20} color="black" />
              <ActionsheetItemText>Balanço</ActionsheetItemText>
              </HStack>
            </ActionsheetItem>

          </ActionsheetContent>
        </Actionsheet>
      </>
    )
}