import styled from 'styled-components';

const colors = {
    dark: "#343a40",
    darkgray: "#555555",
    clear: "#EFEFEF",
    blue: "#4D85FD",
    white: "#FFFFFF"
};

export const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    padding: 20px 25px;
    border-bottom: 1px solid ${colors.clear};
    background-color: ${colors.white};

    h2 {
        color: ${colors.dark};
    }
`;


export const MainContainer = styled.div`
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    flex-grow: 1;
`;

export const BackButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${colors.clear};
    color: ${colors.dark};
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #d1d1d1;
    }
`;

export const MainSection = styled.div`
    background-color: ${colors.white};
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    padding: 40px;
    display: flex;
    gap: 40px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
        gap: 20px;
    }
`;

export const ImageSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainImage = styled.img`
    width: 100%;
    max-height: 450px;
    object-fit: contain;
    border-radius: 8px;
`;

export const ThumbnailGallery = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;
    overflow-x: auto;
    padding-bottom: 10px;
    
    img {
        width: 100px;
        height: 70px;
        object-fit: cover;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.2s, border 0.2s;
        border: 2px solid transparent;
        
        &:hover {
            transform: scale(1.05);
            border-color: ${colors.blue};
        }
    }
`;

export const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 10px;
    
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

export const Price = styled.p`
    font-size: 32px;
    font-weight: 600;
    color: ${colors.blue};
    margin-bottom: 20px;
`;

export const Buttons = styled.div`
    display: flex;
    margin-top: 15px;

    a {
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        transition: background 0.2s;
        width: 100%;
        text-align: center;
        color: ${colors.white};
        text-decoration: none;

        &:hover {
            opacity: 0.9;
        }
    }

    .contact-btn {
        background-color: ${colors.blue};
        
    }
`;

export const DetalhesSection = styled.div`
    margin-top: 30px;
`;

export const Detalhes = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    background-color: ${colors.background};
    border-radius: 8px;

    h3 {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 600;
    }

    p {
        margin: 5px 0;
        font-size: 15px;
        color: ${colors.darkgray};
    }

    strong {
        font-weight: 600;
    }
`;


export const ErrorContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    font-size: 24px;
    color: #e74c3c;
    text-align: center;
`;

export const Footer = styled.footer`
    color: color: ${colors.darkgray};;
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    border-top: 1px solid ${colors.clear};

    a {
      color: ${colors.blue};
      text-decoration: none;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
`;