import { useState } from "react"
import { Aside } from "../components/aside"
import { Navbar } from "../components/Navbar"

export function Widg() {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex">
            <Aside />
            <div className="flex flex-col min-h-screen flex-grow">
                <Navbar />
                <div className="flex flex-col items-center mt-10">
                    <button className="text-white text-2xl font-bold border-orange border-4 rounded-full p-3 hover:bg-orange"
                        onClick={(event: React.MouseEvent<HTMLElement>) => { setOpen(!open) }}> Сгенерировать qr-код</button>
                    {open &&
                        <div className="flex mt-10 justify-center">
                            <img src="./icons/qr-code.svg" className="w-1/5" />
                            <p className="text-white font-bold ml-10">http://localhost:3000/</p>
                        </div>}
                </div>
            </div>
        </div>
    )
}