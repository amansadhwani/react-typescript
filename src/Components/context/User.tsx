import { useContext } from "react"

import { UserContext } from "./UserContext"



 const UserC = () =>{
    const userContext = useContext(UserContext)
    const handleLogin = () =>{
       if(userContext){
           userContext.setUser({
               name:"aman",
               email:"aaa@gmail.com"
           })
       }
    }
    const handleLogout = () =>{
        if(userContext){
            userContext.setUser(null)
        } 
    }
   
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Log out</button>
           <h2>user name is {userContext?.user?.name}</h2>
           <h2>user name is {userContext?.user?.email}</h2>
        </div>
    )
}

export default UserC