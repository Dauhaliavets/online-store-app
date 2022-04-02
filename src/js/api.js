const URL = "http://localhost:3500"
const ENDPOINTS = {
  PRODUCTS: '/products'
}

export async function getAllProducts() {
  try {
    const apiUrl = URL + ENDPOINTS.PRODUCTS
    const request = await fetch(apiUrl)
    const response = await request.json()
    return response
  } catch(e) {
    console.log(e);
  }
}