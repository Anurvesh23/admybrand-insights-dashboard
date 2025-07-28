
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { deviceData } from '../../data/mockData';
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export const DeviceBreakdownChart = () => {
    const { theme } = useTheme();
    const textColor = theme === 'dark' ? '#f4f4f5' : '#18181b'; // zinc-100 : zinc-900
    const tooltipBg = theme === 'dark' ? '#18181b' : '#ffffff';
    const tooltipBorder = theme === 'dark' ? '#3f3f46' : '#e5e7eb';

    return (
        <Card className="xl:col-span-1">
            <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
                <CardDescription>User sessions by device type.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: tooltipBg,
                                border: `1px solid ${tooltipBorder}`,
                                borderRadius: '0.5rem'
                            }}
                        />
                        <Pie
                            data={deviceData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={110}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            label={({ name, percent, x, y }) => (
                                <text
                                    x={x}
                                    y={y}
                                    fill={textColor}
                                    fontSize={12}
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                >
                                    {`${name} ${(percent * 100).toFixed(0)}%`}
                                </text>
                            )}
                        >
                            {deviceData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend wrapperStyle={{ color: textColor }}/>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};
