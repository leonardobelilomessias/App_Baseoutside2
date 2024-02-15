import { dailyPostExampleMock } from "@/mocks/agents/postsMocks";
import { DailyPostScreen } from "@/screens/DailyPostScreen";

export default function DailyPublication(){
    const {id,date,id_agent, isLiked,isSaved,text,title,user,amountComments} = dailyPostExampleMock
    return(
            <DailyPostScreen id={'id'}  date={date} amountComments={amountComments}user={user} isLiked={isLiked} isSaved={isSaved}text={text} title={title} />
    )
}