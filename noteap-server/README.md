# noteap-server

Este projeto é um servidor Node.js para gerenciamento de notas de estudo, integrando geração automática de conteúdo via IA (Google Gemini) e persistência em banco de dados MongoDB.

## Funcionalidades

- **Adicionar nota**: Cria uma nota automaticamente com texto gerado pela IA a partir de um título.
- **Listar todas as notas**: Retorna todas as notas salvas.
- **Listar nomes das notas**: Retorna apenas os títulos das notas.
- **Deletar todas as notas**: Remove todas as notas do banco de dados.
- **Health check**: Endpoint para verificar se o servidor está online.

## Estrutura de Pastas

- `Db/`: Modelos e funções para interação com o MongoDB.
- `IA/`: Integração com a IA generativa do Google.
- `Routes/`: Rotas da API Express.
- `main.js`: Inicialização do servidor e configuração das rotas.

## Rotas da API

- `POST /add?title=...` — Adiciona uma nova nota com texto gerado pela IA.
- `GET /all` — Retorna todas as notas.
- `GET /names` — Retorna apenas os títulos das notas.
- `GET /delete` — Deleta todas as notas.
- `GET /health` — Verifica o status do servidor.

## Como rodar

1. Instale as dependências:

```sh
npm install
```

2. Configure as variáveis de ambiente no arquivo .env:

```plantext
API_KEY=SuaChaveGoogleGenAI
MONGO_KEY=SuaStringDeConexãoMongoDB
```

3. Inicie o servidor:

```sh
npm start
```

O servidor estará disponível em http://localhost:3000.

## Docker

Para rodar com Docker:

```sh
docker build -t noteap-server .
docker run -p 3000:3000 noteap-server
```
