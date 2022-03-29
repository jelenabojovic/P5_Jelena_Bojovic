// Récupération orderId et affichage du numero de commande
function getOrderId(){
    const orderId = document.getElementById("orderId");
    orderId.innerText = localStorage.getItem("orderId");
    console.log(localStorage.getItem("orderId"))
    localStorage.clear();
}
getOrderId();