import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export function IncomeChart({ currentDate, incomeData }) {
  return (
    <div>
      <h4>Income Data</h4>
      <BarChart
        series={[
          { data: [incomeData], color: 'greenYellow' } // Blue color for income data
        ]}
        height={290}
        xAxis={[{ data: [currentDate], scaleType: 'band' }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        barWidth={20} // Adjust the width of the bars as needed
      />
    </div>
  );
}

export function TotalProductsChart({ currentDate, totalProducts }) {
  return (
    <div>
      <h4>Total Products</h4>
      <BarChart
        series={[
          { data: [totalProducts], color: '#ff9800' } // Orange color for total products
        ]}
        height={290}
        xAxis={[{ data: [currentDate], scaleType: 'band' }]}
        margin={{ top: 10, bottom: 30, left: 80, right: 10 }}
        barWidth={20} // Adjust the width of the bars as needed
      />
    </div>
  );
}
