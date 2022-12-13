import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export function Charty () {
    const data = [
        {day: '14.09', cash: '2000'},
        {day: '15.09', cash: '1000'},
        {day: '16.09', cash: '1900'},
        {day: '17.09', cash: '100'},
        {day: '18.09', cash: '9000'},
        {day: '19.09', cash: '200'},
        {day: '20.09', cash: '1200'},
        {day: '21.09', cash: '400'},
    ]
    return(
        <LineChart data={data} width={600} height={400}>
            <Line type='monotone' dataKey='cash' stroke="#FFFFFF" strokeWidth={3}></Line>
            <CartesianGrid stroke='#FFFFFF' strokeOpacity={0.2} strokeDasharray='3 3'></CartesianGrid>
            <XAxis dataKey='day' stroke='#ffffff' strokeOpacity={1}></XAxis>
            <YAxis stroke="#ffffff" strokeOpacity={1}></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
    )
}