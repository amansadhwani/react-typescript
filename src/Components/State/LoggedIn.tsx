import { useState } from "react"
import { User } from "./User"

export const LoggedIn = () =>{
    const handleLogin = () =>{
        setIsLoggedIn(true)
    }
    const handleLogout = () =>{
        setIsLoggedIn(false)
    }
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Log out</button>
            <div>User is {isLoggedIn ? 'logged in ':'logged out'}</div>
            <User/>
        </div>
    )
}