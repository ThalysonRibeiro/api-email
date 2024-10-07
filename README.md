# API de Envio de E-mails

Esta é uma API simples para envio de e-mails construída com Node.js e Express, utilizando o Nodemailer para gerenciar o envio de mensagens.

## Funcionalidades

- Recebe dados de formulário (nome, email, mensagem)
- Envia e-mails usando SMTP (Gmail ou outro provedor)
- Gerenciamento de erro e sucesso
- Suporte a CORS para integração com frontend

## Pré-requisitos

- Node.js
- npm ou yarn

## Instalação

1. Clone o repositório
```bash
git clone [URL_DO_SEU_REPOSITÓRIO]
cd [NOME_DO_DIRETÓRIO]
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
PORT=3000
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USER=seu-email@gmail.com
MAIL_PASS=sua-senha-de-app
MAIL_RECEIVER=email-destino@exemplo.com
```

## Estrutura do Projeto

```
src/
├── config/
│   └── mail.js         # Configurações do serviço de e-mail
├── controllers/
│   └── emailController.js  # Lógica de controle para envio de e-mails
├── routes/
│   ├── emailRoutes.js  # Rotas relacionadas a e-mail
│   └── index.js        # Arquivo de rotas principal
├── .env.example        # Exemplo de variáveis de ambiente
├── .gitignore         # Arquivos e pastas ignorados pelo git
├── README.md          # Este arquivo
├── package-lock.json  # Lock file das dependências
└── package.json       # Configurações e dependências do projeto
```

### Descrição dos Diretórios

- **config/**: Contém arquivos de configuração
  - `mail.js`: Configurações do serviço de e-mail (Nodemailer)
  
- **controllers/**: Contém a lógica de negócios
  - `emailController.js`: Gerencia as operações de envio de e-mail
  
- **routes/**: Define as rotas da API
  - `emailRoutes.js`: Rotas específicas para funcionalidades de e-mail
  - `index.js`: Arquivo principal de rotas

### Arquivos Principais

- **.env.example**: Template para as variáveis de ambiente necessárias
- **.gitignore**: Lista de arquivos e pastas ignorados pelo git
- **package.json**: Define as dependências e scripts do projeto

## Como usar

1. Inicie o servidor
```bash
npm start
```

2. Faça uma requisição POST para `/send` com o seguinte formato:
```json
{
  "nome": "Nome do Remetente",
  "email": "email@exemplo.com",
  "mensagem": "Conteúdo da mensagem"
}
```

### Exemplo de resposta

Sucesso (200):
```json
{
  "message": "E-mail enviado com sucesso!"
}
```

Erro (500):
```json
{
  "error": "Erro ao enviar e-mail."
}
```

## Configuração do Gmail

Se você estiver usando o Gmail, certifique-se de:
1. Ativar a autenticação de dois fatores
2. Gerar uma senha de aplicativo
3. Usar essa senha no MAIL_PASS do arquivo .env

## Tecnologias utilizadas

- Express.js
- Nodemailer
- dotenv
- body-parser
- cors

## Contribuindo

Sinta-se à vontade para enviar pull requests. Para mudanças importantes, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
