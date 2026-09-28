import { useState } from "react";
import { Upload } from "lucide-react";
import CardSolicitarNombre from "../components/CardSolicitarNombre";
import CardEspacioTrabajo from "../components/CardEspacioTrabajo";


export default function DashboarView(){
    const nombreUsuario = localStorage.getItem("nombreUsuario");
    const [visibleModal, setVisibleModal] = useState(Boolean(nombreUsuario));

    if(!visibleModal) return <CardSolicitarNombre setVisibleModal={setVisibleModal}/>
    return (
        <div className="h-screen">
            <section className="px-7 py-4 flex justify-between items-center">
                <h1 className="text-zinc-100 text-xl font-semibold">Hola {nombreUsuario}!</h1>
                <button  title="Subir un documento" className="border-2 border-zinc-600 p-3 rounded-xl cursor-pointer hover:border-zinc-100 shadow-sm hover:shadow-zinc-300">
                    <Upload className="size-7 text-zinc-100"/>
                </button>
            </section>
            <main className="border border-t-zinc-600 p-7">
                <h2 className="text-zinc-100 font-semibold text-2xl">Tus espacios de estudio:</h2>
                <div className="mt-10">
                    <CardEspacioTrabajo />
                </div>
            </main>
        </div>
    )
};