export const Avatar = ({ name }: { name: string }) => <div className="flex h-9 w-9 items-center justify-center rounded-full bg-panelSoft text-xs">{name.slice(0,2).toUpperCase()}</div>;
