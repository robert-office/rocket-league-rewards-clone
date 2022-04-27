import { BrowserRouter, Routes, Route } from "react-router-dom";
import { My404 } from "./pages/404";
import { Home } from "./pages/home";

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            
                <Route path="/*" element={<My404/>} />
            </Routes>
        </BrowserRouter>
    )
}