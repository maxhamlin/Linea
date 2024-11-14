import React from 'react'
import Link from 'next/link'
import { 
  HomeIcon, 
  ChartBarIcon, 
  WalletIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon 
} from '@heroicons/react/24/outline'

const menuItems = [
  { name: 'Overview', icon: HomeIcon, href: '/' },
  { name: 'Analytics', icon: ChartBarIcon, href: '/analytics' },
  { name: 'Transactions', icon: WalletIcon, href: '/transactions' },
  { name: 'Reports', icon: DocumentTextIcon, href: '/reports' },
  { name: 'Settings', icon: Cog6ToothIcon, href: '/settings' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-indigo-600">FinDash</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center px-4 py-2.5 text-gray-700 rounded-lg hover:bg-gray-50 group transition-colors"
              >
                <item.icon className="h-5 w-5 mr-3 text-gray-400 group-hover:text-indigo-600" />
                <span className="text-sm font-medium group-hover:text-indigo-600">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto pt-8 border-t border-gray-200">
          <button className="flex items-center px-4 py-2.5 text-gray-700 rounded-lg hover:bg-gray-50 group transition-colors w-full">
            <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3 text-gray-400 group-hover:text-indigo-600" />
            <span className="text-sm font-medium group-hover:text-indigo-600">Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  )
} 