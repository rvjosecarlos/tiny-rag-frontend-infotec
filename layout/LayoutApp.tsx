import { Outlet } from "react-router-dom";

export default function LayoutApp(){
    return (
        <>
            <div className="">
                <Outlet />
            </div>
        </>
    );
};