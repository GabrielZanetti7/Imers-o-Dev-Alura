## Atletas do Brasil 🇧🇷

Este é um projeto de aplicação web que apresenta um sistema de busca de atletas brasileiros. O objetivo é fornecer informações relevantes sobre os esportistas, como suas biografias, modalidades esportivas e links para suas redes sociais e páginas da Wikipédia.

## Tecnologias Utilizadas 🚀

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML:** Estrutura do conteúdo da página.
- **CSS:** Estilização visual da aplicação.
- **JavaScript:** Funcionalidades dinâmicas da busca.

## Como Funciona 🤔

A aplicação funciona da seguinte forma:

1. **Banco de Dados:** Os dados dos atletas estão armazenados em um arquivo JavaScript separado (`dados.js`), estruturado como um array de objetos. Cada objeto representa um atleta e contém informações como nome, esporte, descrição, links para redes sociais e Wikipédia.

2. **Página HTML:** A página HTML exibe um campo de pesquisa, um botão para iniciar a busca e uma seção vazia onde os resultados da busca serão exibidos.

3. **Função de Busca (JavaScript):**
   - Ao clicar no botão "Pesquisar", uma função JavaScript é executada.
   - A função lê o valor digitado no campo de pesquisa.
   - Em seguida, percorre o array de dados dos atletas.
   - Para cada atleta, a função verifica se o nome, descrição ou esporte (convertidos para letras minúsculas) contêm o termo pesquisado (também convertido para letras minúsculas).
   - Se houver correspondência, as informações do atleta são utilizadas para criar um elemento HTML que é adicionado à seção de resultados.
   - Se nenhum atleta for encontrado, uma mensagem informativa é exibida.

## Como Usar 💻

1. Clone este repositório para o seu computador.
2. Abra o arquivo `index.html` em seu navegador web.
3. Digite o nome de um atleta ou esporte no campo de pesquisa.
4. Clique no botão "Pesquisar".
5. Os resultados da busca serão exibidos na página.

## Próximos Passos ⏭️

- Melhorar a interface do usuário com um design mais moderno e responsivo.
- Implementar paginação para lidar com um grande número de resultados.
- Adicionar filtros por esporte, gênero, etc.
- Buscar os dados dos atletas dinamicamente de uma API externa.

## Contribuições 🤝

https://imers-o-dev-alura-flame.vercel.app/

Contribuições são sempre bem-vindas! Se você tiver sugestões de melhorias, correções de bugs ou novos recursos, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---
