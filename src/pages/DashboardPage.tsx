import StatCard from '../components/StatCard.tsx'
import DashboardHeader from '../components/DashboardHeader.tsx'

export default function DashboardPage () {
  return (
    <div className="p-8 space-y-6">
      <DashboardHeader />

      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Users" value="1,245" />
        <StatCard title="Revenue" value="$12,340" />
        <StatCard title="Orders" value="320" />
      </div>
    </div>
  )
}

