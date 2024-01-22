import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AttendanceChart = () => {
  const attendanceData = [
    { day: 'Monday', students: { present: 30, absent: 10 }, teachers: { present: 15, absent: 5 }, staff: { present: 5, absent: 2 } },
    { day: 'Tuesday', students: { present: 25, absent: 15 }, teachers: { present: 10, absent: 5 }, staff: { present: 8, absent: 2 } },
    { day: 'Wednesday', students: { present: 25, absent: 15 }, teachers: { present: 10, absent: 5 }, staff: { present: 8, absent: 2 } },
    { day: 'Thursday', students: { present: 25, absent: 15 }, teachers: { present: 10, absent: 5 }, staff: { present: 8, absent: 2 } },
    { day: 'Friday', students: { present: 25, absent: 15 }, teachers: { present: 10, absent: 5 }, staff: { present: 8, absent: 2 } },
    // ... other days
  ];

  return (
    <BarChart
      width={500}
      height={300}
      data={attendanceData}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" tick={{ fontSize: 12 }} />
      <YAxis tick={{ fontSize: 12 }} />
      <Tooltip contentStyle={{ fontSize: 12 }} />
      <Legend wrapperStyle={{ fontSize: 12 }} />
      <Bar dataKey="students.present" stackId="a" fill="#82ca9d" name="Students - Present" />
      <Bar dataKey="students.absent" stackId="a" fill="#8884d8" name="Students - Absent" />
      <Bar dataKey="teachers.present" stackId="b" fill="#ffc658" name="Teachers - Present" />
      <Bar dataKey="teachers.absent" stackId="b" fill="#ff7300" name="Teachers - Absent" />
      <Bar dataKey="staff.present" stackId="c" fill="#0088fe" name="Staff - Present" />
      <Bar dataKey="staff.absent" stackId="c" fill="#00c49f" name="Staff - Absent" />
    </BarChart>  );
};

export default AttendanceChart;
