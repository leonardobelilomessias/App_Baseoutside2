import { VStack } from "@gluestack-ui/themed";
import { ReactElement, ReactNode } from "react";

export function HorizontalPaddingContainer({children,...rest}: { children: ReactNode,rest:ReactElement}){
    return(
        <VStack padding={8} {...rest} >
            {children}
        </VStack>
    )
}