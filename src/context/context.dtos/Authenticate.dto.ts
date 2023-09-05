
interface FullAgentDTO{
    
    id: string,
    email: string,
    password?: string,
    name:string,
    user_name: string,
    description: string,
    balance: string,
    is_active: boolean,
    level: number,
    image_profile?:string,
    vocation: string,
    created_at: string,
    state:number
    actions: [];
    interests: []
    missions: [];
    skills: [];
    tasks: [];
    owner_mission: []
    colab: []

}
interface FormatResponseAuthenticate {
    token: string
    agent: {
        name: string,
        email: string,
        agent_id:string
    },
    refresh_token: string
}
type AgentAutenticated={
    token:string,
    agent_id:string
    }
type ContextAgentProsp = {
      dataAgent:FullAgentDTO
      handleSign({ email, password }: HandleSignProps):Promise<AgentAutenticated > 
      loading:boolean;
      handleLogout:()=>void
      test:boolean
      setTest:(item:boolean)=>void
      tokenAgent:string
      setTokenAgent:(item:string)=>void
    }
type HandleSignProps = {
      email: string;
      password: string
    }

export{FormatResponseAuthenticate,FullAgentDTO,HandleSignProps,ContextAgentProsp,AgentAutenticated}