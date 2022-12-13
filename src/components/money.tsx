import { useEffect, useRef, useState } from "react"

export function Money() {
    const [money, setMoney] = useState(0)
    useEffect (() => {
        setTimeout(() => {
            setMoney((Math.floor(Math.random() * (9000 - 1000 + 1))))
        }, 2000)
    }, [money])
    return(
        <div id='price' className='flex items-center justify-between h-screen overflow-clip'>
            <div className='flex flex-col pl-32'>
            <h1 className='text-white text-5xl w-2/4 font-bold'>Низкая комиссия на вывод средств</h1>
            <p className='text-white mt-10'>Очень классное описание условий</p>
            <button className='w-2/5 p-5 bg-white mt-5 rounded-xl font-bold text-xl hover:bg-orange hover:duration-300'>А ещё у нас есть виджеты!</button>
            </div>
        <div className='flex flex-col justify-center items-center bg-gradient-to-r from-orange to-red-400 w-1/3 h-1/2 rounded-lg -rotate-12 -mr-20'>
            <h1 className='text-white text-5xl'>Баланс</h1>
            <h1 className='text-black text-7xl font-bold overflow-hidden'>{money} p.</h1>
        </div>
        </div>
    )
}