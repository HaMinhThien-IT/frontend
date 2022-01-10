import { createContext, ReactNode, useState } from "react";

interface nameContextDefault {
    name: string,
    user_id:number
    onSetUserName: (name: string) => void,
    onSetUser_id: (user_id: number) => void
    
}

const nameDefault:nameContextDefault= {
    name: 'null',
    user_id:0,  
    onSetUserName: () => {},
    onSetUser_id: () => {}
}

interface userContextProvider {
    children: ReactNode
}


export const userContext = createContext<nameContextDefault>(nameDefault)

export default function Context({ children }: userContextProvider) {
    const [name, setName] = useState(nameDefault.name)
    const onSetUserName = (name: string) => {
        setName(name)
    }
    const [user_id,setUser_id] = useState(nameDefault.user_id)
    const  onSetUser_id = (user_id:number) =>{
        setUser_id(user_id)
    }
    const data = {name,onSetUserName,user_id,onSetUser_id}
    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}
