import { Avatar, AvatarImage, Box, HStack, Input, InputField, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";
import { useState } from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import ImageComment from '@/assets/develop.jpg'
import { FlatList } from "react-native-gesture-handler";

const fakecoments =[1,2,3,4,5,6]
export function BottonItemFeed(){
    const [like,setLike] = useState(false)
    const [mark,setMark] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <>
            <HStack space='xl' p={4} >
                <Pressable  onPress={()=>setLike(!like)}>
                    {
                        !!like? <FontAwesome name="heart" size={24} color={extendedConfig.tokens.colors.green300}/>:
                        <FontAwesome name="heart-o" size={24} color={extendedConfig.tokens.colors.green300}/>
                    }
                    
                </Pressable>
                <Pressable onPress={()=>{setModalVisible(!modalVisible)}}>
                    <FontAwesome5 name="comment-alt" size={22} color={extendedConfig.tokens.colors.green300} />
                </Pressable>

                <Pressable  onPress={()=>{setMark(!mark)}}>
                    {
                        !!mark? <FontAwesome name="bookmark" size={24} color={extendedConfig.tokens.colors.green300}/>:
                        <FontAwesome name="bookmark-o" size={24} color={extendedConfig.tokens.colors.green300}/>
                    }
                    
                </Pressable>
                <App modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </HStack>
            <Pressable onPress={()=>setModalVisible(!modalVisible)}>
                <Text size="sm" color="$green400" fontWeight="$normal"> Ver todos os 20.157 comentarios</Text>
            </Pressable>
        </>
    )

}
function Commentary(){
    return(
        <HStack space="sm" p={10}>
            <Avatar size="sm">
                <AvatarImage  source={ImageComment}></AvatarImage>
            </Avatar>
            <VStack>
                <Text fontWeight="$medium">Mike Jerry</Text>
                <Text size="sm"  paddingRight={24}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quam eveniet et fugit perferendis quod sed! Qui doloremque a, quam dicta, voluptates distinctio, quos voluptatibus quae illum similique eligendi sint.</Text>
            </VStack>
        </HStack>
    )
}
const App = ({modalVisible,setModalVisible}:{modalVisible:boolean,setModalVisible:(modalVisible:boolean)=>void}) => {
    
    return (
      <View >
        <Modal 
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
            <Pressable flex={1} onPress={()=>{setModalVisible(!modalVisible)}}>

            <VStack flex={1} bg="$white" opacity={0.7} >

            </VStack>
            </Pressable>

            <VStack width={'100%'}  borderTopStartRadius={50} borderTopEndRadius={50} borderWidth={1} borderColor="$green100" hardShadow="1"  height={'80%'} position="absolute" bottom={0}  bg="$white" padding={20}>
                <Text textAlign="center" fontWeight="$bold" color="$green400" p={16}>Comentários</Text>

                <FlatList contentContainerStyle={{paddingBottom:46}} showsVerticalScrollIndicator={false} data={fakecoments} renderItem={(fakecoments)=>(
                    <Commentary key={fakecoments.item}/>
                )}/>
                <Box bottom={0} bg="$white" width={'100%'} alignSelf="center" p={8} position="absolute" >
                    <Input >
                    <InputField placeholder=" Adicione um comentário." fontSize={'$sm'}/>
                    </Input>
                </Box>
                
            </VStack>

            
        </Modal>

      </View>
    );
  };
  
  