import { Donation } from "../model"

interface DonutTempProps {
    donut: Donation
}

export function DonutTemp({donut}: DonutTempProps) {
    return (
        
                    <div className="border-solid border-b-2 border-main">
                        <h5 className="text-third ml-5 p-5">сегодня 11.11.22</h5>

                    <div key={donut.id} className="flex justify-between border-solid border-main">
                        <div className="mt-5 ml-10 w-2/5">
                            <h1 className="text-white text-xl font-bold mb-5">{donut.author_name}</h1>
                            <p className="text-white text-sm">{donut.message}</p>
                            <p className="text-red-400 mt-10 font-bold pb-5">Media: <span className="text-white text-sm font-normal">{donut.attachment_url}</span></p>
                        </div>

                        <div className="flex mt-10 mr-16 text-orange text-3xl font-bold">
                            <h3>+ </h3>
                            <h3> {donut.amount}</h3>
                            <p> {donut.currency}</p>
                        </div>
                    </div>
                </div>
                

    )
}