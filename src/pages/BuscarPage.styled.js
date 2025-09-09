import styled from 'styled-components';

const colors = {
    dark: "#343a40",
    darkgray: "#555555",
    clear: "#EFEFEF",
    blue: "#4D85FD",
    white: "#FFFFFF"
};

export const PageContainer = styled.div`
    color: ${colors.dark};
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

export const MainContent = styled.div`
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
`;

export const Titulo = styled.h1`
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 40px;
    background-color: ${colors.white};
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const ResultsContainer = styled.div`
    flex: 1;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
`;

export const Mensagem = styled.p`
    font-size: 20px;
    text-align: center;
    margin-top: 50px;
    width: 100%;
    color: ${colors.darkgray};
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

export const FilterGroup = styled.div`
    flex-grow: 1;
`;

export const FilterLabel = styled.label`
    font-size: 14px;
    color: ${colors.darkgray};
    margin-bottom: 8px;
    display: block;
`;

export const FilterInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid ${colors.clear};
    border-radius: 8px;
    font-size: 16px;
    color: ${colors.dark};
    background-color: ${colors.background};
    
    &:focus {
        outline: none;
        border-color: ${colors.blue};
        box-shadow: 0 0 0 2px rgba(77, 133, 253, 0.2);
    }
`;

export const FilterSelect = styled.select`
    width: 100%;
    padding: 10px;
    border: 1px solid ${colors.gray};
    border-radius: 8px;
    font-size: 16px;
    color: ${colors.dark};
    background-color: ${colors.background};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: ${colors.blue};
        box-shadow: 0 0 0 2px rgba(77, 133, 253, 0.2);
    }
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