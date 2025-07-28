import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { cn } from '../../lib/utils';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';
import type { KpiData } from '../../types';

const iconMap: { [key: string]: React.ElementType } = {
  "Total Revenue": DollarSign,
  "Active Users": Users,
  "Conversions": CreditCard,
  "Growth": Activity,
};

export const KpiCards = ({ kpiData }: { kpiData: KpiData[] }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {kpiData.map((kpi, index) => {
        const Icon = iconMap[kpi.title];
        return (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className={cn(
                  "text-xs",
                  kpi.changeType === "positive" ? "text-green-500" : "text-red-500"
                )}>
                {kpi.change}
                <span className="text-muted-foreground ml-2">{kpi.description}</span>
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
