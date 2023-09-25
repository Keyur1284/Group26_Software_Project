import { ResponsiveContainer, Cell, PieChart, PolarAngleAxis, PolarRadiusAxis, PolarGrid, Pie, Legend, Tooltip } from 'recharts'

const data01 = [
    {
        "name": "My Expense",
        "value": 200,
        fill: "#00A8E8"
    },
    {
        "name": "Team Expense",
        "value": 2340,
        fill: "#0000"
    }
];  

export const MyExpPie = () => {

    return (
        <>
      <ResponsiveContainer height={200} aspect={2}>
        <PieChart width={80} height={100}>
          <PolarAngleAxis />
          <PolarRadiusAxis />
          <PolarGrid />
          <Legend align="left" verticalAlign="middle" layout="vertical" wrapperStyle={{ fontWeight: 'bold', fontSize: '1.2rem' }} />
          <Tooltip position={'average'}  />
          <Pie data={data01} dataKey="value" nameKey="name" cx="65%" cy="55%" startAngle={90} endAngle={-270} innerRadius={40} outerRadius={80} fill="#8884d8" stroke="#fff" strokeWidth={0.5} label />
          {
            data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))
          }
        </PieChart>
      </ResponsiveContainer>
    </>
    )
}