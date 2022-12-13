import axios from "axios"
import { useState, useEffect } from "react"
import { User } from "../usermodel"
import { token } from "./token"
import { UserInfo } from "./userInfo"

export function Navbar() {

    const [users, setUsers] = useState<User>(Object)
    async function UserData() {
        const response = await axios.get<User>('http://78.140.241.21:8300/user/current-user', { headers: { "Authorization": `Bearer ${token}` } })
        setUsers(response.data)
    }

    useEffect(() => {
        UserData()
    }, [])


    return (
        <div className="navbar h-14">
            <UserInfo {...users} />
        </div>
    )
}