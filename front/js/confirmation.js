//Récupération orderId
const id = new URL(window.location.href).searchParams.get("id");
	console.log(id);
	
// Affichage du numéro de commande
	const orderId = document.getElementById('orderId');
	orderId.innerHTML = id;
	
//
	localStorage.clear();