//Récupération orderId
const id = new URL(window.location.href).searchParams.get("id");
	
// Affichage du numéro de commande
	const orderId = document.getElementById('orderId');
	orderId.innerHTML = id;
	
// Vider local storage
	localStorage.clear();