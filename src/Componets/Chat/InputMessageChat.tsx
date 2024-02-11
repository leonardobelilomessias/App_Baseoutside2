import { Box, Input, InputField, Text } from "@gluestack-ui/themed"


type InputType={
    isActive: boolean
    messageToInactive?:string
}

export function InputMessageChat(dataInput:InputType){
    const showMessageToInactive =  !dataInput.messageToInactive?"Apenas Adminitradores podem enviar mensagens no chat":dataInput.messageToInactive
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
                    <Input marginHorizontal={4} marginVertical={4}>
                        <InputField placeholder="enviar mensagem" fontSize={'$sm'}/>
                    </Input>
                </Box>
            }
        </>
    )
}