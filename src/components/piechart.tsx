import { PieChart, Pie, Tooltip } from "recharts";

export function Pies() {
    const data01 = [
        { name: 'Цель', value: 9000 },
        { name: 'Собрано', value: 300 },
];

    return (
        <PieChart width={400} height={200}>
            <Pie dataKey="value" data={data01} outerRadius={80} fill="#FF7F50" strokeWidth={3} label/>
            <Tooltip />
        </PieChart>
    )
}