'use client'

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
      labels: {
        usePointStyle: true,
        boxWidth: 6,
        font: {
          size: 13,
        }
      }
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
        color: 'rgba(0, 0, 0, 0.05)',
      },
      ticks: {
        callback: (value: number) => `$${value/1000}k`,
      }
    },
    x: {
      grid: {
        display: false,
      }
    }
  },
  elements: {
    line: {
      tension: 0.4
    }
  }
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: [65000, 59000, 80000, 81000, 56000, 85000],
      borderColor: '#4F46E5',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      fill: true,
      pointBackgroundColor: '#4F46E5',
    },
    {
      label: 'Expenses',
      data: [45000, 47000, 55000, 58000, 48000, 59000],
      borderColor: '#EF4444',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      fill: true,
      pointBackgroundColor: '#EF4444',
    }
  ],
}

export default function RevenueChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
      <Line options={options} data={data} height={100} />
    </div>
  )
} 