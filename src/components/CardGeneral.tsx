export default function CardGeneral({ children }: { children: React.ReactNode }){
    return (
        <div className="w-90 border border-zinc-600 rounded-xl p-5 bg-zinc-800">
            { children }
        </div>
    )
};