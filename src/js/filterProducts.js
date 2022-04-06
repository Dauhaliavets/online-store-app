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
    filteredProducts = filteredProducts.map(product => {
      if (filter.brands.includes(product.brand)) {
        return product
      }
      return undefined
    })
  }

  if (filter.category) {
    filteredProducts = filteredProducts.map(product => {
      if (product.category === filter.category) {
        return product
      }
      return undefined
    })
  }

  return filteredProducts
}


export default filterProducts