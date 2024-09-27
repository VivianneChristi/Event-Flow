
# Event Flow

## Descrição

**Event Flow** é uma aplicação projetada para gerenciar eventos e seus participantes. Com esta aplicação, os usuários podem criar, ler, atualizar e excluir eventos e participantes, além de gerenciar as associações entre eles. A ferramenta visa facilitar a organização de eventos e a gestão de inscrições, garantindo que cada evento tenha um controle eficiente dos participantes.

## Funcionalidades

- **Gerenciamento de Eventos**:
  - Criar novos eventos.
  - Listar todos os eventos disponíveis.
  - Atualizar informações de eventos existentes.
  - Excluir eventos.

- **Gerenciamento de Participantes**:
  - Criar novos participantes.
  - Listar todos os participantes cadastrados.
  - Atualizar informações de participantes.
  - Excluir participantes.

- **Associações**:
  - Listar todos os participantes de um evento específico.
  - Consultar participantes por evento utilizando o `eventoId`.

## Tecnologias Utilizadas

- **Node.js**: Para o backend.
- **Express**: Framework para construção de APIs.
- **Sequelize**: ORM para interação com o banco de dados.
- **MySQL**: Sistema de gerenciamento de banco de dados.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

## Dependências

As dependências do projeto estão listadas no arquivo `package.json`:

```json
{
  "dependencies": {
    "express": "^4.x.x",
    "mysql2": "^2.x.x",
    "sequelize": "^6.x.x"
  },
  "devDependencies": {
    "nodemon": "^2.x.x"
  }
}
```

## Estrutura do Projeto

```
Event-Flow/
├── controller/
│   ├── eventoController.js
│   └── participanteController.js
├── models/
│   ├── eventos.js
│   └── participantes.js
├── router/
│   ├── eventoRouter.js
│   └── participanteRouter.js
├── config/
│   └── database/
│       └── database.js
├── package.json
└── server.js
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/Event-Flow.git
   ```
   
2. Navegue até o diretório do projeto:
   ```bash
   cd Event-Flow
   ```
   
3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure o banco de dados no arquivo `config/database/database.js` com suas credenciais.

5. Inicie o servidor:
   ```bash
   npm start
   ```

## Rotas da API

### Eventos
- `GET /evento`: Listar todos os eventos.
- `POST /evento`: Criar um novo evento.
- `GET /evento/:id`: Buscar detalhes de um evento específico.
- `PUT /evento/:id`: Atualizar um evento.
- `DELETE /evento/:id`: Excluir um evento.

### Participantes
- `GET /participante`: Listar todos os participantes.
- `POST /participante`: Criar um novo participante.
- `GET /participante/:id`: Buscar detalhes de um participante específico.
- `PUT /participante/:id`: Atualizar um participante.
- `DELETE /participante/:id`: Excluir um participante.

### Rotas Específicas
- `GET /evento/:id/participante`: Listar todos os participantes de um evento específico.
- `GET /participante/por-evento/:eventoId`: Listar todos os participantes de um evento específico usando o `eventoId`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou um pull request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato com [viviannec.mferreira].
