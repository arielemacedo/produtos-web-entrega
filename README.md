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

## Como os filtros funcionam

1. `FilterableProductTable` usa `useState` para guardar o texto digitado e se a opção de estoque está marcada.
2. O componente passa os valores e as funções de atualização para `SearchBar` pelas props. Quando o usuário mexe em um controle, o evento chama a função correspondente.
3. A cada atualização, `filter` calcula os produtos visíveis. A busca compara uma parte do nome e aceita, por exemplo, `maca` para encontrar **Maçã**.
4. A tabela recebe a lista filtrada. A contagem usa o tamanho dessa mesma lista.
