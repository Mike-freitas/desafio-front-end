# Quer ser desenvolvedor frontend na MDsystem Web?

Criamos este teste para avaliar seus conhecimentos e habilidades frontend (HTML, CSS e JavaScript).

## O teste

O desafio é tornar o layout abaixo em uma página funcional.
Não existe certo ou errado, queremos ver como você se sai em situações reais, como este desafio.

Portanto, dê o seu melhor!

:warning: **OBS:** Os layouts podem ser encontrados na pasta **layout**

![Layout](layout/Mobile.png)
![Layout](layout/Desktop.png)

## Instruções

![Layout](layout/Architecture.png)

- O conteúdo não é estático. Você deve fazer consulta a API.
- URL API
  - https://www.mdsystemweb.com.br/projects/api/v1/test/layout.php
- Fonte padrão: "Poppins".
- No CSS usar (Flex box) E Arquitetura BEM.
- Crie uma documentação simples comentando sobre as tecnologias e soluções adotadas.
- Realize o desenvolvimento dentro da pasta src
- Caminho para configuração da api src/config/App.ts
- Chamadas na api são feitas apenas dentro dos arquivos referentes as features, assim, todo container que precisa de alguma integração
  com api criasse uma Feature referente a ele
- O arquivo src/features/home/Service.ts dentro das Features é onde pode se configurar as rotas de requisição
- O arquivo src/features/home/Slice.ts é onde você configura o redux para fazer as request na api e salvar os dados
- O arquivo src/features/home/Types.ts (em projetos typescript) é onde criasse os tipos dos dados para os dados da api
- para facilitar a construção das tipagens recomendo o site que passa os json da api para tipos do typescript:
  https://transform.tools/json-to-typescript

- Caminho para criação de componets, src/components
- Configurações globais CSS src/stylesheets

## Requisitos

- Design responsivo nos breakpoints, mobile first
- Suporte para IE, Chrome, Safari, Firefox

## Diferenciais

- Uso de pré-processador CSS (Sass)

## O que será avaliado

- Estrutura e organização do código e dos arquivos
- Soluções adotadas
- Qualidade
- Fidelidade ao layout
- Enfim, tudo será observado e levado em conta

## Como iniciar o desenvolvimento

- Node v20.18.1
- Fork este repositório na sua conta do Github
- Crie uma branch com o nome **desafio**
- Instale as dependências

```
yarn
```

- Rode a aplicação

```
yarn start
```

- Acesse http://localhost:4000

## Como enviar seu teste

- Envie um email para [diogo.alves@mdsystemweb.com.br] com o link do seu repositório
- Se o seu repositório for privado, solicite os emails das pessoas responsáveis para conceder acesso de leitura ao seu repositório.
