import { PieChart, Pie,  Cell } from 'recharts';
import { getStoredDonation } from '../../../utility/localStorage';

const Pi = () =>  {
  const myDonation = getStoredDonation();
  const myDonationValue = myDonation.length
  console.log(myDonation.length);

  const remainingValue = 12 - myDonationValue;
  
const data = [
    { name: 'Group A', value: remainingValue },
    { name: 'Group B', value: myDonationValue },
  ];
  
  const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent  }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
 
    return (
  
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      
    );
  }

export default Pi;