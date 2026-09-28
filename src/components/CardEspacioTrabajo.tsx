import { Files, FileText } from "lucide-react";

type CardEspacioProps = {
    titulo?: string,
    descripcion?: string,
    metadataNombreArchivo?: string,
    metadataNumPaginas?: number
};

export default function CardEspacioTrabajo( { titulo, descripcion, metadataNombreArchivo, metadataNumPaginas }: CardEspacioProps ){
    // titulo, descripcion, datos del documento son variables, tambien la clase del color del div es variable

    return(
        <div className="flex justify-center w-60 border border-zinc-600 rounded-r-xl bg-zinc-800 hover:border-blue-500 hover:cursor-pointer">
            <div className=" w-4 bg-blue-500">
            </div>
            <div className="text-zinc-100 space-y-1 px-5 py-3">
                <h2 className="text-xl font-bold">{ titulo ? titulo : "Matematicas nivel 2"}</h2>
                <p className=" leading-4 text-sm text-zinc-300">{ descripcion ? descripcion : "Documento para estudiar matematicas de nivel 2" }</p>
                <div className="w-full h-0.5 my-3 bg-zinc-700 rounded-2xl"/>
                <div className="">
                    <div className="flex items-center space-x-1">
                        <FileText className="size-3"/>
                        <p className="text-xs text-zinc-400">{ metadataNombreArchivo ? metadataNombreArchivo : "Manual_matematicas_2.pdf"}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Files className="size-3"/>
                        <p className="text-xs text-zinc-400">{ metadataNumPaginas ? metadataNumPaginas : 48 } páginas</p>
                    </div>
                </div>
            </div>
        </div>
    )
};