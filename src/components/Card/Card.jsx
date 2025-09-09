import React from 'react';
import { carImages } from '../../data/carImages.js';
import { useNavigate } from "react-router-dom";

import { CardWrapper, CarImage, CardContent, CarName, CarModel, CarPrice, CarLocation,CarYear,CarType } from './Card.styled';

const Card = ({ car }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const navigate = useNavigate();

  return (
    <CardWrapper onClick={() => navigate(`/carro/${car.Model}`)}>
      <CarImage src={carImages[car.ImageKey]} alt={`${car.Name} ${car.Model}`} />
      <CardContent>
        <CarName>{car.Name}</CarName>
        <CarModel>{car.Model}</CarModel>
        <CarPrice>{formatPrice(car.Price)}</CarPrice>
        <CarLocation>Localização: {car.Location}</CarLocation>
        <CarType>Tipo: {car.Type}</CarType>
        <CarYear>Ano: {car.Year}</CarYear>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;