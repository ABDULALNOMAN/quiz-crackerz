import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {
    return (
            <ResponsiveContainer>
                <BarChart
                width={430}
                height={250}
                data={data}>
                <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey='name'/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='total' fill="#8884d8"/>
                </BarChart>
            </ResponsiveContainer>
    );
};

export default Chart;