import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const examResultsData = [
    { subject: 'N/A', boys: 20, girls: 20 },
    { subject: 'Math', boys: 0, girls: 70 },
    { subject: 'English', boys: 60, girls: 0 },
    { subject: 'Chemistry', boys: 0, girls: 80 },
    { subject: 'Physics', boys: 60, girls: 0 },
    { subject: 'Economics', boys: 0, girls: 65 },
];

const CustomLineChart = ({ data, title, width }) => {
    return (
        <div style={{ height: '90%', display: 'flex', alignItems: 'center' }}>
            <LineChart width={width} height={250} data={examResultsData}>
                <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="boys" stroke="#3498DB" strokeWidth={4} />
                <Line type="monotone" dataKey="girls" stroke="#F39C12" strokeWidth={4} />
            </LineChart>
        </div>
    );
};

export default CustomLineChart;
