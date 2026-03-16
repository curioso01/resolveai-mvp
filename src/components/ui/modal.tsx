export function Modal({ title, children }: { title: string; children: React.ReactNode }) { return <div className="card max-w-xl"><h3 className="mb-2 text-lg font-bold">{title}</h3>{children}</div>; }
