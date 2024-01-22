import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const CustomPieChart = ({ data, title, width }) => {
  return (
    <div style={{backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', marginTop: 10}}>
      <PieChart width={width} height={250}>
        <Pie data={data} dataKey="percentage" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" nameKey="subject" label />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CustomPieChart;
