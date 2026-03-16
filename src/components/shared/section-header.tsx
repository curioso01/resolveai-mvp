export function SectionHeader({title,subtitle}:{title:string;subtitle?:string}){return <div><h2 className="text-2xl font-bold">{title}</h2>{subtitle&&<p className="text-muted">{subtitle}</p>}</div>}
