import styled, { keyframes } from "styled-components";

const colors = {
  background: "#FAFAFA",
  dark: "#343a40",
  clear: "#EFEFEF",
  darkgray: "#555555",
  blue: "#4D85FD",
  white: "#FFFFFF"
};

// animação do pulso
const pulse = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(77, 133, 253, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(77, 133, 253, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(77, 133, 253, 0); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 75vh;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  padding: 20px 25px;
    background-color: ${colors.white};

  h2 {
    color: ${colors.dark};
  }
`;

export const Pulse = styled.div`
  width: ${props => props.size || '30px'}; 
  height: ${props => props.size || '30px'}; 
  border-radius: 50%;
  background-color: ${colors.blue};
  animation: ${pulse} 2s infinite;
  margin-left: 20px;
`;

export const Title = styled.h1`
  font-size: 56px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-block: 20px;
  max-width: 600px;
  color: ${colors.darkgray};
`;

export const Search = styled.div`
  display: flex;
  background: ${colors.background};
  padding: 12px 18px;
  border-radius: 50px;
  width: 80%;
  max-width: 700px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid ${colors.clear};

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none;
  color: ${colors.darkgray};
  font-size: 16px;
`;

export const Botao = styled.button`
  border: none;
  cursor: pointer;
  background: ${colors.blue};
  padding: 10px 12px;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3a75e8;
  }
`;

export const Imagem = styled.img`
  width: 24px;
`;

// Marcas
export const MarcaSection = styled.section`
  padding: 50px 20px;
`;

export const MarcaTitle = styled.h3`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const MarcaGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const MarcaLogo = styled.img`
  width: 120px;
  height: 72px;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter 0.3s, opacity 0.3s;
  border-radius: 4px;
  
  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

/*Porque... */

export const Section = styled.section`
  padding: 80px 20px;
  background-color: ${colors.background};
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: ${colors.white};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const CardIcon = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${colors.blue};
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: ${colors.darkgray};
`;

export const Footer = styled.footer`
  color: ${colors.darkgray};
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