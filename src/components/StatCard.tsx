interface Props {
  readonly title: string
  readonly value: string
}

export default function StatCard ({ title, value }: Props) {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <p className="text-sm text-slate-500">{title}</p>

      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  )
}

