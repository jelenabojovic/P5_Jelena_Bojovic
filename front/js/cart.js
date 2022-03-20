// Initialization du local storage
let cart = JSON.parse(localStorage.getItem("article"));
console.table(cart);

for (let article in cart) {
    //création de la balise article et insertion dans la section
    let productArticle = document.createElement("article");

    document.querySelector ("#cart__items").appendChild(productArticle);
    productArticle.className = "cart__item";
    productArticle.setAttribute("data-id", cart[article].articleId);

    //Insertion de l'élément "div" pour image
    let productDivImg = document.createElement("div");
    productArticle.appendChild(productDivImg);
    productDivImg.className = "cart__item__img";

    //Insertion de l'image
    let productImg = document.createElement("img");
    productDivImg.appendChild(productImg);
    productImg.src = cart [article].articleImg;
    productImg.alt = cart [article].articleAltImg;

    //creation de l'élément "div" pour la description
    let productItemContent = document.createElement("div");
    productArticle.appendChild(productItemContent);
    productItemContent.className = "cart__item__content";

    let productItemContentDescription = document.createElement("div");
    productItemContent.appendChild(productItemContentDescription);
    productItemContentDescription.className = "cart__item__content__description";

    //insertion du titre h2
    let productTitle = document.createElement("h2");
    productItemContentDescription.appendChild(productTitle);
    productTitle.innerHTML = cart[article].articleName;

    //insertion de la coleur
    let productColor = document.createElement("p");
    productTitle.appendChild(productColor);
    productColor.innerHTML = cart[article].articleColor;

    //insertion du prix
    let productPrice = document.createElement("p");
    productItemContentDescription.appendChild(productPrice);
    productPrice.innerHTML = cart[article].articlePrice + "€";

    //insertion de l'élément "div" content settings
    let productItemContentSettings = document.createElement("div");
    productItemContent.appendChild(productItemContentSettings);
    productItemContentSettings.className = "cart__item__content__settings";

    //insertion de l'élément "div" content settings quantity
    let productItemContentSettingsQuantity = document.createElement("div");
    productItemContentSettings.appendChild(productItemContentSettingsQuantity);
    productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";

    //insertion de la paragraphe quantité
    let productQty = document.createElement("p");
    productItemContentSettingsQuantity.appendChild(productQty);
    productQty.innerHTML = "Qté: ";

    //insertion de la quantite
    let productQuantity = document.createElement("input");
    productItemContentSettingsQuantity.appendChild(productQuantity);
    productQuantity.setAttribute("type","number");
    productQuantity.className = "itemQuantity";
    productQuantity.setAttribute("name","itemQuantity");
    productQuantity.setAttribute("min","1");
    productQuantity.setAttribute("max","100");
    productQuantity.value = cart[article].articleQuantity;
    
    //insertion de l'élément "div" pour supprimer le produit
    let productItemContentSettingsDelete = document.createElement("div");
    productItemContentSettings.appendChild(productItemContentSettingsDelete);
    productItemContentSettingsDelete.className = "cart__item__content__settings__delete";

    //insertion de l'élément "p" pour supprimer le produit
    let productSupprimer = document.createElement("p");
    productItemContentSettingsDelete.appendChild(productSupprimer);
    productSupprimer.innerHTML = "Supprimer";
    

}




