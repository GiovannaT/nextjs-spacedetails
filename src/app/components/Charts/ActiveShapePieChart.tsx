"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";

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
}

interface ActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: ChartDataItem;
  percent: number;
  value: number;
}

const renderActiveShape = (props: unknown) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props as ActiveShapeProps;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="font-semibold text-lg">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        className="font-medium text-sm"
      >
        {value.toLocaleString()}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        className="text-xs"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    </g>
  );
};

export default function ActiveShapePieChart({
  data,
  height = 400,
  innerRadius = 60,
  outerRadius = 80,
  className = "",
  showLegend = true,
  total,
}: ActiveShapePieChartProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_data: ChartDataItem, index: number) => {
    setActiveIndex(index);
  };

  const calculatedTotal = total || data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={`flex flex-col lg:flex-row gap-8 items-center ${className}`}>
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke={index === activeIndex ? entry.color : "transparent"}
                  strokeWidth={index === activeIndex ? 2 : 0}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {showLegend && (
        <div className="flex flex-col gap-4 lg:min-w-[250px]">
          {total && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-[var(--color-gray-600)] mb-1">Total</p>
              <p className="text-2xl font-bold text-[var(--color-gray-900)]">
                {calculatedTotal}
              </p>
              <p className="text-xs text-[var(--color-gray-600)]">unidades</p>
            </div>
          )}
          {data.map((item) => {
            const percentage = ((item.value / calculatedTotal) * 100).toFixed(1);
            return (
              <div 
                key={item.name} 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div 
                  className="w-4 h-4 rounded-sm flex-shrink-0 shadow-sm" 
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[var(--color-gray-900)]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[var(--color-gray-600)]">
                    {item.value.toLocaleString()} unidades
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-[var(--color-gray-900)]">
                    {percentage}%
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

