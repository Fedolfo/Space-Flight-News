# Fullstack Challenge 🏅 2021 - Space Flight News

# Projeto Space Flight News

## Sobre o projeto

O Projeto Space Flight News e uma aplicação Full Stack onde e criado uma REST API e o Front-end(React) que utiliza os dados do projeto Space Flight News, uma API pública com informações relacionadas a voos espaciais.

O objetivo e exibir os dados dos artigos, com o título, imagem, resumo e data de publicação. Além de funcionalidades como filtrar por artigos novos e antigos e filtragem de busca por pesquisa.

## Tecnologias utilizadas no back-end e metodologias

* NodeJs
* Express
* Programação orientada a objetos
* TypeScript
* MongoDb
* Node-cron
* Cross-fetch
* Docker
* S.O.L.I.D
* Factories
* Jest

## Tecnologias utilizadas no front-end

* TypeScript
* React
* Context api
* Sass
* React-router-dom
* Axios

## Para ser feito a instalação do projeto em sua máquina dockerizado

É necessário ter [docker](https://docs.docker.com/get-docker/) e [docker-compose](https://docs.docker.com/compose/install/)

1. Clone o repositório
```bash
  git clone git@github.com:Fedolfo/Space-Flight-News.git
```
2. Entre no arquivo
```bash
  cd Space-Flight-News
```
3. Nele vai ter o back-end e front-end
```bash
  cd back-end ou cd front-end
```

⚠️ Para popular o banco manualmente, entre na pasta #src/main/factories/controllers/articles-controller/load-articles-controller.ts, lá tera a informação de como fazer isso.

4. Apos entrar na pasta back-end, suba o containêr do back-end
```bash
  npm run compose:up ou docker-compose up -d --build
```
5. No momento que subir o containêr retornará essa messagem no terminal
```bash
  Creating mongo-container-space-flight ... done
  Creating api-container-space-flight ... done
```

⚠️ Front-end sem dockerização!

6. Apos entrar na pasta front-end, instale as dependencias e inicie o servidor
```bash
  npm install && npm start
```

7. Para acessar a aplicação do back-end, digite no terminal "npm run start:nodemon"

8. Url do back-end
```bash
  back-end: localhost:5050/articles
```
9. Url do back-end com paginação
```bash
  back-end: localhost:5050/articles?p=10
```
9. Url do front-end com paginação
```bash
  front-end: localhost:3000
```
10.Para remover a API do back-end
```bash
  docker-compose down --rmi local --volumes --remove-orphans
```

### Para rodar sem dockerização

1. Clone o repositório
```bash
  git clone git@github.com:Fedolfo/Space-Flight-News.git
```
2. Entre no arquivo
```bash
  cd Space-Flight-News
```
3. Nele vai ter o back-end e front-end
```bash
  cd back-end ou cd front-end
```
4. Instale as dependências
```bash
  npm install
```
5. Inicie o aplicativo back-end
```bash
  npm run build && npm run start
```
6. Inicie o aplicativo front-end
```bash
  npm run start
```

**This is a challenge by** [Coodesh](https://coodesh.com/)