import userEvent from "@testing-library/user-event"
import axios from "axios"
import { useEffect, useState } from "react"
import { CartesianGrid, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Aside } from "../components/aside"
import { Charty } from "../components/chart"
import { Navbar } from "../components/Navbar"
import { Pies } from "../components/piechart"
import { token } from "../components/token"
import { User } from "../usermodel"
import { MainPage } from "./mainpage"

export function Charts () {
    const [users, setUsers] = useState<User>(Object)
    async function UserData() {
        const response = await axios.get<User>('http://78.140.241.21:8300/user/current-user', { headers: { "Authorization": `Bearer ${token}` } })
        setUsers(response.data)
    }
    useEffect(() => {
        UserData()
    }, []) 
    
    return(
        <div className="flex">
            <Aside /> 
            <div className="flex flex-col min-h-screen flex-grow">
            <Navbar />
            <div className=" mt-10 ml-10 flex flex-col">
            <h3 className="text-white text-3xl">Привет, {users.username}!</h3>
            <p className="text-white">Статистика за <span>/здесь будет выводиться дата/</span></p>
            </div>

            <div className="flex justify-between ml-10 mt-10 gap-6">
                <div className="bg-second h-full flex flex-col w-min p-10 rounded-xl">
                    <h2 className="text-white text-xl mb-10">Динамика</h2>
                    <Charty />
                </div>
                <div className="grow mr-5">
                    <div className="flex justify-between bg-second rounded-lg p-6">
                        <h2 className="text-white">Платных подписок: <span className="font-bold">18</span></h2>
                        <p className="text-red-400 text-lg font-bold">14%</p>
                    </div>
                    <div className="flex justify-between bg-second rounded-lg p-6 mt-2">
                        <h2 className="text-white">Собрано за период: <span className="font-bold">3535</span></h2>
                        <p className="text-red-400 text-lg font-bold">14%</p>
                    </div>
                    <div className="flex flex-col items-center bg-second rounded-lg p-10 mt-2">
                        <h2 className="text-white mb-10">Цель сбора: <span className="text-orange">На вкусняшки</span></h2>
                        <Pies />
                    </div>
                </div>
            </div>
            <div className="flex">
                    <div className="bg-second rounded-lg">
                        <h2>Топ донатеров</h2>
                        <div className="flex justify-between">
                            <ol>
                                <li>Zloy_Zaya</li>
                                <li>wsCringe</li>
                                <li>Arthas2008</li>
                                <li>Kripo4ek</li>
                                <li>Wolf_The_Loner</li>
                                <li>Pudge</li>
                                <li>mur-mur:*</li>
                                <li>fanat</li>
                                <li>open_mind</li>
                                <li>Eclipse</li>
                            </ol>
                            <ol>
                                <li>6904 p.</li>
                                <li>6700 p.</li>
                                <li>5800 p.</li>
                                <li>3560 p.</li>
                                <li>3000 p.</li>
                                <li>3000 p.</li>
                                <li>2850 p.</li>
                                <li>2500 p.</li>
                                <li>2200 p.</li>
                                <li>1400 p.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="bg-second rounded-lg">
                            <h2>Text</h2>
                            <h1>9339</h1>
                    </div>
                </div>
        </div>
        </div>
    )
}