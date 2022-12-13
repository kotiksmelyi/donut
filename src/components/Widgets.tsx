import { CardText } from "./cardText";
import { ProgressBar } from "./progressBar";
import { Qrs } from "./qrs";

export function Widgets() {
    return (
        <div id='widg' className='flex flex-col h-screen items-center'>
            <h1 className='text-white text-5xl w-2/4 font-bold text-center mt-16'>Кастомные виджеты</h1>

            <div className='flex w-screen grow justify-around pt-12 mb-24 overflow-clip'>

                <div className='flex flex-col bg-black w-1/4 rounded-xl items-center'>
                    <Qrs />
                    <CardText header='QR-код для удобных донатов' text='Описание' />
                </div>

                <div className='flex flex-col bg-black w-1/4 rounded-xl items-center'>
                    <div className='flex flex-col mt-12 w-1/2 items-center gap-5'>
                        <ProgressBar bgcolor='#ff007a' progresscolor='#ffffff' header='На печеньки' />
                        <ProgressBar bgcolor='linear-gradient(220deg, rgba(255,222,0,1) 13%, rgba(255,0,108,1) 100%)' progresscolor='#ff006c' header='На компьютер' />
                        <ProgressBar bgcolor='radial-gradient(circle, rgba(35,238,28,1) 0%, rgba(255,255,255,1) 100%)' progresscolor='linear-gradient(220deg, rgba(249,255,0,1) 0%, rgba(0,0,0,1) 100%)' header='На развитие стрима' />
                    </div>
                    <CardText header='Полоски прогресса' text='Описание' />
                </div>

                <div className='flex flex-col bg-black w-1/4 rounded-xl items-center'>
                    <img src="./icons/nots.svg" className="mt-24" />
                    <CardText header='Оповещения на любой вкус' text='Описание' />
                </div>

            </div>

        </div>)
}