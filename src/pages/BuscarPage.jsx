import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import carsData from "../data/cars.json";
import FilterSidebar from "../components/Pesquisa/FilterSidebar";
import CarCard from "../components/Card/Card";

import {PageContainer, MainContent, FilterContainer, ResultsContainer, Grid, Titulo, Mensagem, Header, BackButton, Footer } from './BuscarPage.styled';

export default function Buscar() {
    const navigate = useNavigate();
    const locationHook = useLocation();

    const [cars, setCars] = useState([]);
    const [filters, setFilters] = useState({ name: '', location: '', price: '', year: '', type: '' });

    const parseQueryWithAI = async (query) => {
        try {
            const res = await fetch("/api/parseQuery", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query }),
            });
            return await res.json();
        } catch {
            return { name: "", location: "", price: "", year: "" };
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(locationHook.search);
        const q = params.get("query") || "";

        const applyFilters = async () => {
            if (q) {
                const newFilters = await parseQueryWithAI(q);
                setFilters(newFilters);
            }
        };
        applyFilters();
    }, [locationHook.search]);

    const applyFiltersToArray = ({ name = '', location = '', price = '', type = '', year = '' }) => {
    let results = carsData;

    if (name) {
        results = results.filter(c => `${c.Name} ${c.Model}`.toLowerCase().includes(name.toLowerCase()));
    }
    if (location) {
        results = results.filter(c => c.Location?.toLowerCase().includes(location.toLowerCase()));
    }
    if (price) {
        results = results.filter(c => Number(c.Price) <= Number(price));
    }
    if (type) {
        results = results.filter(c => c.Type?.toLowerCase().includes(type.toLowerCase()));
    }
    if (year) {
        results = results.filter(c => Number(c.Year) === Number(year));
    }

    return results;
    };


    useEffect(() => {
        setCars(applyFiltersToArray(filters));
    }, [filters]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <PageContainer>
            <Header>
                <h2>Web<span>Car</span></h2>
                <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
            </Header>
            <MainContent>
                
                <FilterContainer>
                    <FilterSidebar filters={filters} onInputChange={handleInputChange} setFilters={setFilters} />
                </FilterContainer>

                <ResultsContainer>
                    <Titulo>Resultados da Busca</Titulo>
                    <Grid>
                        {cars.length > 0 ? (
                            cars.map((car, i) => <CarCard key={i} car={car} />)
                        ) : (
                            <Mensagem>Nenhum carro encontrado. Atualize os filtros.</Mensagem>
                        )}
                    </Grid>
                </ResultsContainer>
            </MainContent>
            <Footer>
                <p>© Desenvolvido por <a href="https://bento.me/saulgabriel" target='blank'>Saul Gabriel</a></p>
            </Footer>
        </PageContainer>
    );
}