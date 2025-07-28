
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { userAcquisitionData } from '../../data/mockData';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

export const UserAcquisitionChart = () => {
    const { theme } = useTheme();
    const strokeColor = theme === 'dark' ? '#a1a1aa' : '#374151';
    const tooltipBg = theme === 'dark' ? '#18181b' : '#ffffff';
    const tooltipBorder = theme === 'dark' ? '#3f3f46' : '#e5e7eb';

    return (
        <Card>
            <CardHeader>
                <CardTitle>User Acquisition</CardTitle>
                <CardDescription>Breakdown of new users by acquisition channel.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={userAcquisitionData}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} stroke={strokeColor}/>
                        <XAxis dataKey="source" stroke={strokeColor} fontSize={12}/>
                        <YAxis stroke={strokeColor} fontSize={12}/>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: tooltipBg,
                                border: `1px solid ${tooltipBorder}`,
                                borderRadius: '0.5rem',
                                color: strokeColor
                            }}
                        />
                        <Bar dataKey="users" fill="#82ca9d" radius={[4, 4, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};
