"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface SimplePieChartProps {
  value: number;
  total: number;
  label: string;
  color?: string;
  backgroundColor?: string;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  className?: string;
}

export default function SimplePieChart({
  value,
  total,
  label,
  color = "#b91c1c",
  backgroundColor = "#e5e7eb",
  height = 200,
  innerRadius = 60,
  outerRadius = 80,
  className = "",
}: SimplePieChartProps) {
  const percentage = ((value / total) * 100).toFixed(0);
  
  const chartData = [
    { name: "value", value: value, color: color },
    { name: "remaining", value: total - value, color: backgroundColor },
  ];

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 ${className}`}>
      <div style={{ width: height, height: height }} className="flex-shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              paddingAngle={0}
              cornerRadius={0}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex flex-col items-center sm:items-start">
        <p className="text-xs sm:text-sm text-[var(--color-gray-600)] mb-1">
          {label}
        </p>
        <p className="text-4xl sm:text-5xl font-bold text-[var(--color-gray-900)]">
          {percentage}%
        </p>
      </div>
    </div>
  );
}

