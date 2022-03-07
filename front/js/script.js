
fetch("http://localhost:3000/api/products")
.then((response) => response.json())
.then((data) => addProducts(data))

// added products
function addProducts(data) {
    let imageUrl= data[0].imageUrl

let anchor = document.createElement ("a")
anchor.href = imageUrl
anchor.text ="un super canape"

const items = document.getElementById ('items')
if (items != null) {
    items.appendChild(anchor)
   }
}