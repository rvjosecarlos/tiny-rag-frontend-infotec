import { Files, FileText } from "lucide-react";
import type { CardStudySpace } from "../schemas/types";
import { formatDate } from "../utils/formatDate";

type CardEspacioProps = {
    cardStudySpace: CardStudySpace
};

export default function CardEspacioTrabajo( { cardStudySpace }: CardEspacioProps ){
    // titulo, descripcion, datos del documento son variables, tambien la clase del color del div es variable
    const { cardTitle, cardDescription, color, creationDate, fileName, numPage } = cardStudySpace;
    const hover = `border-${color.replace("bg-", "")}`;
    console.log(hover);

    return(
        <div className={`flex w-full sm:w-60 border border-zinc-600 rounded-r-xl bg-zinc-800 hover:cursor-pointer hover:border-zinc-100 transform-border`}>
            <div className={`w-4 ${color}`} />
            <div className="text-zinc-100 space-y-1 px-5 py-3 w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">{ cardTitle ? cardTitle : "Matematicas nivel 2"}</h2>
                    <p className="text-sm text-zinc-400">{formatDate(creationDate)}</p>
                </div>
                <p className=" leading-4 text-sm text-zinc-300">{ cardDescription ? cardDescription : "Documento para estudiar matematicas de nivel 2" }</p>
                <div className="w-full h-0.5 my-3 bg-zinc-700 rounded-2xl"/>
                <div className="">
                    <div className="flex items-center space-x-1">
                        <FileText className="size-3"/>
                        <p className="text-xs text-zinc-400">{ fileName ? fileName.slice(0, 25) : "Manual_matematicas_2.pdf"}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Files className="size-3"/>
                        <p className="text-xs text-zinc-400">{ numPage ? numPage : 48 } páginas</p>
                    </div>
                </div>
            </div>
        </div>
    )
};