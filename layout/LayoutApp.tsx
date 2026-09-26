import { Outlet } from "react-router-dom";

export default function LayoutApp(){
    return (
        <>
            <main className="bg-zinc-950 h-screen w-full flex justify-center items-center">
                <Outlet />
            </main>
        </>
    );
};