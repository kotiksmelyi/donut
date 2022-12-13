import axios from "axios"

import { useForm } from 'react-hook-form'
import { Route, Routes, useNavigate } from "react-router-dom"
import { MainPage } from "../pages/mainpage"

interface IUser {
    email: string,
    password: string
}


export function SignModal(modal: any, setModal: any) {
    const { register, handleSubmit } = useForm()
    let navigate = useNavigate();

    return (
            <div className="h-screen w-screen fixed bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-second rounded-lg h-2/3 w-1/2 flex flex-col items-center justify-around relative">
                    <h1 className="text-white text-3xl font-bold">Войти</h1>
                    <form onSubmit={handleSubmit((data) => {
                    axios.post('http://78.140.241.21:8300/auth/jwt/create/', data)
                    .then(function (response) {
                        console.log(response);
                        navigate('/mainpage')

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    })} className="flex flex-col h-2/3 w-full items-center justify-around">
                    <input {...register('email')} className="rounded-full p-3 w-1/3" placeholder="эл. почта"></input>
                    <input type='password' {...register('password')} className="rounded-full p-3 w-1/3" placeholder="пароль"></input>
                    <button className="text-white font-bold p-5 w-1/4 bg-orange rounded-full" type="submit">Войти</button>
                    </form>
                    <p className="text-white">Зарегистрироваться</p>
                </div>
                <Routes>
                <Route path='/mainpage' element={<MainPage />}></Route>
                </Routes>
            </div>
            
    )
}