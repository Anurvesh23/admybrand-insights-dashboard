
export type KpiData = {
    title: string;
    value: string;
    change: string;
    changeType: "positive" | "negative";
    description: string;
};

export type RevenueData = {
    name: string;
    revenue: number;
};

export type UserAcquisitionData = {
    source: string;
    users: number;
};

export type DeviceData = {
    name: string;
    value: number;
};

export type RecentSale = {
    id: string;
    name: string;
    email: string;
    amount: number;
    status: "Pending" | "Processing" | "Success" | "Failed";
};
