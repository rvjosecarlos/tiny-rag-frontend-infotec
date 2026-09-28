import { X, ArrowUpFromLine } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import CardGeneral from "./CardGeneral";
import { ingestarDocumento } from "../api/ingestaAPI";
import Spinner from "./Spinner";
import type { CardStudySpace } from "../schemas/types";

type FormularioEspacioTrabajoProps = {
    setVisibleUploadForm: React.Dispatch<React.SetStateAction<boolean>>,
    setStudySpaces: React.Dispatch<React.SetStateAction<CardStudySpace[]>>
};

export default function FormularioEspacioTrabajo({ setVisibleUploadForm, setStudySpaces }: FormularioEspacioTrabajoProps){
    const [uploadForm, setUploadForm] = useState({ cardTitle: "", cardDescription: "" });
    const [cardColor, setCardColor] = useState("bg-white");
    const [spinner, setSpinner] = useState(false);

    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if("id" in e.target && e.target.id === "Modal") setVisibleUploadForm(false);
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        if( uploadForm.cardTitle && uploadForm.cardDescription && e.target.files?.length ){
            if( !e.target.files[0].type.includes("pdf") ) {
                alert("Solo se permiten documentos PDF");
                return;
            };
            setSpinner(true);
            const user = localStorage.getItem("nombreUsuario");
            const formData = new FormData();
            formData.append("user", user!.trim());
            formData.append("titleCard", uploadForm.cardTitle.trim());
            formData.append("pdf", e.target.files[0]);
            const { success, data, errors } = await ingestarDocumento(formData);
            if( success === false && data === null ){
                alert(`Error al subir el documento ${errors[0].message}`);
                setSpinner(false);
                return;
            };
            const card = {
                cardTitle: uploadForm.cardTitle.trim(),
                cardDescription: uploadForm.cardDescription.trim(),
                creationDate: new Date().toDateString(),
                fileName: e.target.files[0].name,
                numPage: data?.pdf.totalPages,
                color: cardColor
            } as CardStudySpace;
            const cardsString = localStorage.getItem("cards");
            const cardsStorage = cardsString ? JSON.parse(cardsString) as CardStudySpace[] : [];
            const cards = cardsStorage ? [ ...cardsStorage, card ] : [card];
            localStorage.setItem("cards", JSON.stringify(cards));
            setStudySpaces(cards);
            setSpinner(false);
            setVisibleUploadForm(false);
            return;
        };
        alert("Por favor coloca un nombre y una descripción");
    };

    return (
        <>
            <div onClick={handleClose}>
                <Modal>
                    <CardGeneral>
                        <form>
                            <div className="flex justify-end">
                                <X 
                                    id="Cerrar"
                                    className="size-5 text-zinc-100 cursor-pointer"
                                    onClick={() => setVisibleUploadForm(false)}
                                />
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-zinc-100 font-semibold mb-5 text-xl">Sube tu documento en formato PDF</h2>
                                <label 
                                    htmlFor="nombre-espacio"
                                    className="text-zinc-100"
                                >
                                    Nombre:
                                </label>
                                <input 
                                    id="nombre-espacio"
                                    type="text"
                                    className="text-zinc-100 border border-zinc-600 rounded-xl w-full p-2"
                                    placeholder="Nombre de tu espacio de estudio"
                                    required
                                    onChange={(e) => setUploadForm({ ...uploadForm, cardTitle: e.target.value })}
                                />
                                <label 
                                    htmlFor="descripcion-espacio"
                                    className="text-zinc-100"
                                >
                                    Descripción:
                                </label>
                                <textarea 
                                    id="descripcion-espacio" 
                                    className="text-zinc-100 border border-zinc-600 rounded-xl w-full p-2 resize-none"
                                    placeholder="Breve descripción"
                                    required
                                    onChange={(e) => setUploadForm({ ...uploadForm, cardDescription: e.target.value })}
                                />
                                <label className="text-zinc-100 mb-2 block">Elige un color:</label>
                                <div className="flex space-x-3 justify-center mb-10">
                                    <label htmlFor="yellow" onClick={() => setCardColor("bg-amber-400")}>
                                        <input id="yellow" type="radio" name="colors" hidden/>
                                        <div className={`w-7 h-7 bg-amber-400 cursor-pointer shadow hover:shadow-amber-400 ${ cardColor === "bg-amber-400" ? "border-4 border-zinc-100" : "" }`}></div>
                                    </label>
                                    <label htmlFor="blue" onClick={() => setCardColor("bg-blue-500")}>
                                        <input id="blue" type="radio" name="colors" hidden/>
                                        <div className={`w-7 h-7 bg-blue-500 cursor-pointer shadow hover:shadow-blue-500 ${ cardColor === "bg-blue-500" ? "border-4 border-zinc-100" : "" }`}></div>
                                    </label>
                                    <label htmlFor="cyan" onClick={() => setCardColor("bg-cyan-500")}>
                                        <input id="cyan" type="radio" name="colors" hidden/>
                                        <div className={`w-7 h-7 bg-cyan-500 cursor-pointer shadow hover:shadow-cyan-500 ${ cardColor === "bg-cyan-500" ? "border-4 border-zinc-100" : "" }`}></div>
                                    </label>
                                    <label htmlFor="emerald" onClick={() => setCardColor("bg-emerald-600")}>
                                        <input id="emerald" type="radio" name="colors" hidden/>
                                        <div className={`w-7 h-7 bg-emerald-600 cursor-pointer shadow hover:shadow-emerald-500 ${ cardColor === "bg-emerald-600" ? "border-4 border-zinc-100" : "" }`}></div>
                                    </label>
                                    <label htmlFor="fuchsia" onClick={() => setCardColor("bg-fuchsia-500")}>
                                        <input id="fucshia" type="radio" name="colors" hidden/>
                                        <div className={`w-7 h-7 bg-fuchsia-500 cursor-pointer shadow hover:shadow-fuchsia-500 ${ cardColor === "bg-fuchsia-500" ? "border-4 border-zinc-100" : "" }`}></div>
                                    </label>
                                    <label htmlFor="indigo" onClick={() => setCardColor("bg-indigo-600")}>
                                        <input id="indigo" type="radio" name="colors" hidden/>
                                        <div className={`w-7 h-7 bg-indigo-600 cursor-pointer shadow hover:shadow-indigo-500 ${ cardColor === "bg-indigo-600" ? "border-4 border-zinc-100" : "" }`}></div>
                                    </label>
                                    <label htmlFor="purple" onClick={() => setCardColor("bg-purple-700")}>
                                        <input id="purple" type="radio" name="colors" hidden/>
                                        <div className={`w-7 h-7 bg-purple-700 cursor-pointer shadow hover:shadow-purple-500 ${ cardColor === "bg-purple-700" ? "border-4 border-zinc-100" : "" }`}></div>
                                    </label>
                                    <label htmlFor="white" onClick={() => setCardColor("bg-white")}>
                                        <input id="white" type="radio" name="colors" hidden/>
                                        <div className={`w-7 h-7 bg-white cursor-pointer shadow hover:shadow-white ${ cardColor === "bg-white" ? "border-4 border-black" : "" }`}></div>
                                    </label>
                                </div>
                                <label 
                                    className="p-2 bg-zinc-100 rounded-xl flex justify-center items-center space-x-1 cursor-pointer"
                                    htmlFor="cargar-archivo"
                                >
                                    <p>Subir archivo</p>
                                    <ArrowUpFromLine className="size-5"/>
                                    <input 
                                        id="cargar-archivo"
                                        type="file" 
                                        hidden
                                        onChange={handleSubmit}
                                        accept=".pdf"
                                    />
                                </label>
                            </div>
                        </form>
                    </CardGeneral>
                </Modal>
            </div>
            { spinner && <Modal><Spinner /></Modal> }
        </>
    )
};