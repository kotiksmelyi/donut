import { useState, useEffect, useRef } from "react"

interface IProgressBar {
    bgcolor: string,
    progresscolor: string,
    header: string

}

export function ProgressBar({ bgcolor, progresscolor, header }: IProgressBar) {
    const [completed, setCompleted] = useState(25)

    useEffect(() => {
        if (completed < 100 ) {
            setTimeout(() =>
                setCompleted(completed + 1), 800
            ) 
        } else {
            setCompleted(25)
        }

    }, [completed])

    return (
        <div className="flex flex-col w-full items-center">
        <h1 className="font-bold text-white text-lg">{header}</h1>
        <div className='w-full rounded-full' style={{
            background: `${bgcolor}`
        }} >
            <div style={{
                display: 'flex',
                justifyContent: 'end',
                transition: 'width 1s ease-in-out',
                background: `${progresscolor}`,
                width: `${completed}%`,
                padding: '5%',
            }}><p className="text-sm font-bold">{completed}%</p></div>
        </div>
        </div>
    )
}