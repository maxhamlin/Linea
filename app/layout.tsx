import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import { ThemeProvider } from '@/providers/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Financial Dashboard',
  description: 'Modern Financial Analytics Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Sidebar />
            <div className="flex-1">
              <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 flex items-center px-8 transition-colors duration-200">
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard Overview</h1>
                  <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <button className="bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors">
                      Export Report
                    </button>
                    <div className="h-8 w-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-300 font-medium">JD</span>
                    </div>
                  </div>
                </div>
              </header>
              <main className="p-8">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 