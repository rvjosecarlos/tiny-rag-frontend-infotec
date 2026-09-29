export default function LLMChatResponse({ mensaje }: { mensaje:string }){
    return(
        <div className="h-screen fixed w-full flex justify-center items-center backdrop-blur-md">
            <p className="bg-zinc-800 p-3 rounded-xl md:w-3/4 m-10 border border-zinc-100">{mensaje}</p>
        </div>
    );
};