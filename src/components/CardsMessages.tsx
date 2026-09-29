export function MensajeRespuesta(){
    return (
        <div className={`bg-amber-500 rounded-xl p-2 left-0 w-fit justify-self-start`}>
            <p className={`text-zinc-100 text-sm`}>Mensaje Respuesta</p>
        </div>
    );
};

export function MensajePregunta(){
    return (
        <div className={`bg-zinc-700 rounded-xl p-2 right-0 w-fit justify-self-end`}>
            <p className={`text-zinc-100 text-sm text-right`}>Mensaje Pregunta</p>
        </div>
    );
};