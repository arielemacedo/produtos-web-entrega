import { categories, products } from './products'
import type { Category, Product } from './products'

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

function SearchBar() {
  return (
    <div>
      <label htmlFor="product-search">Buscar produto</label>
      <input id="product-search" type="search" placeholder="Ex.: maçã" />
      <label>
        <input type="checkbox" />
        Mostrar apenas produtos em estoque
      </label>
    </div>
  )
}

function ProductCategoryRow({ category }: { category: Category }) {
  return (
    <tr>
      <th colSpan={2} scope="rowgroup">{category}</th>
    </tr>
  )
}

function ProductRow({ product }: { product: Product }) {
  return (
    <tr>
      <td>
        {product.name}
        {!product.stocked && <small>Sem estoque</small>}
      </td>
      <td>{currency.format(product.price)}</td>
    </tr>
  )
}

function ProductTable({ products }: { products: Product[] }) {
  return (
    <table aria-label="Tabela de produtos">
      <thead>
        <tr>
          <th scope="col">Produto</th>
          <th scope="col">Preço</th>
        </tr>
      </thead>
      {categories.map((category) => {
        const categoryProducts = products.filter((product) => product.category === category)

        if (categoryProducts.length === 0) return null

        return (
          <tbody key={category}>
            <ProductCategoryRow category={category} />
            {categoryProducts.map((product) => (
              <ProductRow key={product.name} product={product} />
            ))}
          </tbody>
        )
      })}
    </table>
  )
}

function FilterableProductTable({ products }: { products: Product[] }) {
  return (
    <section aria-label="Catálogo e filtros">
      <SearchBar />
      <ProductTable products={products} />
    </section>
  )
}

export default function App() {
  return (
    <main>
      <h1>Produtos Web</h1>
      <FilterableProductTable products={products} />
    </main>
  )
}
