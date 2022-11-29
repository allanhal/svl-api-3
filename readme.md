1 - Github -> criar o arquivo readme.md

2 - clone do projeto
 -> git clone [url do projeto]

3 - Iniciando o projeto dentro da pasta
 -- npm init -y

4 - Instalar o nodemon
  - npm i nodemon -D -S

4.1 - Configurar o package.json "start"  e adicionar no scripts "start": "nodemon server.js"

5 - Instalar o Express e o Mogoose
 - npm i express mongoose -S

6 - Criar o arquivo server.js na raiz

7 - Iniciar o server.js utilizando o Express

8 - Antes de subir o projeto criar o arquivo .gitignore 

9 - Configurar a base no mongo (Atlas)

# Config o Banco de Dados(MongoDB)

## Criar o arquivo de conexão usando o mongoose

### Criar uma pasta config na raiz com o arquivo db.js


# Configuração do Banco (Mongo Atlas)

1 - Entrar no Mongo DB Atlas 
 
 - O Mongo Db Atlas é um banco de dados na nuvem (cloud) não relacional que usa o conceito de documentos e não de tabelas.
 -  No banco de dados não relacional usamos as collections que são semelhantes as tabelas do banco relacional. As collections são em formato JSON.


 2 - Passo a passo para criar o banco de dados no Mongo Atlas.

  - New project
  - Create Database
  - Nome do projeto
  - Passo a passo da criação de um Cluster, no caso escolhe o Free
  - Provedor do Cluster (AWS, Google Cloud, Azure, etc...)  
  - Escolher a região, no caso São Paulo.
  - Escolher o Cluster Name, no caso do nosso projeto o Cluster Name é o svl-db
  - Create Cluster
  - Configuração  user/password
    - user: fs01
    - password: fs01
  - create user  
  - IP do banco de dados
  -  add my current ip address
  - Finish and close
  - Go to database

  - Browse Collections : Listar os bancos de dados deste Cluster
  - add my own data

  - Database Collection

  - {
    "id" : gerado automaticamente,
    "titulo" : "titulo 01",
    "ano" : 2015,
    "autor" :  "autor 01",
    "editora" : "editora 01",
    "numeroPag" : 125
  }

  - Criar a pasta /config e dentro dela o arquivo db.js

  - Importar o mongoose ---  mongoose.connect()


  - No Mongo Atlas 
    - Databases
    - Connect -> Mongo Db native drivers
    - copiar a string de conexão Ex: mongodb+srv://fs01:<password>@svl-db.lnj91aw.mongodb.net/?retryWrites=true&w=majority

    - Importar o arquivo db.js no server.js











