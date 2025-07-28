import React from 'react';
import { Header } from './components/layout/Header';
import { KpiCards } from './components/dashboard/KpiCards';
import { RevenueChart } from './components/dashboard/RevenueChart';
import { UserAcquisitionChart } from './components/dashboard/UserAcquisitionChart';
import { RecentSales } from './components/dashboard/RecentSales';
import { DeviceBreakdownChart } from './components/dashboard/DeviceBreakdownChart';
import {
  kpiData as initialKpiData,
  revenueData as initialRevenueData,
  userAcquisitionData as initialUserAcquisitionData,
  deviceData as initialDeviceData,
  recentSalesData as initialRecentSalesData,
} from './data/mockData';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [kpiData, setKpiData] = React.useState(initialKpiData);
  const [revenueData, setRevenueData] = React.useState(initialRevenueData);
  const [userAcquisitionData, setUserAcquisitionData] = React.useState(initialUserAcquisitionData);
  const [deviceData, setDeviceData] = React.useState(initialDeviceData);
  const [recentSalesData, setRecentSalesData] = React.useState(initialRecentSalesData);

  // Simulate real-time updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      // Simulate KPI changes
      setKpiData((prev) => prev.map(kpi => ({
        ...kpi,
        value: kpi.value.replace(/\d+/, v => (parseInt(v) + getRandomInt(-10, 10)).toString()),
        change: (getRandomInt(-5, 20) > 0 ? '+' : '-') + getRandomInt(1, 20) + '%',
        changeType: getRandomInt(0, 1) ? 'positive' : 'negative',
      })));
      // Simulate revenue changes
      setRevenueData((prev) => prev.map(item => ({
        ...item,
        revenue: item.revenue + getRandomInt(-500, 500)
      })));
      // Simulate user acquisition changes
      setUserAcquisitionData((prev) => prev.map(item => ({
        ...item,
        users: item.users + getRandomInt(-100, 100)
      })));
      // Simulate device breakdown changes
      setDeviceData((prev) => prev.map(item => ({
        ...item,
        value: Math.max(1, item.value + getRandomInt(-2, 2))
      })));
      // Simulate recent sales changes (randomly update status)
      setRecentSalesData((prev) => prev.map(sale => ({
        ...sale,
        status: ['Pending', 'Processing', 'Success', 'Failed'][getRandomInt(0, 3)]
      })));
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <KpiCards kpiData={kpiData} />
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <RevenueChart revenueData={revenueData} />
                <UserAcquisitionChart userAcquisitionData={userAcquisitionData} />
              </div>
              <RecentSales recentSalesData={recentSalesData} />
            </div>
            <DeviceBreakdownChart deviceData={deviceData} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
