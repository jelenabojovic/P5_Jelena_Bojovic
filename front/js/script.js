// Récuperation de produits d'API
getProducts();

// Creation de produits dans le page d'accueil
addProducts();

 async function getProducts() {
   let products = await fetch("http://localhost:3000/api/products");
   return products.json();
}

async function addProducts () {
    let result = await getProducts ()
    .then ((product) => {
        for (let i=0; i < product.length; i++) {
            

    // Insertion de l'élément "a"
    let anchor = document.createElement ("a");
    document.getElementById('items').appendChild(anchor);
    anchor.href = `product.html?id=${product[i]._id}`;

    //Insertion de l'élément "article"
    let productArticle = document.createElement("article");
     anchor.appendChild(productArticle);

     //Insertion de l'image
    let productImage = document.createElement ("img");
    productArticle.appendChild(productImage);
    productImage.src = product[i].imageUrl;
    productImage.alt = product[i].altTxt;

    //Insertion du titre h3
    let productName = document.createElement("h3");
    productArticle.appendChild(productName);
    productName.classList.add("productName");
    productName.innerHTML = product[i].name;

     //Insertion de la description "p"
     let productDescription = document.createElement ("p");
     productArticle.appendChild(productDescription);
     productDescription.classList.add("productName");
     productDescription.innerHTML = product[i].description;
     }
    });
}

