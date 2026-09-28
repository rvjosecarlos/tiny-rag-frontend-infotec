import { Route, Routes } from "react-router-dom";
import LayoutApp from "../layout/LayoutApp";
import InicioView from "./views/InicioView";
import DashboarView from "./views/DashboardView";


export default function Router(){
    return (
        <Routes>
            <Route element={<LayoutApp />}>
                <Route path="/"element={<InicioView />}/>
                <Route path="/dashboard" element={<DashboarView />}/>
            </Route>
        </Routes>
    );
}