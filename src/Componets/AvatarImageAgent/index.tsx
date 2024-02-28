import { Avatar, AvatarImage } from "@gluestack-ui/themed";
import {Feather} from "@expo/vector-icons"
import { baseURL } from "@/utils/params";

export function AvatarImageAgent({image_profile,sizeIcon, sizeAvatar}:{image_profile:string | null |undefined, sizeIcon:number, sizeAvatar?:"sm"|"xl"|"xs"|"lg"|"2xl"|"md"}){
const formatUrlImage = `${baseURL}/Agent/${image_profile}`
const formatSizeAvatar = sizeAvatar?sizeAvatar:"md"
return(
    <Avatar size={formatSizeAvatar} bgColor="$gray100" alignContent="center" justifyContent="center" alignItems="center">
        <Feather name="user" size={sizeIcon}/>
        { image_profile && <AvatarImage source={{uri:formatUrlImage}}/>}
    </Avatar>
)
}