# Histórico do projeto
Aqui informarei o processo de desenvolvimento do projeto.

## Ler o enunciado

Como primeira etapa, irei ler o enunciado e anotar as informações importantes e verificar de maneira preliminar o que precisarei fazer.

- O projeto trata-se de a implementação de uma funcionalidade de auto-completar uma busca;
- Este repositório no Github vai ser utilizado para controle de versionamento do projeto e este que será entregue
- Deve funcionar no **Ubuntu** ou no **Mac OS**
- Vou precisar criar um arquivo YAML que vai ser executado com o comando '**docker-compose up**'
- O front-end vou usar o React
- GraphQL pra fazer requisições ao back-end/seridor/banco de dados
- Estou livre para escoher linguagem de back-end.


**REQUISITOS**

### Busca

- Pelo menos um campo para o usuário preencher o que deseja
- A interface gráfica é livre
- Posso definir um título para a busca ou placeholder
- Atenção: precisa ter uma boa exibição em aplicativos móveis

### Sugestões do Autocompletar

- Sugestões começam a ser exibidas após digitar o 4º dígito
- Em caso de não existir sugestãom nada é exibido
- Backend retorno no máximo 20 sugestões
- Porém, apenas 10 são exibidas
- O usuário deve poder rolar para ver mais sugestões
- A parte que o usuário já digitou fica em negrito
- Na ação de hover ou touch a sugestão é destacada
- Sugestões mudam conforme usuário digita
- Velocidade
- Após o clique, o campo é preenchido com o valor sugerido

### Lista de Sugestões / Persistência
- O BD pode ser populado com as sugestões (de maneira automatizada)
- Ou, poderei te rum arquivo com as sugestões em um arquivo

**AVALIAÇÃO DO DESAFIO**
- Atender as funcionalidades de auto-completar uma busca
- Qualidade do código é importante
- Facilidade de executar o projeto

## Inicio
O sistema Operacional que utilizarei para o desenvolvimento é:
**Ubuntu 22.04.4 LTS**

Inicialmente irei fazer uma atualização do sistema e conferir as dependências que provavelmente precisarei no projeto.

```
sudo apt update
sudo apt upgrade
```

E as dependências que tenho instalados no sistema são
- NodeJS [ v20.9.0 ]
- Docker [version 27.0.3, build 7d4bcd8]
- Docker Compose [version v2.3.3]
- React [^18.3.1]
- GraphQL [^16.9.0]
- Apollo Server

## Milestones

Irei utilizar os serviços de issues e milestones do github para me guiar nas atividades e prazos. 

![alt text](image-1.png)

## Iniciar o FRONT END
Já pondo a mão na massa. Vou criar um projeto react com o comando:

```
npx create-react-app search_autocomplete
```

Vou precisar de algo para poder de um ferramenta para gerir os dados do GraphQL e do próprio GraphQL, então no diretório search_complete irei executar o comando 

```
npm install @apollo/client graphql
```



