<h1  align="center">< Project progMind /></h1>

 <br>
 <br>
 
 
Sempre vi muitos falarem mal do Java, por esse motivo há algum tempo comecei a estudar e não achei ruim e difícil como dizem, continuei meus estudos até consegui chegar no nível de fazer esse micro-serviço, onde eu conecto o java com outro back-end em Node que ambos por sua vez se conectam com o front-end em React. Devo dizer que todo o processo é simplismente maravilhoso, ver cada pedacinho de um grande quebra-cabeça se encaixando é muito gratificante.

<br/>
<br/>

* Reponsabilidades:<br/>
-Back-end Java-> Responsavel por lidar com todos os processos que envolvam o usuário, ou seja: registro, login e autenticação.<br/>
-Back-end Node-> Responsavel por lidar com todos os processos que envolvam os pensamentos, ou seja: criação, deleção e resgate de acordo com o usuário logado.<br/>
-Front-end React-> Responsavel por pela aparência projeto, onde armazena os dados de usuário e pensamentos em variaveis globais com o Redux.<br/><br/>
 
 
 * Libs e frameworks usados:<br/>
 -Back-end Java-> Spring, Spring-web, Spring-security, Spring-validation, Lombok, JsonWebToken, MySQL, Google-Gson .<br/>
-Back-end Node-> Express, Axios, Cors, Jsonwebtoken, Mongoose .<br/>
-Front-end React-> React, Redux, Recharts, Axios, React-router-dom.<br/><br/>


 <img src="https://user-images.githubusercontent.com/104663666/218266460-5e07a9b1-19cd-40d4-8045-913350782627.gif"/>
<br/><br/><br/>
 
 
 
  


* Criação de pensamentos<br/>
-A cada novo pensamento cadastrado, antes é verificado o token do usuário logado, assim aumentando a segurança da aplicação.<br/>
-Nas etapas da criação você pode avançar, voltar, ir para outras partes do site e mesmo assim as informações que você já preencheu não são perdidas.<br/>
 <img src="https://user-images.githubusercontent.com/104663666/218268435-5f74ca18-5669-42ad-8b64-c0ac8d459fc2.gif"/>
<br/><br/><br/>






* Acompanhamento detalhado<br/>
-Você pode ver o histórico de pensamentos adicionados<br/>
-É possivel também ter um controle mais preciso acompanhando os gráficos presente na parte de estatísticas<br/>
 <div align="center" style="display: flex">
 <img width="49%" src="https://user-images.githubusercontent.com/104663666/218268862-5d8c5a25-4f4a-42d1-a532-8593a6c6570b.png"/>
 <img width="49%" src="https://user-images.githubusercontent.com/104663666/218268879-b3f3ada5-f3be-4edc-8ca0-1c08aaabd10a.gif"/>
  </div>
<br/><br/><br/>


* Responsivo<br/>
-O site é totalmente responsivo para disposivos como tablets e smartphones.<br/>
<img src="https://user-images.githubusercontent.com/104663666/222977989-a34b83de-9f8e-4896-8529-0b3427275b51.gif"/>
<br/><br/><br/>





<h3>Como usar localmente?:</h3>
1- Faça o clone desse repositório;<br/>
2- Abra as pastas "serverNode" e "client" execute o comando "npm install" para baixar as dependências;<br/>
2- Abra a pasta "serverJava" atualize o arquivo "pom.xml" para baixar as dependências;<br/>
3- Na pastas "serverJava" inicie o programa com o spring;<br/>
4- Na pastas "serverNode" inicie o programa usando o comando "node index.js";<br/>
5- Abra a pastas "client" inicie o programa usando o comando "npm start";<br/>
(OBS: É necessário ter os ambiêntes do Javascript e do Java prontos em seu computador.)<br/>
(OBS2: É necessário preencher as conexões com o banco de dados no arquivo "connection" do server Node e o "application-progmind" do server Java.)
   
  
 <br>
 <br/><br/>
<div align="center">
<h3>Tecnologias usadas no front-end:</h3>
 
 <div>
 <img height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
 <img height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
 <img height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
 <img height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
 <img height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" /> 
 </div>
 
 
 <h3>Tecnologias usadas no back-end:</h3>
 
 <div>
 <img height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
  <img height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
  <img height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
  <img height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
  <img height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
  
 </div>
 
 
 
 
 
 
 </div>
