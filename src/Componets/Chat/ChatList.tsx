import { VStack } from "@gluestack-ui/themed";
import { ReactNode } from "react";

export function ChatList({children}:{children?:ReactNode}){
    return(
        <VStack bg="white" flex={1} padding={8}>
            {children}
        </VStack>
    )
}