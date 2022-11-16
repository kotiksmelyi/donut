
import axios from "axios"
import { useState, useEffect } from "react"
import { Pays } from "../components/pays"
import { token } from "../components/token"
import { User } from "../usermodel"

export function Finances () {

    const [users, setUsers] = useState<User>(Object)
    async function UserData() {
        const response = await axios.get<User>('http://78.140.241.21:8300/user/current-user', { headers: { "Authorization": `Bearer ${token}` } })
        setUsers(response.data)
    }

    useEffect(() => {
        UserData()
    }, [])
    
    return(
        <div className="flex min-h-screen justify-between">

            <div className="flex justify-around w-2/5 h-72 ml-10 mt-12 rounded-lg bg-second">

                <div className="flex flex-col mt-16 ml-5 items-start">
                <h1 className="text-white text-xl">Баланс</h1>
                <h3 className="text-orange text-4xl font-bold">{users.balance}</h3>
                </div>

                <div className="mt-5">
                    <ul>
                    <h2 className="text-white text-xl list-none p-2">Вывод средств</h2>
                    {Pays.map((pay, index) => 
                    (<li
                    className="flex gap-2 p-2 hover:bg-orange rounded-full cursor-pointer" 
                    key={index}>
                        <img src={`./icons/${pay.src}.svg`} />
                        <h3 className="text-white text-sm">{pay.title}</h3>
                        </li>))}
                    </ul>
                </div>
            </div>
        </div>

    
    )
}