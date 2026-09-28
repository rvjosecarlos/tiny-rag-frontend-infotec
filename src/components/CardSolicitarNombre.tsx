import { useState } from "react";
import CardGeneral from "./CardGeneral";

type CardSolicitarNombreProps = {
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CardSolicitarNombre({ setVisibleModal }: CardSolicitarNombreProps){
    const [nombre, setNombre] = useState("");

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!nombre) {
            alert("Por favor, escribe tu nombre o apodo.");
            return;
        };
        localStorage.setItem("nombreUsuario", nombre);
        setVisibleModal(true);
    };

    return (
        <CardGeneral>
            <form onSubmit={ handleSubmit}>
                <h2 className="text-zinc-100 text-lg font-bold">¿Cómo te llamas?</h2>
                <p className="text-zinc-300 text-sm">Lo usaremos para identificar tus espacios de estudio.</p>
                <div className="w-full mt-3 flex-col space-y-3">
                    <input 
                        className="block w-full p-2 rounded-xl text-zinc-100 border border-zinc-500 font-semibold"
                        type="text" 
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                        placeholder="Aquí tu nombre o apodo"
                    />
                    <input 
                        className="block font-bold text-center w-full p-2 bg-zinc-100 rounded-xl cursor-pointer"
                        type="submit" 
                        value={"Continuar"}
                    />
                </div>
            </form>
        </CardGeneral>
    )
};