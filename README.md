<h1>QSA info</h1>

<p> 
    Uma aplicação para visualização das informações do QSA (Quadro de Sócios e Administradores) disponíveis nesse link:
https://bit.ly/3cRruVw, de modo que o sistema apresente as informações o mais rápido
possível. 
</p>

<h2> Histórias de usuário: </h2>

<ul>
    <li>
        <p>
            Eu, como administrator de sistema, gostaria de abrir uma tela e visualizar a listagem do quadro societário em ordem de CPF em menos de 1s para uma listagem com 300 registros.
        </p>
    </li>
    <li>
        <p>
            Eu, como administrador do sistema, gostaria de pesquisar o nome de um sócio e visualizar as empresas a que ele está vinculado.
        </p>
    </li>
</ul>

<h2> Arquitetura </h2>
<img src="./diagrams/diagrama.png" alt="..." width="800" height="500">

<p>Sistema composto com os componentes mostrados na figura acima. Sendo executados no Docker.</p>
<ul>
    <li><p>Frontend: Aplicação Node.js, React.js e Vis.js</p></li>
    <li><p>Backend: Aplicação Node.js, Express e Swagger</p></li>
    <li><p>Banco de dados: Um contêiner executando Postgres</p></li>
</ul>

<h2> Requisitos do Sistema </h2>
<ul>
    <li> <p> Docker </p> </li>
    <li> <p> Docker Compose </p> </li>
</ul>

<h2> Comando para criar as tabelas no banco </h2>
<p>Entre na pasta /src/backend e rode o comando:</p>
<blockquote>npx knex migrate:latest</blockquote>

<h2>Comando para rodar o servidor com a aplicação</h2>
<blockquote> docker-compose up </blockquote>

<h3> Para visualizar a documentação da API Rest (Swagger). Acesse o link :</h3>
http://localhost:3333/api-docs

<h3> Para visualizar a aplicação acesse :</h3>
http://localhost:3000
