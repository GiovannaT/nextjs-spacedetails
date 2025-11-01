"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ChartDataItem {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}

interface ActiveShapePieChartProps {
  data: ChartDataItem[];
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  className?: string;
  showLegend?: boolean;
  total?: number;
  showTotalInCenter?: boolean;
}

export default function ActiveShapePieChart({
  data,
  height = 400,
  innerRadius = 60,
  outerRadius = 80,
  className = "",
  showLegend = true,
  total,
  showTotalInCenter = true,
}: ActiveShapePieChartProps) {
  const calculatedTotal = total || data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={`flex flex-col lg:flex-row gap-8 items-center ${className}`}>
      <div className="flex-1 w-full relative">
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={0}
              cornerRadius={0}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke="none"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {showTotalInCenter && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-sm text-[var(--color-gray-600)] mb-1">Unidades</p>
            <p className="text-5xl font-bold text-[var(--color-gray-900)]">
              {calculatedTotal}
            </p>
          </div>
        )}
      </div>
      
      {showLegend && (
        <div className="flex flex-col gap-6 lg:min-w-[200px]">
          {data.map((item) => {
            return (
              <div 
                key={item.name} 
                className="flex items-start gap-3"
              >
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0 mt-1" 
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex flex-col">
                  <p className="text-sm text-[var(--color-gray-600)] mb-1">
                    {item.name}
                  </p>
                  <p className="text-2xl font-bold text-[var(--color-gray-900)]">
                    {item.value.toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

