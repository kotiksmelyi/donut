import { useEffect, useState } from "react"
import { SignModal } from "./signModal"

export function NavBarLand () {
    const [modal, setModal] = useState(false)
    function modalHandler () {
        setModal(!modal)
    }

    // useEffect (() => {
    //     async function postData() {
    //         await const response = ('http://78.140.241.21:8300/auth/jwt/create/')
    //     }
    // })

    return(
        <div>
            <nav className='flex justify-end h-12 bg-second w-screen absolute'>
                <h1 className='text-white font-bold text-2xl m-auto ml-10'>ALFA STREAM</h1>
                <ul className='list-none flex gap-20 m-auto text-white pr-10'>
                    <li><a href="#price">Тариф</a></li>
                    <li><a href="#widg">Виджеты</a></li>
                    <li>Гайд</li>
                    <li className='cursor-pointer' onClick={modalHandler}>Вход</li>
                </ul>
            </nav>

            {modal &&
            <>
            <SignModal modal={modal} setModal={setModal}/>
            <button className="absolute cursor-pointer right-5 top-3 text-center w-10 h-10 font-bold bg-white rounded-full" onClick={modalHandler}>x</button>
            </>}

        </div>
    )
}