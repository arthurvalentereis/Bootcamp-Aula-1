# NodeJS

<h4>Conceitos básicos, criando um CRUD em um Array com o NodeJS 😄</h4>

Métodos de Requisição HTTP

<b>  GET</b>
<p>
O método GET solicita a representação de uma lista ou um recurso específico. Requisições utilizando esse método devem retornar apenas dados. Pois ao enviar um dado pelo método GET esses dados acabam ficando expostos na URL da requisição. Por isso o ideal é utilizar o GET somente a busca de dados.

Recebendo um GET : request.query
</p>

<b>POST</b>
<p>
O método POST é utilizado para a inserção de uma informação, onde os dados que serão transmitidos são anexados no corpo da requisição.

Recebendo um POST : request.body
</p>


<b>PUT</b>
<p>
O Método PUT é utilizado para atualizar alguma informação na base de dados, com base no que estará sendo enviado no corpo da requisição.

Recebendo um PUT : 
 - request.params (id/chave do que será alterado )
- request.body (informações das alterações que serão enviadas para o servidor atualizar).
</p>


<b>DELETE</b>
<p>
O método DELETE remove um recurso específico.

Recebendo um DELETE : request.params
</p>

<br>

----------


*Para testar você pode utilizar o [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/). <br> Não esqueça de antes de tudo, rodar o comando **yarn** (para instalar as dependências) e para executar **yarn dev***

Espero ter lhe ajudado 😜

````
Love to code ❤️
````

