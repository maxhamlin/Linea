import React from 'react'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'

interface StatCardProps {
  title: string
  value: string
  trend: string
  isPositive?: boolean
  icon?: React.ElementType
}

export default function StatCard({ 
  title, 
  value, 
  trend, 
  isPositive = true,
  icon: Icon 
}: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-500 transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        {Icon && (
          <div className="p-2 bg-indigo-50 rounded-lg">
            <Icon className="h-5 w-5 text-indigo-600" />
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <div className="flex items-center mt-2">
          {isPositive ? (
            <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
          ) : (
            <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
          )}
          <span className={`text-sm font-medium ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend}
          </span>
        </div>
      </div>
    </div>
  )
} 