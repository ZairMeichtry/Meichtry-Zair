const products = [
    {
        "id": "1",
        "name": "Nike sb",
        "price": "12000",
        "category": "Nike",
        "img": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/dc31862e-5af6-4611-a497-5bd3b29e7191/calzado-de-skateboarding-sb-zoom-pogo-plus-GxMsNp.png",
        "stock": 25,
        "descripcion": "Zapatilla Urbana para andar en skate"
    },
    { "id": "2", "name": "Yeezy boost 350", "price": "130000", "category": "Adidas", "img": "https://assets.adidas.com/images/w_375,h_375,q_auto:sensitive/9557b589ceb746c69f77681f79e6f42d_9366/HQ7045_01_standard1_hover.jpg", "stock": 25, "descripcion": "zapatillas deportivas para correr" },
    { "id": "3", "name": "Vikky Stacked", "price": "25000", "category": "Puma", "img": "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw34c30db0/products/PU_370402-50/PU_370402-50-6.JPG", "stock": 25, "descrpicion": "zapatillas urbanas para salir" },

]

export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (category) {
          const filteredProducts = products.filter(product => product.category === category);
          resolve(filteredProducts);
        } else {
          resolve(products);
        }
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(product => product.id === productId));
      }, 500);
    });
  };