export type Category = 'Frutas' | 'Verduras e legumes'

export type Product = {
  category: Category
  name: string
  price: number
  stocked: boolean
}

export const categories: Category[] = ['Frutas', 'Verduras e legumes']

export const products: Product[] = [
  { category: 'Frutas', name: 'Maçã', price: 1, stocked: true },
  { category: 'Frutas', name: 'Pitaya', price: 1, stocked: true },
  { category: 'Frutas', name: 'Maracujá', price: 2, stocked: false },
  { category: 'Verduras e legumes', name: 'Espinafre', price: 2, stocked: true },
  { category: 'Verduras e legumes', name: 'Abóbora', price: 4, stocked: false },
  { category: 'Verduras e legumes', name: 'Ervilha', price: 1, stocked: true },
]
