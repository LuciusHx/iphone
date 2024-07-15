import ProductCard  from "./components/ProductCard.js";

let ProductList = document.getElementById('product-list');

let products = [
    {
        img: "https://imgs.casasbahia.com.br/55058313/1g.jpg",
        name: "Iphone 14",
        price: "R$ 400,00",
        color: "Midnight",
        storage: "256GB",
    },
    {
        img: "https://m.media-amazon.com/images/I/41X3VbihvpL._AC_SX679_.jpg",
        name: "Nokia",
        price: "R$7.990,00",
        color: "Tijolão",
        storage: "256GB",
    },
    {
        img: "https://m.media-amazon.com/images/I/41GK+ItincL._AC_SX679_.jpg",
        name: "Xiomi",
        price: "R$1.950,00",
        color: "azul marinho",
        storage: "1TB",
    }

];

for(let i = 0; i < products.length; i++){
    ProductList.innerHTML += ProductCard(products[i]);

}

