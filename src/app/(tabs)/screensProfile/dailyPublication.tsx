import { dailyPostExampleMock } from "@/mocks/agents/postsMocks";
import { DailyPostAgentScreen } from "@/screens/AgentScreens/PublicationsAgentScreens/Show/DailyPostAgentScreen";

export default function DailyPublication(){
    const {id,date,id_agent, isLiked,isSaved,text,title,user,amountComments} = dailyPostExampleMock
    return(
            <DailyPostAgentScreen id={'id'}  date={date} amountComments={amountComments}user={user} isLiked={isLiked} isSaved={isSaved}text={text} title={title} />
    )
}