<h1>Curso de DevOps 2023.2 - IT Talent</h1>

<h2>Exercício Prático CI/CD 1</h2>

**Discente**: Gabriel Furtado Lins Melo

---

<h2>Índice</h2>

- [Descrição da Atividade](#descrição-da-atividade)

---

## Descrição da Atividade

Olá turma, a atividade consiste em replicar o que foi feito na aula de CI/CD 1 conforme as especificações abaixo:  
  - Info
        - Nota de 0 a 10
       
    - Regras
        - Os entregáveis devem ser postados na atividade classroom até o final do prazo
        - Fonte: https://github.com/programa-it-talent/2023.1.devops-pre-hackathon
       
    - Gerência de Configuração
        - Deve ser criado um repositório no github com o código fonte
       
    - CI/CD
        - O repositório deve ter estrutura de ci no actions acionada por pull_request na main com:
            - testes
            - sonar
       
        - O repositório deve ter estrutura de cd no actions acionada por push na main com:
            - testes
            - sonar
            - build no pages
       
    - Entregáveis:
        - Link do repositório do github
        - Link do pages publicado funcionando

Úteis:

- permissões necessárias para o pages:

permissions:
  contents: read
  pages: write
  id-token: write

- actions usadas com respectivas documentações:

https://github.com/actions/checkout
https://github.com/actions/setup-node
https://github.com/SonarSource/sonarcloud-github-action
https://github.com/actions/configure-pages
https://github.com/actions/upload-pages-artifact
https://github.com/actions/deploy-pages

---


