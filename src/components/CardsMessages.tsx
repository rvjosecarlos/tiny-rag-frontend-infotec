import type { CardStudySpace, MessageChat } from "../schemas/types";

type MensajeProps = {
    mensaje: MessageChat,
    cardStudySpace: CardStudySpace
};

export function MensajeRespuesta({ mensaje, cardStudySpace }: MensajeProps){
    return (
        <div className={`${cardStudySpace.color} rounded-xl p-2 left-0 w-fit justify-self-start md:max-w-2xl`}>
            <p className={`text-zinc-100 text-sm`}>{mensaje.message}</p>
        </div>
    );
};

export function MensajePregunta({ mensaje, cardStudySpace }: MensajeProps){
    return (
        <div className={`bg-zinc-700 rounded-xl p-2 right-0 w-fit justify-self-end md:max-w-2xl`}>
            <p className={`text-zinc-100 text-sm text-right`}>{mensaje.message}</p>
        </div>
    );
};