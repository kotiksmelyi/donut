interface iCardText {
    header: string,
    text: string
}

export function CardText({header, text}: iCardText) {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-white font-bold mt-12 text-xl">{header}</h1>
            <p className="text-white mt-5">{text}</p>
        </div>
    )
}