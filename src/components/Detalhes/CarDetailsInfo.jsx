import React from 'react';
import { Info, Title, Price, Buttons, DetalhesSection, Detalhes } from '../../pages/CarDetailPage.styled';

const formatPrice = (price) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

export default function CarDetailsInfo({ car }) {
  return (
    <Info>
      <Title>{car.Name} {car.Model}</Title>
      <Price>{formatPrice(car.Price)}</Price>

      <Buttons>
        <a 
          href="https://wa.me/10978654321" 
          target="_blank" 
          className="contact-btn"
        >
          Entrar em contato
        </a>
      </Buttons>


      <DetalhesSection>
        <Detalhes>
          <h3>Detalhes do Veículo</h3>
          <p><strong>Marca:</strong> {car.Name}</p>
          <p><strong>Modelo:</strong> {car.Model}</p>
          <p><strong>Preço:</strong> {formatPrice(car.Price)}</p>
          <p><strong>Localização:</strong> {car.Location}</p>
          <p><strong>Ano:</strong> {car.Year}</p>
          <p><strong>Tipo:</strong> {car.Type}</p>
        </Detalhes>
      </DetalhesSection>
    </Info>
  );
}