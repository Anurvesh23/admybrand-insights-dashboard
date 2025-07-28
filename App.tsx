import React from 'react';
import { Header } from './components/layout/Header';
import { KpiCards } from './components/dashboard/KpiCards';
import { RevenueChart } from './components/dashboard/RevenueChart';
import { UserAcquisitionChart } from './components/dashboard/UserAcquisitionChart';
import { RecentSales } from './components/dashboard/RecentSales';
import { DeviceBreakdownChart } from './components/dashboard/DeviceBreakdownChart';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <KpiCards />
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <RevenueChart />
                <UserAcquisitionChart />
              </div>
              <RecentSales />
            </div>
            <DeviceBreakdownChart />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
