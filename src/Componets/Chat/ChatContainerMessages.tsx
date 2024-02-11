import { VStack } from "@gluestack-ui/themed";
import { ReactNode } from "react";


export function ChatContainerMessages({ children }: { children?: ReactNode }){
    return(
        <VStack flex={1} bg="white">
            {children}
        </VStack>
    )
}