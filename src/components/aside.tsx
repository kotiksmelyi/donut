import { useState } from "react"
import { Menus } from "./Menus"
import { Routes, Route, Link, } from 'react-router-dom'

export function Aside() {
    const [open, setOpen] = useState(true)

    return (
        <div className={`${open ? 'w-1/5' : 'w-20'} p-5 pt-3 duration-300 h-max-content min-h-screen bg-second relative`}>

            <img src="./icons/arrow.png"
                className={`absolute cursor-pointer -right-3 top-14 w-6 ${!open && 'rotate-180'}`}
                onClick={() => setOpen(!open)} />

            <div className='flex gap-x-4 items-center pl-2'>
                <img src="./icons/logo.jpg" className={`cursor-pointer duration-300 w-7`} />
                <h2
                    className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"
                        }`}>LOGO</h2>
            </div>


            <div className='pt-8 pl-2'>
                {Menus.map((menu, index) => (
                    <Link to={`${menu.path}`} key={index} className='text-white text-base flex items-center gap-x-4 cursor-pointer mt-4 p-2 hover:bg-orange rounded-full'>
                            <img src={`./icons/${menu.src}.png`} />
                            <span className={`duration-300 ${!open && "scale-0"
                                }`}>{menu.title}</span>
                        </Link>
                ))}
            </div>

            
        </div>
    )
}

