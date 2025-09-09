import { useState } from "react";
import { useNavigate } from "react-router-dom";

import lupa from '../assets/lupa.png';
import toyotaLogo from '../assets/toyota-logo.jpg';
import hyundaiLogo from '../assets/hyundai-logo.png';
import volksLogo from '../assets/volkswagen-logo.webp';
import jeepLogo from '../assets/jeep-logo.jpg';
import fiatLogo from '../assets/fiat-logo.jpg';

import { Main, Container, Header, Title, Subtitle, Search, Input, Botao, Imagem, Section, SectionTitle, Grid, Card, CardIcon, CardTitle, CardText, MarcaSection, MarcaTitle, MarcaGrid, MarcaLogo, Pulse, Footer} from './HomePage.styled';

const marcas = [
  { id: 1, name: 'Toyota', logo: toyotaLogo },
  { id: 2, name: 'Hyundai', logo: hyundaiLogo },
  { id: 3, name: 'Volkswagen', logo: volksLogo  },
  { id: 4, name: 'Jeep', logo: jeepLogo  },
  { id: 5, name: 'Fiat', logo: fiatLogo  },
];

const Cards = [
  {
    id: 1,
    icon: '●',
    title: 'Análise de Dados',
    text: 'Conectamos pontos e processamos informações para encontrar padrões onde outros não veem.'
  },
  {
    id: 2,
    icon: '⟡',
    title: 'Fluxo Contínuo',
    text: 'Nossa tecnologia evolui a cada interação, aprendendo e adaptando-se para um resultado mais preciso.'
  },
  {
    id: 3,
    icon: '◎',
    title: 'Foco no Essencial',
    text: 'Simplificamos a complexidade, entregando apenas o que é relevante para sua busca.'
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const Busca = () => {
    if (query.trim()) {
      navigate(`/busca?query=${encodeURIComponent(query)}`);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") Busca();
  };

  return (
    <Container>
      <Header>
        <h2>Web<span>Car</span></h2>
        <Pulse /> 
      </Header>

      <Main>
        <Title>O carro certo. Mais rápido.</Title>
        <Subtitle>Encontre o carro ideal usando inteligência artificial ✨</Subtitle>
        <Search>
          <Input
            type="text"
            placeholder="O que está buscando hoje?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleEnter}
          />
          <Botao onClick={Busca}><Imagem src={lupa} alt="lupa de pesquisa" /></Botao>
        </Search>
      </Main>

      <MarcaSection>
        <MarcaTitle>Marcas de Confiança</MarcaTitle>
        <MarcaGrid>
          {marcas.map(marca => (
            <MarcaLogo key={marca.id} src={marca.logo} alt={`${marca.name} Logo`} />
          ))}
        </MarcaGrid>
      </MarcaSection>
      
      <Section>
        <SectionTitle>Por que usar nossa IA?</SectionTitle>
        <Grid>
          {Cards.map(card => (
            <Card key={card.id}>
              <CardIcon>{card.icon}</CardIcon>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
            </Card>
          ))}
        </Grid>
      </Section>
      
      <Footer>
        <p>© Desenvolvido por <a href="https://bento.me/saulgabriel" target='blank'>Saul Gabriel</a></p>
      </Footer>
    </Container>
  );
}