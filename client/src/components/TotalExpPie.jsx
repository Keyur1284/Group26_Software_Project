import { ResponsiveContainer, Cell, PieChart, PolarAngleAxis, PolarRadiusAxis, PolarGrid, Pie, Legend, Tooltip } from 'recharts'


const data01 = [
  {
    "name": "Used",
    "value": 29582,
    fill: "#184FA3"
  },
  {
    "name": "Unused",
    "value": 2340,
    fill: "#E7ECEF"
  }
];

export const TotalExpPie = () => {

  return (
    <>
      <ResponsiveContainer height={200} aspect={2}>
        <PieChart width={80} height={100}>
          <PolarAngleAxis />
          <PolarRadiusAxis />
          <PolarGrid />
          <Legend align="left" verticalAlign="middle" layout="vertical" wrapperStyle={{ fontWeight: 'bold', fontSize: '1.2rem' }} />
          <Tooltip />
          <Pie data={data01} dataKey="value" nameKey="name" cx="65%" cy="55%" startAngle={90} endAngle={-270} innerRadius={40} outerRadius={80} fill="#8884d8" stroke="#fff" strokeWidth={0} label />
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