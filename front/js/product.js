// Get product Id 

let params = (new URL(document.location)).searchParams;
let id = params.get('id');

//Creation of the product description
let itemImage = document.querySelector(".item__img");
let img = document.createElement("img");
itemImage.appendChild(img);
console.log(img);



// Add a product and its descriptios to the page


