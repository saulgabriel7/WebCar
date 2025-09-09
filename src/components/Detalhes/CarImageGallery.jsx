import React from 'react';
import { ImageSection, MainImage, ThumbnailGallery } from '../../pages/CarDetailPage.styled';

export default function CarImageGallery({ car, thumbnails, mainImg, onImageClick }) {
  return (
    <ImageSection>
      <MainImage src={mainImg} alt={`${car.Name} ${car.Model}`} />
      <ThumbnailGallery>
        {thumbnails.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`Thumbnail ${idx}`} 
            onClick={() => onImageClick(img)} 
          />
        ))}
      </ThumbnailGallery>
    </ImageSection>
  );
}