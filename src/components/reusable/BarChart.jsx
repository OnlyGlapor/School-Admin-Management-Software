import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CustomBarChart = ({ data, title }) => {
  return (
    <div className="flex h-full rounded-full pr-20 pt-2">
      <BarChart width={450} height={210} data={data} margin={{ top: 30, left: 20, bottom: 5 }} barCategoryGap={5}>
        <XAxis dataKey="day" axisLine={false} tickLine={false}  />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip formatter={(value) => `$ ${value}`} />
        <Bar dataKey="amount" fill="#3B82F6" />
      </BarChart>
    </div>
  );
};

export default CustomBarChart;
