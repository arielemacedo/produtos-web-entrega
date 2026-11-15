import { useState } from 'react'
import { categories, products } from './products'
import type { Category, Product } from './products'

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

type SearchBarProps = {
  filterText: string
  inStockOnly: boolean
  onFilterTextChange: (text: string) => void
  onInStockOnlyChange: (checked: boolean) => void
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: SearchBarProps) {
  return (
    <div>
      <label htmlFor="product-search">Buscar produto</label>
      <input
        id="product-search"
        type="search"
        placeholder="Ex.: maçã"
        value={filterText}
        onChange={(event) => onFilterTextChange(event.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(event) => onInStockOnlyChange(event.target.checked)}
        />
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

function normalizeSearch(text: string) {
  return text.trim().toLowerCase().normalize('NFD').replace(/\p{M}/gu, '')
}

function FilterableProductTable({ products }: { products: Product[] }) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  const search = normalizeSearch(filterText)
  const visibleProducts = products.filter((product) => {
    const matchesName = normalizeSearch(product.name).includes(search)
    const matchesStock = !inStockOnly || product.stocked
    return matchesName && matchesStock
  })

  return (
    <section aria-label="Catálogo e filtros">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <p role="status">
        {visibleProducts.length === 0
          ? 'Nenhum produto encontrado.'
          : `${visibleProducts.length} ${visibleProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}`}
      </p>
      {visibleProducts.length > 0 && <ProductTable products={visibleProducts} />}
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
