
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { revenueData } from '../../data/mockData';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

export const RevenueChart = () => {
    const { theme } = useTheme();
    const strokeColor = theme === 'dark' ? '#a1a1aa' : '#374151'; // zinc-400 : gray-700
    const tooltipBg = theme === 'dark' ? '#18181b' : '#ffffff'; // zinc-900 : white
    const tooltipBorder = theme === 'dark' ? '#3f3f46' : '#e5e7eb'; // zinc-700 : gray-200

    return (
        <Card>
            <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue breakdown for the first half of the year.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} stroke={strokeColor}/>
                        <XAxis dataKey="name" stroke={strokeColor} fontSize={12} />
                        <YAxis stroke={strokeColor} fontSize={12} tickFormatter={(value) => `$${value/1000}k`}/>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: tooltipBg,
                                border: `1px solid ${tooltipBorder}`,
                                borderRadius: '0.5rem',
                                color: strokeColor
                            }}
                        />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};
