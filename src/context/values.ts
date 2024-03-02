import React from "react";
import { FormatResponseAuthenticate, FullAgentDTO } from "./context.dtos/Authenticate.dto";

export function ValuesRoutes(){
    const [loading,setLoading]= React.useState(false)
    const [test,setTest]=  React.useState(false)
    const [tokenAgent,setTokenAgent] =  React.useState('')
    const [dataAgent, setDataAgent] =  React.useState({} as FullAgentDTO)
    const [dataLogin, setDataLogin] =  React.useState({} as FormatResponseAuthenticate)
    return{
        loading,setLoading,tokenAgent, setDataAgent,setTokenAgent, dataAgent,dataLogin, setDataLogin,test, setTest
    }
}