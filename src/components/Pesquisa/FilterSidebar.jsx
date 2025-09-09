import React from 'react';
import { 
  SidebarWrapper, FilterSection, FilterHeader, AppliedFilters, 
  AppliedFilterTag, ClearFiltersButton, SearchInput 
} from './FilterSidebar.styled';

const FilterSidebar = ({ filters, onInputChange, setFilters }) => {
  const handleClearFilter = (name) => {
    setFilters((prev) => ({ ...prev, [name]: '' }));
  };

  const handleClearAll = () => {
    setFilters({ name: '', location: '', price: '', year: '', type: '' });
  };

  const noFiltersApplied = !filters.name && !filters.location && !filters.price && !filters.year && !filters.type;

  return (
    <SidebarWrapper>
      <FilterHeader>
        <h3>Filtros aplicados</h3>
        <ClearFiltersButton 
          onClick={handleClearAll} 
          disabled={noFiltersApplied}
        >
          Limpar todos
        </ClearFiltersButton>
      </FilterHeader>
      
      <AppliedFilters>
        {filters.name && (
          <AppliedFilterTag>
            {filters.name}
            <span onClick={() => handleClearFilter('name')}>❌</span>
          </AppliedFilterTag>
        )}
        {filters.location && (
          <AppliedFilterTag>
            {filters.location}
            <span onClick={() => handleClearFilter('location')}>❌</span>
          </AppliedFilterTag>
        )}
        {filters.price && (
          <AppliedFilterTag>
            Até R$ {Number(filters.price).toLocaleString('pt-BR')}
            <span onClick={() => handleClearFilter('price')}>❌</span>
          </AppliedFilterTag>
        )}
        {filters.year && (
          <AppliedFilterTag>
            Ano {filters.year}
            <span onClick={() => handleClearFilter('year')}>❌</span>
          </AppliedFilterTag>
        )}
        {filters.type && (
          <AppliedFilterTag>
            {filters.type}
            <span onClick={() => handleClearFilter('type')}>❌</span>
          </AppliedFilterTag>
        )}
      </AppliedFilters>

      <FilterSection>
        <h4>Marca ou Modelo</h4>
        <SearchInput
          type="text"
          name="name"
          placeholder="Digite a marca ou modelo..."
          onChange={onInputChange}
          value={filters.name}
        />
      </FilterSection>
      
      <FilterSection>
        <h4>Localização</h4>
        <SearchInput
          type="text"
          name="location"
          placeholder="Digite a cidade..."
          onChange={onInputChange}
          value={filters.location}
        />
      </FilterSection>

      <FilterSection>
        <h4>Preço Máximo</h4>
        <SearchInput
          type="number"
          name="price"
          placeholder="Preço máximo..."
          onChange={onInputChange}
          value={filters.price}
        />
      </FilterSection>

      <FilterSection>
        <h4>Ano</h4>
        <SearchInput
          type="number"
          name="year"
          placeholder="Ano do veículo..."
          onChange={onInputChange}
          value={filters.year}
        />
      </FilterSection>

      <FilterSection>
        <h4>Tipo</h4>
        <SearchInput
          type="text"
          name="type"
          placeholder="SUV, Sedan, Hatch..."
          onChange={onInputChange}
          value={filters.type}
        />
      </FilterSection>
    </SidebarWrapper>
  );
};

export default FilterSidebar;
