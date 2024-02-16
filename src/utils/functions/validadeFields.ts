import { linkNotFoundImageAvatar } from "../aplicationRouterLinks";
import { baseURL } from "../params";

function formatLinkAvatarImage(link:string){
    if (link ===null|| link === undefined) return baseURL+"/"+linkNotFoundImageAvatar
    return baseURL+"/"+link
}
export{formatLinkAvatarImage}