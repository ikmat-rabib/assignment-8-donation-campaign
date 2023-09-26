
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Pi = () => {

    const data = [
        { name: 'Your Donation', value: 400 },
        { name: 'Total Donation', value: 700 },
    ];

    const COLORS = ['#FF444A', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        // label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Pi;