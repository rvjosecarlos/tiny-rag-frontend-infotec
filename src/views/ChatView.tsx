import { ArrowLeft, SendHorizonal } from "lucide-react";
import { MensajeRespuesta, MensajePregunta } from "../components/CardsMessages";
import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import type { CardStudySpace, MessageChat } from "../schemas/types";
import LLMChatResponse from "../components/LLMChatResponse";
import Spinner from "../components/Spinner";


export default function ChatView(){
    const cardsString = localStorage.getItem("cards");
    const location = useParams();
    const chatHistorialString = localStorage.getItem(location.id!);
    const [chatHistorial, setChatHistorial] = useState<MessageChat[]>(chatHistorialString ? JSON.parse(chatHistorialString) as MessageChat[] : []);
    const [message, setMessage] = useState("");
    const [llmResponse, setLlmResponse] = useState("");
    const [spinner, setSpinner] = useState(false);
    const cards: CardStudySpace[] = cardsString ? JSON.parse(cardsString) : [];
    const cardStudySpace = cards.find( space => space.id === location.id );
    if(!cardStudySpace) return <Navigate to={"/dashboard"}/>

     const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        try{
            e.preventDefault();
            if(!message) return;
            setSpinner(true);
            const newMessage: MessageChat = {
                message,
                ofUser: true,
                id: crypto.randomUUID()
            };
            setChatHistorial([...chatHistorial, newMessage]);
            setMessage("");
            console.log("Nuevo mensaje", message);
            localStorage.setItem(location.id!, JSON.stringify([...chatHistorial, newMessage]));
            const request = { 
                user: cardStudySpace.user, 
                titleCard: cardStudySpace.cardTitle, 
                pregunta: message  
            };
            
            const decoder = new TextDecoder("utf-8");
            const url = `${import.meta.env.VITE_BASE_URL}/api/recuperacion`;
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(request),
                headers:{
                    "Content-Type": "application/json"
                }
            });

            
            for await ( const chunk of response.body! ){
                const texto = decoder.decode(chunk, { stream: true });
                console.log("chunk", texto);
                if(texto.includes("404")) throw new Error("Error al llamar al servicio");
                setLlmResponse((llmResponse) => llmResponse + texto)
            };

            setTimeout(()=>{
                setLlmResponse((llmResponse) => {
                    const newMessageLlm: MessageChat = {
                        message: llmResponse,
                        ofUser: false,
                        id: crypto.randomUUID()
                    };
                    console.log("Respuesta del llm", newMessageLlm);
                    setChatHistorial([...chatHistorial, newMessage, newMessageLlm]);
                    localStorage.setItem(location.id!, JSON.stringify([...chatHistorial, newMessage, newMessageLlm]));
                    setSpinner(false)
                    return ""
                });
            },3000);
        }
        catch(error){
            setSpinner(false);
            alert("Es posible que haya habido un error debido a que el colab se encuentra apagado. Verifica que el backend del colab este operando")
        };
    };


    return (
        <div className="text-zinc-100 overflow-hidden flex flex-col">
            <section className="fixed top-0 py-2 w-full flex items-center justify-start space-x-4 border-amber-100 bg-zinc-900">
                <div className={`w-1 h-10 ${cardStudySpace.color}`} />
                <Link to={"/dashboard"}>
                    <ArrowLeft className={`size-5 cursor-pointer text-zinc-100 hover:text-zinc-500`}/>
                </Link>
                <h1 className="">{cardStudySpace.cardTitle}</h1>
            </section>
            <main className="flex-1 p-3 w-full space-y-2 mt-14 mb-16">
                {
                    chatHistorial.map( (mensaje, id) => mensaje.ofUser ? 
                        <MensajePregunta key={id}  mensaje={mensaje} cardStudySpace={cardStudySpace}/> 
                            : 
                        <MensajeRespuesta key={id}  mensaje={mensaje} cardStudySpace={cardStudySpace}/>)
                }
            </main>
            <section className="fixed bottom-0 w-full py-3 px-3 bg-zinc-900">
                <form 
                    className="flex justify-center items-center gap-2"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Escribe tu pregunta"
                        className="border border-zinc-600 w-full rounded-xl p-2 resize-none"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <label 
                        htmlFor="button-enviar"
                        className={`cursor-pointer mr-5 p-2 rounded-xl ${cardStudySpace.color}`}
                        title="Enviar"
                    >
                        { spinner ? <Spinner /> : <SendHorizonal className="size-7"/> }
                    </label>
                    <input 
                        id="button-enviar"
                        type="submit" 
                        hidden
                        disabled={ spinner }
                    />
                </form>
            </section>
            { llmResponse && <LLMChatResponse mensaje={llmResponse}/> }
        </div>
    )
};