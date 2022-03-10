//get products from API
getProducts();

//add products to the homepage
addProducts();

 async function getProducts() {
   let products = await fetch("http://localhost:3000/api/products");
   return products.json();
}

async function addProducts () {
    let result = await getProducts ()
    .then ((product) => {
        for (let i=0; i < product.length; i++) {
            

            // creation of the link
            let anchor = document.createElement ("a");
            document.getElementById('items').appendChild(anchor);
            anchor.href = `./product.html?id= ${product[i]._id}`;

            //creation of the article
            let productArticle = document.createElement("article");
            anchor.appendChild(productArticle);

            //creation of the image
            let productImage = document.createElement ("img");
            productArticle.appendChild(productImage);
            productImage.src = product[i].imageUrl;
            productImage.alt = product[i].altTxt;

            //creation of the title h3
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = product[i].name;

            //creation of the paragraph description
            let productDescription = document.createElement ("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = product[i].description;
        }
    });
}

