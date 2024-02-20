import {VStack } from "@gluestack-ui/themed";
import { AudioList } from "./AudioList";
import { FilesList } from "./FilesList";
import { PhotoList } from "./PhotosList";
import { extendedConfig } from "@/theme/config";

export function MediaContainer(){
    return(
        <VStack padding={extendedConfig.defaulPaddingToCompanents}>
            <AudioList/>
            <PhotoList/>
            <FilesList/>
        </VStack>
    )
}
