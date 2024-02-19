import {  VStack } from "@gluestack-ui/themed";
import { Teams } from "@/Componets/Groups/Teams";
import { AdvicesGroups } from "@/Componets/Groups/AdvicesGroups";
import { PrivateGroups } from "@/Componets/Groups/PrivateGroups";
export function Groups(){

    return(
        <VStack >
            <Teams/>
            <AdvicesGroups/>
            <PrivateGroups/>
        </VStack>
    )
}
