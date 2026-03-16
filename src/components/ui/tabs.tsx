export const Tabs = ({ tabs }: { tabs: string[] }) => <div className="flex flex-wrap gap-2">{tabs.map(t=><button key={t} className="rounded-xl border bg-panel px-3 py-2 text-sm">{t}</button>)}</div>;
