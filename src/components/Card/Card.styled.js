import styled from 'styled-components';

const colors = {
    background: "#FAFAFA",
    dark: "#343a40",
    darkgray: "#555555",
    gray: "#adb5bd",
    blue: "#4D85FD",
    white: "#FFFFFF"
};

export const CardWrapper = styled.div`
    background-color: ${colors.white};
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
`;

export const CarImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const CarName = styled.h3`
    margin: 0 0 8px;
    font-size: 22px;
    font-weight: 600;
    color: ${colors.dark};
`;

export const CarModel = styled.p`
    margin: 0 0 10px;
    font-size: 16px;
    color: ${colors.darkgray};
`;

export const CarPrice = styled.h4`
    margin: auto 0 8px 0; 
    font-size: 24px;
    font-weight: 600;
    color: ${colors.blue};
`;

export const CarLocation = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${colors.gray};
`;

export const CarYear = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${colors.gray};
`;

export const CarType = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${colors.gray};
`;