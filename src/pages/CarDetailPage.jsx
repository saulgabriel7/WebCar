import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { carImages } from '../data/carImages.js';
import carsData from '../data/cars.json';
import CarImageGallery from '../components/Detalhes/CarImageGallery';
import CarDetailsInfo from '../components/Detalhes/CarDetailsInfo';

import { PageContainer, BackButton, MainContainer, MainSection, ErrorContainer, Header, Footer } from './CarDetailPage.styled';

const findCarByModel = (model) => carsData.find(c => c.Model === model);

export default function CarDetailPage() {
    const { model } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [mainImg, setMainImg] = useState('');

    useEffect(() => {
        const foundCar = findCarByModel(model);
        if (foundCar) {
            setCar(foundCar);
            setMainImg(carImages[foundCar.ImageKey]);
        }
    }, [model]);


    if (!car) {
        return (
            <ErrorContainer>
                <p>Carro não encontrado 😢</p>
                <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
            </ErrorContainer>
        );
    }

    const thumbnail = [
        carImages[car.ImageKey],
    ];

    return (
        <PageContainer>
            <Header>
                <h2>Web<span>Car</span></h2>
                <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
            </Header>
            <MainContainer>
                <MainSection>
                    <CarImageGallery
                        car={car}
                        thumbnails={thumbnail}
                        mainImg={mainImg}
                        onImageClick={setMainImg}
                    />
                    <CarDetailsInfo car={car} />
                </MainSection>
            </MainContainer>
            <Footer>
                <p>© Desenvolvido por <a href="https://bento.me/saulgabriel" target='blank'>Saul Gabriel</a></p>
            </Footer>
        </PageContainer>
    );
}