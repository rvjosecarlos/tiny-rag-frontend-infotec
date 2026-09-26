import { Route, Routes } from "react-router-dom";
import LayoutApp from "../layout/LayoutApp";
import CardEntrar from "./components/CardEntrar";
import CardEspacioTrabajo from "./components/CardEspacioTrabajo";


export default function Router(){
    return (
        <Routes>
            <Route element={<LayoutApp />}>
                <Route path="/"element={<CardEntrar />}/>
                <Route path="/dashboard" element={<CardEspacioTrabajo />}/>
            </Route>
        </Routes>
    );
}