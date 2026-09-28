import { Outlet } from "react-router-dom";

export default function LayoutApp(){
    return (
        <>
            <div className="bg-zinc-950 h-screen w-full">
                <Outlet />
            </div>
        </>
    );
};