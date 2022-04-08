function filterProducts(filter, products) {
  if (!Array.isArray(products)) return []
  
  let filteredProducts = [...products]

  if (filter.priceMin >= 0) {
    filteredProducts = filteredProducts.filter(product => product.price >= filter.priceMin)
  }

  if (filter.priceMax >= 1 && filter.priceMax > filter.priceMin) {
    filteredProducts = filteredProducts.filter(product => product.price <= filter.priceMax)
  }

  if (Array.isArray(filter.brands) && filter.brands[0]) {
    filteredProducts = filteredProducts.filter(product => filter.brands.includes(product.brand))
  }

  if (filter.category) {
    filteredProducts = filterProducts.filter(product => product.category === filter.category)
  }

  return filteredProducts
}


export default filterProducts