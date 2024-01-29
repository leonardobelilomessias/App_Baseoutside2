import { VStack, } from "@gluestack-ui/themed";
import React, { FC, ReactNode } from "react";
import { StyleSheet, StyleSheetProperties } from "react-native";
import { ViewProps } from "react-native";

export function VerticalPaddingContainer({children,...rest}: { children: ReactNode }){
    return(
        <VStack padding={8}{...rest}  flex={1}>
            {children}
        </VStack>
    )
}