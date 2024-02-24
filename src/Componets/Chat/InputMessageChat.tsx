import { fakeApi } from "@/api/fakeApi"
import { useDataAgent } from "@/context/UserContext"
import { DataMessagesType } from "@/types/ComponetsTypes/chatTypes"
import { Box,Input, InputField, Pressable, Text } from "@gluestack-ui/themed"
import { useState } from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config"


type InputType={
    isActive: boolean,
    setChatMessages:([]:any)=>void
    messageToInactive?:string
    messages :DataMessagesType[]
}

export function InputMessageChat(dataInput:InputType){
    const {dataAgent} = useDataAgent()
    const [textInput,setTextInput] = useState("")
    const showMessageToInactive =  !dataInput.messageToInactive?"Apenas Adminitradores podem enviar mensagens no chat":dataInput.messageToInactive
    function handleSubmit(){
        if(!textInput) return
        const messagetosend = {id:Math.random()*Math.random(),send_to_id:"02",send_by_id:dataAgent.id,userName:'eu',text:textInput, time:new Date(),viewed:false}
        fakeApi.post("/chatMessages",messagetosend).then((response)=>{
            dataInput.setChatMessages(()=>[...dataInput.messages,response.data])
            setTextInput("")
        }).catch(()=>{
            alert("Houve um erro")
        })
    }
    return(
        <>
            {
                !dataInput.isActive?
                <Box p={12} bg="$green100" bottom={0} width={'$full'}  >
                    <Text color="$green800" fontWeight="$medium" size="xs" textAlign="center">
                        {showMessageToInactive}
                    </Text>
                </Box>
                :
                <Box bg="white" bottom={0} width={'$full'}  >
                    <Input  marginHorizontal={4} marginVertical={4}  >
                        <InputField onChangeText={(text)=>{setTextInput(text)}} onSubmitEditing={handleSubmit} value={textInput} placeholder="Enviar mensagem" fontSize={'$sm'}/>
                        <Pressable justifyContent="center"  paddingHorizontal={8} onPress={()=>{handleSubmit()}}>
                            <MaterialCommunityIcons name="send-circle-outline" size={34} color={extendedConfig.tokens.colors.green400} />
                        </Pressable>
                    </Input>
                </Box>
            }
        </>
    )
}

