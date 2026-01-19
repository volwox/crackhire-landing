interface ValueBreakdownProps {
  variant?: 'compact' | 'full';
  className?: string;
}

export function ValueBreakdown({ variant = 'compact', className = '' }: ValueBreakdownProps) {
  const items = [
    { name: 'Sprint PDF + Blueprints', value: 49 },
    { name: 'Cheat Sheets & Scripts', value: 49 },
    { name: 'Notion Workbook', value: 79 },
  ];

  const totalValue = items.reduce((sum, item) => sum + item.value, 0);
  const todayPrice = 49;

  if (variant === 'compact') {
    return (
      <div className={`bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-4 ${className}`}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-500 uppercase tracking-wide">Total Value</div>
            <div className="text-lg text-slate-400 line-through">${totalValue}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs text-slate-500 uppercase tracking-wide">Today</div>
            <div className="text-2xl font-bold text-white">${todayPrice}</div>
          </div>
          <div className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-2 py-1 rounded">
            Save ${totalValue - todayPrice}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 ${className}`}>
      <div className="text-xs text-slate-500 uppercase tracking-wider mb-4">Bundle Breakdown</div>
      <div className="space-y-3 mb-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className="text-slate-400">{item.name}</span>
            <span className="text-slate-500">${item.value}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-700/50 pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400">Total Value</span>
          <span className="text-xl text-slate-400 line-through">${totalValue}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold">Today's Price</span>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-white">${todayPrice}</span>
            <span className="bg-emerald-500/10 text-emerald-400 text-sm font-semibold px-3 py-1 rounded-full">
              Save ${totalValue - todayPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
