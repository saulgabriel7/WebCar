import styled from 'styled-components';

const colors = {
    background: "#FAFAFA",
    dark: "#343a40",
    clear: "#EFEFEF",
    blue: "#4D85FD",
    white: "#FFFFFF"
};

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`;

export const FilterHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    h3 {
        font-size: 20px;
        font-weight: 600;
        color: ${colors.dark};
    }
`;

export const AppliedFilters = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const AppliedFilterTag = styled.span`
    background-color: ${colors.clear};
    color: ${colors.dark};
    border: 1px solid ${colors.clear};
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease;
    
    span {
        font-weight: bold;
        margin-left: 5px;
        color: ${colors.dark};
        opacity: 0.7;
    }
    
    &:hover {
        background-color: #d1d1d1;
    }
`;

export const ClearFiltersButton = styled.button`
    background: none;
    border: none;
    color: ${colors.blue};
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;
    
    &:hover {
        text-decoration: underline;
    }
`;

export const FilterSection = styled.div`
    padding-bottom: 15px;
    &:last-child {
        border-bottom: none;
    }
    h4 {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 10px;
        color: ${colors.dark};
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid ${colors.clear};
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 15px;
    color: ${colors.dark};
    background-color: ${colors.background};
    
    &:focus {
        outline: none;
        border-color: ${colors.blue};
        box-shadow: 0 0 0 2px rgba(77, 133, 253, 0.2);
    }
`;