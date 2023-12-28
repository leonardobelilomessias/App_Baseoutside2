import { AxiosApi } from '@/api';
import { router } from 'expo-router';
import { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from 'react'
import { ContextAgentProsp, FormatResponseAuthenticate, FullAgentDTO, HandleSignProps } from './context.dtos/Authenticate.dto';
import { useProtectedRoute } from './useProtectedRoute';
import { storageRemoveUser, storageUserGet, storageUserSave } from '@/storage/storageUser';
import { storageAuthTokenRemove, storageAuthTokenSave, storageTokenGet } from '@/storage/storageToken';


async function fetchAgentById({agent_id}:{agent_id:string}):Promise<FullAgentDTO>{
    try{
      const result = await AxiosApi.get(`/agent/fetchAgentProfile`,{ params: { id_agent: agent_id} })
      const agent = result.data  as FullAgentDTO
      return agent
    }catch(e){
      console.log(' fetch agentPRfile')
      throw e
    }
}

export const AgentContext = createContext({} as ContextAgentProsp)

export function AgentProvider({ children }: { children: ReactNode }){
const [loading,setLoading]= useState(false)
const [test,setTest]= useState(false)
const [tokenAgent,setTokenAgent] = useState('')
const [dataAgent, setDataAgent] = useState({} as FullAgentDTO)
const [dataLogin, setDataLogin] = useState({} as FormatResponseAuthenticate)
async function handleSign({ email, password }: HandleSignProps) {
    try{
    
        const result = await AxiosApi.post('/sessions',{email, password})
        const {token,agent} = result.data as FormatResponseAuthenticate
        setTokenAgent(token)
        const {agent_id} =  agent
        //handleDataAgent.setToken(token)

      const loggedAgent :FullAgentDTO  = await fetchAgentById({agent_id})
      
      if(token && loggedAgent){

       setLoading(true)
       setDataAgent(loggedAgent )
        try{
          await storageUserSave(loggedAgent)
          await storageAuthTokenSave(token)
          AxiosApi.defaults.headers.common.Authorization = `Barer ${token}`
          setDataAgent(loggedAgent as FullAgentDTO)
        }

        catch(error){
          
          throw error
        }finally{
          setLoading(false)
        }
       
    }
    return {agent_id,token}
    }catch(error){
      setLoading(false)
      throw error
    }
  }
  /**handle logout cleaning all data agent to redirect to signr */
  async function handleLogout(){
    await storageAuthTokenRemove()
    await storageRemoveUser()
    setDataAgent({} as FullAgentDTO)
    setTokenAgent('')
  }
  
  /* fetch data at storage when open the app  */
  async function fetchData() {
    setLoading(true)
    try{
      const agent = await storageUserGet()
      const token = await storageTokenGet()
      if(agent&& token){
        setDataAgent(agent)
        setTokenAgent(token)
        AxiosApi.defaults.headers.common.Authorization = `Barer ${token}`
      }
    }catch(error){
      throw error
    }finally{
      setLoading(false)
    }
  }

  /*load data */
  useEffect(() => {
    fetchData()
  }, [])
useEffect(()=>{
  
},[])
useProtectedRoute({token:tokenAgent,agent_id:dataAgent?.id})

    return(
        <AgentContext.Provider value={{handleLogout, handleSign,dataAgent,loading,test,setTest,tokenAgent,setTokenAgent }}>
          {children}
        </AgentContext.Provider>
    )
}

export const useDataAgent = () => useContext(AgentContext)
export function AgentDataProvider({ children }: { children: ReactNode }) {
  const {dataAgent,tokenAgent,test} = useDataAgent()


    return (
      <AgentProvider>
        {children}
      </AgentProvider>
    )
  }
  