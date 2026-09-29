import { ArrowLeft, SendHorizonal } from "lucide-react";
import { MensajeRespuesta, MensajePregunta } from "../components/CardsMessages";
import { Link } from "react-router-dom";
import { useState } from "react";



export default function ChatView(){
    const [chatHistorial, setChatHistorial] = useState<string[]>([]);

    return (
        <div className="text-zinc-100 h-screen overflow-hidden flex flex-col">
            <section className="py-2 w-full flex items-center justify-start space-x-4 border-amber-100 bg-zinc-900">
                <div className={`w-1 h-10 bg-amber-400`} />
                <Link to={"/dashboard"}>
                    <ArrowLeft className={`size-5 cursor-pointer hover:text-amber-400`}/>
                </Link>
                <h1 className="">Titulo Espacio</h1>
            </section>
            <main className="flex-1 border-y border-zinc-800 p-3 w-full space-y-2">
                <MensajePregunta />
                <MensajeRespuesta />
            </main>
            <section className="py-3 px-3 bg-zinc-900">
                <form className="flex justify-center items-center gap-2">
                    <textarea
                        placeholder="Escribe tu pregunta"
                        className="border border-zinc-600 w-full rounded-xl p-2 resize-none"
                    />
                    <label 
                        htmlFor="button-enviar"
                        className={`cursor-pointer mr-5 p-2 rounded-xl ${"bg-amber-400"} hover:bg-amber-500`}
                        title="Enviar"
                    >
                        <SendHorizonal className="size-7"/>
                    </label>
                    <input 
                        id="button-enviar"
                        type="submit" 
                        hidden
                    />
                </form>
            </section>
        </div>
    )
};