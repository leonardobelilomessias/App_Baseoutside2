import {  VStack } from "@gluestack-ui/themed";
import { Teams } from "@/Componets/Groups/Teams";
import { AdvicesGroups } from "@/Componets/Groups/AdvicesGroups";
import { PrivateGroups } from "@/Componets/Groups/PrivateGroups";
import { extendedConfig } from "@/theme/config";
export function Groups(){

    return(
        <VStack padding={extendedConfig.defaulPaddingToCompanents} >
            <Teams/>
            <AdvicesGroups/>
            <PrivateGroups/>
        </VStack>
    )
}
