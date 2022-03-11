// Get product Id 
let params = (new URL(document.location)).searchParams;
const id = params.get('id');

//Create product and its description

let itemImage = document.querySelector(".item__img");
let img = document.createElement("img");
itemImage.appendChild(img);
let itemTitle = document.getElementById("title");
let itemPrice = document.getElementById("price");
let itemDescription = document.getElementById("description");
let itemColors = document.getElementById("colors");

// Get a unique product by its ID

getItem ();

async function getItem () {
    await fetch(`http://localhost:3000/api/products/${id}`)
    .then((response) => response.json())
    .then (item => {
     itemImage.src = item.imageUrl;
     itemImage.alt = item.altTxt;
     itemTitle.innerHTML = item.name;
     itemPrice.innerHTML = item.price;
     itemDescription.innerText = item.description;
     document.title = item.title;

     let itemColors = document.getElementById("colors");
     for(let i=0; i < item.colors.length; i++) {
         let option = document.createElement("option");
         option.innerText = item.colors [i];
         itemColors.appendChild(option);
     }
    })
}








