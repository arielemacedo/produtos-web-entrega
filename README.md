# Produtos Web

Atividade de Programação para Internet II. Catálogo de frutas, verduras e legumes feito com React, Vite e TypeScript a partir de [Pensando em React](https://pt-br.react.dev/learn/thinking-in-react).

## Como rodar

Use Node.js 22 (versão 22.12 ou superior).

```bash
npm ci
npm run dev
```

Abra o endereço que aparecer no terminal. O comando `npm run build` verifica os tipos e gera a pasta `dist` para publicação. O comando `npm run lint` verifica o código.

## Como a tela foi dividida

- `FilterableProductTable` reúne os filtros e a tabela.
- `SearchBar` contém o campo de busca e a opção de estoque.
- `ProductTable` agrupa os produtos por categoria.
- `ProductCategoryRow` mostra o nome da categoria.
- `ProductRow` mostra o nome, o preço e a indicação de falta de estoque.

A lista inicial fica em `src/products.ts`. O tipo `Product` define os campos de cada produto.
