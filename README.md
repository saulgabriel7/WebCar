# Web Car: Buscador de Carros

Bem-vindo ao Web Car! Este projeto é um buscador de carros que oferece uma experiência de usuário intuitiva e inteligente.

A aplicação está disponível em:

[projeto-carros.vercel.app](https://projeto-carros.vercel.app)

Atualizações Recentes no Projeto

Backend com Express integrado via Vercel como serverless function, permitindo que a IA interprete consultas sem expor a chave da API.

Integração com Google Gemini (IA) para converter a busca do usuário em filtros estruturados (nome, localização, preço, tipo e ano).

Busca avançada por filtros:

Nome/Marca

Localização

Preço Máximo

Tipo

Ano do veículo

Interface de filtros dinâmica: filtros aplicados aparecem no sidebar e podem ser removidos individualmente ou todos de uma vez.

Correção na busca por ano: resultados agora exibem somente veículos do ano especificado.

Frontend responsivo com React + Styled Components + react-router-dom.

Deploy seguro na Vercel, utilizando variáveis de ambiente para a chave da API.

Tecnologias Utilizadas

React – SPA e gerenciamento de componentes

React Router DOM – navegação entre páginas

Styled Components – estilização com CSS-in-JS

Express – backend para processar requisições da IA

Google Generative AI (Gemini) – interpretação inteligente das buscas

Vite – build rápido para desenvolvimento