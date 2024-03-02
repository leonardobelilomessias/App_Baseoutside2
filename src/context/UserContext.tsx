import { AxiosApi } from '@/api';
import { router } from 'expo-router';
import { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from 'react'
import { ContextAgentProsp, FormatResponseAuthenticate, FullAgentDTO, HandleSignProps } from './context.dtos/Authenticate.dto';
import { useProtectedRoute } from './useProtectedRoute';
import { storageRemoveUser, storageUserGet, storageUserSave } from '@/storage/storageUser';
import { storageAuthTokenRemove, storageAuthTokenSave, storageTokenGet } from '@/storage/storageToken';

export const AgentContext = createContext({} as ContextAgentProsp)

export function AgentProvider({ children }: { children: ReactNode }){
const [loading,setLoading]= useState(false)
const [test,setTest]= useState(false)
const [tokenAgent,setTokenAgent] = useState('')
const [dataAgent, setDataAgent] = useState({} as FullAgentDTO)
const [dataLogin, setDataLogin] = useState({} as FormatResponseAuthenticate)

async function handleSign({ email, password }: HandleSignProps) {
  try{
      setLoading(true)
      const result = await AxiosApi.post('/sessions',{email, password})
      const {token,agent} = result.data as FormatResponseAuthenticate
      const {agent_id} =  agent
      const loggedAgent :FullAgentDTO  = await fetchAgentById({agent_id})
      
      if(token && loggedAgent){
        try{
          await storageUserSave(loggedAgent)
          await storageAuthTokenSave(token)
          AxiosApi.defaults.headers.common.Authorization = `Barer ${token}`
          setDataAgent(loggedAgent as FullAgentDTO)
          setTokenAgent(token)
        }
        catch(error){ 
          throw error
        }finally{
        }
       
      }
      return {agent_id,token}
    }catch(error){
      throw error
    }
    finally{
      setLoading(false)
    }
  }
  /**handle logout cleaning all data agent to redirect to signr */
  async function handleLogout(){
    setLoading(true)
    await storageAuthTokenRemove()
    await storageRemoveUser()
    setDataAgent({} as FullAgentDTO)
    setTokenAgent('')
    setLoading(false)
  }
  
  /* fetch data at storage when open the app  */
  async function fetchData() {
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
    return(
        <AgentContext.Provider value={{handleLogout, handleSign:handleSign,dataAgent,loading,test,setTest,tokenAgent,setTokenAgent }}>
          {children}
        </AgentContext.Provider>
    )
}

export const useDataAgent = () => useContext(AgentContext)
export function AgentDataProvider({ children }: { children: ReactNode }) {

    return (
      <AgentProvider>
        {children}
      </AgentProvider>
    )
  }
  
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
