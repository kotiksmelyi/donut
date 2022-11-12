import axios from "axios"
import { useEffect, useState } from "react"
import { DonutTemp } from "../components/donutTemp"
import { token } from "../components/token"
import { Donation } from "../model"


export function History() {
    const [donuts, setDonuts] = useState<Donation[]>([])
    async function fetchDonuts() {
        const response = await axios.get<Donation[]>('http://78.140.241.21:8300/donation/received-donations', { headers: { "Authorization": `Bearer ${token}` } })
        setDonuts(response.data)
    }
    
    useEffect(() => {
        fetchDonuts()
    }, [])

    return (
        <div className="flex flex-col items-center mt-10">
            <div>
                <h2 className="text-white text-xl text-center">История донатов</h2>
                <div className="flex justify-between gap-10 mt-10">
                    <div>
                        <input placeholder="найти донат" className="bg-input text-main p-1 pl-3 border-none rounded-full w-96"></input>
                        <button className="bg-orange rounded-full border-4 border-main p-1 w-24 -ml-5">Найти</button>
                    </div>
                    <div>
                        <select className="p-1 bg-input rounded-md">
                            <option>За всё время</option>
                        </select>
                    </div>
                </div>
            </div>



            <div className="flex flex-col h-screen w-2/3 bg-second rounded-lg mt-5">
                {donuts.map(donut => <DonutTemp donut={donut} key={donut.id} />)}
            </div>
        </div>






    )
}