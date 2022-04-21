import { useState } from "react"

type AuthUser ={
    name:string
    email:string
}

export const User = () =>{
    const handleLogin = () =>{
        //setIsLoggedIn(true)
        setUser({
            name:"aman",
            email:"aman@epam.com"
        })
    }
    const handleLogout = () =>{
        setUser(null)
    }
    //const [user,setUser]=useState<null | AuthUser>(null)
    const [user,setUser]=useState<null | AuthUser>({} as AuthUser) // type assertion instead of null
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Log out</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}