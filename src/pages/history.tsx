import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Aside } from "../components/aside"
import { DonutTemp } from "../components/donutTemp"
import { Navbar } from "../components/Navbar"
import { token } from "../components/token"
import { Donation } from "../model"

export function History() {
    const [newMessage, setNewMessage] = useState()
    const ws = useRef(null)

    useEffect(() => {
        // @ts-ignore
        ws.current = new WebSocket("ws://78.140.241.21:8300/ws/donations/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwMTYzMzc2LCJqdGkiOiI2ZTQ1YjRmNzMwOWI0ZjViYThhMjBmNjUxZjQ0YjRkNyIsInVzZXJfaWQiOjJ9.Fe5ocRRSEwtnxT7jMKRsEXsN_mzuy0lh_-HIn_hBixc");
    }, [ws]);

    useEffect(() => {
        if (!ws.current) return;
        // @ts-ignore
        ws.current.onmessage = e => {
            const message = JSON.parse(e.data);
            setNewMessage(message)
            fetchDonuts()
        };
    }, []);

    const [donuts, setDonuts] = useState<Donation[]>([])
    async function fetchDonuts() {
        const response = await axios.get<Donation[]>('http://78.140.241.21:8300/donation/received-donations', { headers: { "Authorization": `Bearer ${token}` } })
        setDonuts(response.data)
    }

    useEffect(() => {
        fetchDonuts()
    }, [])

    return (
        <div className="flex">
            <Aside />
            <div className="flex flex-col min-h-screen flex-grow">
                <Navbar />
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



                    <div className="flex flex-col h-screen w-2/3 bg-second rounded-lg mt-5 overflow-scroll">
                        {donuts.map(donut => <DonutTemp donut={donut} key={donut.id} />)}
                    </div>
                </div>
            </div>
        </div>





    )
}