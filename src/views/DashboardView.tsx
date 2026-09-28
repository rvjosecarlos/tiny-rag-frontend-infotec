import { useState } from "react";
import { Upload } from "lucide-react";
import CardSolicitarNombre from "../components/CardSolicitarNombre";
import CardEspacioTrabajo from "../components/CardEspacioTrabajo";
import FormularioEspacioTrabajo from "../components/FormularioEspacioTrabajo";
import Modal from "../components/Modal";
import type { CardStudySpace } from "../schemas/types";


export default function DashboarView(){
    const cardSpaces = localStorage.getItem("cards");
    const nombreUsuario = localStorage.getItem("nombreUsuario");
    const [visibleCardRequestName, setVisibleCardRequestName] = useState(Boolean(nombreUsuario));
    const [visibleUploadForm, setVisibleUploadForm] = useState(false);
    const [studySpaces, setStudySpaces] = useState<CardStudySpace[]>(cardSpaces ? JSON.parse(cardSpaces) : []);
    

    if(!visibleCardRequestName) return <Modal><CardSolicitarNombre setVisibleCardRequestName={setVisibleCardRequestName}/></Modal>
    return (
        <>
            <div>
                <section className="px-7 py-4 flex justify-between items-center">
                    <h1 className="text-zinc-100 text-xl font-semibold">Hola {localStorage.getItem("nombreUsuario")}!</h1>
                    <button 
                        className="border-2 border-zinc-600 p-3 rounded-xl cursor-pointer hover:border-zinc-100 shadow-sm hover:shadow-zinc-300"
                        onClick={() => setVisibleUploadForm(true)}
                    >
                        <Upload className="size-7 text-zinc-100"/>
                    </button>
                </section>
                <main className="border border-t-zinc-600 p-7">
                    <h2 className={`text-zinc-100 ${ studySpaces.length ? "text-2xl font-semibold" : "text-center" }`}>{ studySpaces.length ? "Tus espacios de estudio:" : "Aún no tienes espacios de estudio, comienza subiendo un documento." }</h2>
                    <div className="mt-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
                        {
                            studySpaces.map( space => <CardEspacioTrabajo key={space.creationDate} cardStudySpace={space}/> )
                        }
                    </div>
                </main>
            </div>
            { visibleUploadForm && <FormularioEspacioTrabajo setVisibleUploadForm={setVisibleUploadForm} setStudySpaces={setStudySpaces}/> }
        </>
    )
};