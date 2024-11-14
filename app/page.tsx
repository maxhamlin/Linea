import StatCard from '@/components/StatCard'
import RevenueChart from '@/components/RevenueChart'
import TransactionsTable from '@/components/TransactionsTable'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$50,000" 
          trend="+12.5%"
          isPositive={true}
        />
        <StatCard 
          title="Total Expenses" 
          value="$30,000" 
          trend="-2.3%"
          isPositive={false}
        />
        <StatCard 
          title="Net Profit" 
          value="$20,000" 
          trend="+15.2%"
          isPositive={true}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <TransactionsTable />
      </div>
    </div>
  )
} 