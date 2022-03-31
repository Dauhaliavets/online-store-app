Запуск сервера: npx json-server -p 3500 DB/db.json
при первом запуске попросит подтянуть зависимости

url: http://localhost:3500

endpoints: 
  /products - товары
  /users - пользователи

Для проверки сервера можете в браузере перейти на http://localhost:3500/products,
увидите массив товаров, а в консоли где запускали сервак напишет что был GET запрос

GET на эндпоинт получение массива объектов
POST на примере добавления товара:

  ID указывать не нужно задается автоматически
  
  const product = {
    category: "Smartphone"
    title: "Iphone xr",
    description: {
      "Диагональ экрана, дюймы ": "6.1",
      "Оперативная память ": "3 ГБ",
      "Встроенная память ": "256 ГБ",
      "Разрешение основной камеры, Мпикс ": "12"
    },
    price: 2500.16,
    discount: 5,
    currency: "BYN",
    img: "https://cdn1.ozone.ru/s3/multimedia-z/c1200/6025923743.jpg"
  }

  let response = await fetch('http://localhost:3500/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(product)
});

