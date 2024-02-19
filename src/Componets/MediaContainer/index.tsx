import {VStack } from "@gluestack-ui/themed";
import { AudioList } from "./AudioList";
import { FilesList } from "./FilesList";
import { PhotoList } from "./PhotosList";

export function MediaContainer(){
    return(
        <VStack>
            <AudioList/>
            <PhotoList/>
            <FilesList/>
        </VStack>
    )
}
