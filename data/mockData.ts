
import { KpiData, RevenueData, UserAcquisitionData, DeviceData, RecentSale } from '../types';

export const kpiData: KpiData[] = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", changeType: "positive", description: "from last month" },
    { title: "Active Users", value: "+2350", change: "+180.1%", changeType: "positive", description: "from last month" },
    { title: "Conversions", value: "+12,234", change: "+19%", changeType: "positive", description: "from last month" },
    { title: "Growth", value: "7.8%", change: "-2.1%", changeType: "negative", description: "from last month" },
];

export const revenueData: RevenueData[] = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 6000 },
    { name: 'Jun', revenue: 5500 },
    { name: 'Jul', revenue: 6500 },
];

export const userAcquisitionData: UserAcquisitionData[] = [
    { source: 'Organic', users: 5000 },
    { source: 'Paid', users: 3500 },
    { source: 'Referral', users: 2000 },
    { source: 'Social', users: 4200 },
    { source: 'Direct', users: 1500 },
];

export const deviceData: DeviceData[] = [
    { name: 'Desktop', value: 65 },
    { name: 'Mobile', value: 30 },
    { name: 'Tablet', value: 5 },
];

export const recentSalesData: RecentSale[] = [
    { id: "1", name: "Olivia Martin", email: "olivia.martin@email.com", amount: 1999.00, status: "Success" },
    { id: "2", name: "Jackson Lee", email: "jackson.lee@email.com", amount: 39.00, status: "Processing" },
    { id: "3", name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: 299.00, status: "Success" },
    { id: "4", name: "William Kim", email: "will@email.com", amount: 99.00, status: "Pending" },
    { id: "5", name: "Sofia Davis", email: "sofia.davis@email.com", amount: 39.00, status: "Success" },
    { id: "6", name: "Liam Garcia", email: "liam@email.com", amount: 450.50, status: "Failed" },
    { id: "7", name: "Ava Rodriguez", email: "ava@email.com", amount: 1500.00, status: "Success" },
    { id: "8", name: "Noah Martinez", email: "noah@email.com", amount: 75.00, status: "Processing" },
    { id: "9", name: "Emma Hernandez", email: "emma@email.com", amount: 200.00, status: "Success" },
    { id: "10", name: "James Brown", email: "james@email.com", amount: 120.00, status: "Pending" },
];
