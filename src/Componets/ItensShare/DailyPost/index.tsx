import { useState } from "react"
import { ShareDailyPost } from "./ShareDailyPost"
import { ScrollView } from "react-native"
import { CreatingDailyPost } from "./CreatingDailyPost"
import { SuccessCreateDailyPost } from "./SuccessCreateDailyPost"

export function DailyPost({status}:{status:"create" | "creating"| "error" | "created"}){
    const [loadPublisher,setLoadPublisher] = useState(false)
    const [statusPublication,setStatusPublication] = useState(status)
    const [createdPublication, setCreatedPublication] = useState(false)
    function publisher(){
        console.log("publicando", statusPublication)
        setLoadPublisher(true)
        setStatusPublication("creating")
        setCreatedPublication(true)
        setTimeout(() => {
            setStatusPublication("created")
          setLoadPublisher(false)
        }, 1500);
      }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
                {  (statusPublication =="create")  && <ShareDailyPost publisher={publisher}/>   }
                { (statusPublication==="creating" && loadPublisher ===true) && <CreatingDailyPost/> }
                { (statusPublication==="created"&& loadPublisher===false) &&<SuccessCreateDailyPost />}
        </ScrollView>
    )
}

