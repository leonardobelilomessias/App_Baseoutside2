import { useLocalSearchParams } from "expo-router";
import { AxiosApi } from "@/api";
import { useEffect, useState } from "react";
import { useDataAgent } from "@/context/UserContext";
import PhotoPublicationScreen from "@/screens/PhotoPublicationScreen";
import { ErrorToLoadScreen } from "@/screens/ErrorToLoad";

export default function photoPublication(){
    const {dataAgent}  = useDataAgent()
    const [resultPublication,setResultPublication] = useState({} as PhotoPublicationType)
    const {publication_id,description,urlPhoto} = useLocalSearchParams();
    
    useEffect(()=>{
        fetchPublication()
    },[])
    async function fetchPublication(){
        const publication = await AxiosApi.get('/agent/fetchPublicationAgentById',{params:{publication_id:publication_id}})
        const data = publication.data as PhotoPublicationType
        setResultPublication(publication.data)

    }
    if(!publication_id || !urlPhoto || !description )return( <ErrorToLoadScreen/>)

    return(
        <PhotoPublicationScreen description={description as string} idPublication={"01"} urlPhoto={urlPhoto as string } userAvatar={dataAgent.image_profile as string} userName={dataAgent.name} />
    )
}

