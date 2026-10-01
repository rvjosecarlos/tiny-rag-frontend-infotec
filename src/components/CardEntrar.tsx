import { BookText } from "lucide-react";
import { Link } from "react-router-dom";

export default function CardEntrar(){

    return (
        <div className="mx-2 md:mx-auto md:w-lg bg-zinc-800 border-zinc-600 border py-10 rounded-xl">
            <div className="p-3 bg-blue-900 rounded-xl w-fit m-auto">
                <BookText className="text-blue-500"/>
            </div>
            <div className="text-center space-y-2">
                <h1 className="text-2xl text-zinc-100 font-semibold">DocuStudy Sensei ⛩️</h1>
                <p className="text-zinc-100 w-2/3 mx-auto">Sube tus documentos y conversa con ellos para estudiar mas rápido.</p>
            </div>
            <div className="text-center my-7">
                <Link to="/dashboard" className="bg-zinc-100 py-2 px-4 rounded-lg font-semibold border">
                    Entrar
                </Link>
            </div>
        </div>
    )
};