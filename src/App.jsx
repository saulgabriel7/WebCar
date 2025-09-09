// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import CarDetailPage from './pages/CarDetailPage';
import HomePage from "./pages/HomePage";
import Buscar from "./pages/BuscarPage";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="busca" element={<Buscar />} />
            <Route path="/carro/:model" element={<CarDetailPage />} />
        </Routes>
    )
};
