//EXERCICE 1

// var Homme = {
// 	prenom : prompt("prénom ?"),
// 	nom : prompt("nom ?"),
// 	pays : prompt("nationalité ?"),
// 	age: prompt("quel age ?"),
// 	paiement : prompt("moyen de paiement ?"),
// 	alrtPrenom : function () {
// 		alert(this.prenom);
// 	},
// 	alrtNom : function () {
// 		alert(this.nom);
// 	},
// 	alrtDate : function () { 
// 		alert(this.age);
// 	},
// };

// var Verif = {
// 	 nationalite : ["FRANCE", "ITALIE", "ESPAGNE", "BELGIQUE"],
// 	 paye : ["VISA", "MASTERCARD", "PAYPAL"],
// 	 ageMin : 18
// };

// function verification() {
// 	 	if (Homme.age < Verif.ageMin){
// 	 		alert("trop jeune");
// 	 	} else {
// 	 		alert("age valide");
// 	 	};
// 	 	for(i = 0; i < Verif.nationalite.length; i++) {
// 	 		var testPays = Homme.pays;
// 	 		if (testPays.toUpperCase() == Verif.nationalite[i]) {
// 	 			alert('Donald trump veut bien de toi');
// 	 		}
// 	 	}
// 	 	for (j = 0; j < Verif.paye.length; j++) {
// 	 		var testPaye = Homme.paiement;
// 	 		if (testPaye.toUpperCase() === Verif.paye[j]) {
// 	 			alert ("Tu peux payer");
// 	 		}
// 	 		else {
// 	 			alert(Verif.paye);
// 	 		}
// 	 	}
// };

// verification();


// EXERCICE 2 ===============================================

// function guerrier(nom, attack, defence, sante) {
// 	this.nom = nom;
// 	this.attack = attack;
// 	this.defence = defence;
// 	this.sante = sante;
// 	this.combat = function (guerrierX) {
// 		 alert(this.nom + "attaque" + guerrierX.nom);
// 		 guerrierX.sante = guerrierX.sante - this.attack;
// 		 alert("vie de " + guerrierX.nom + " : " + guerrierX.sante + "points de vie");
// 	}
// };

// function magicien(nom, attack, defence, sante, mana) {
// 	this.nom = nom;
// 	this.attack = attack;
// 	this.defence = defence;
// 	this.sante = sante;
// 	this.mana = mana;
// 	this.combat = function (guerrierX) {
// 		 alert(this.nom + " attaque " + guerrierX.nom);
// 		 guerrierX.sante = guerrierX.sante - this.attack;
// 		 alert("vie de " + guerrierX.nom + " : " + guerrierX.sante);
// 	};
// 	this.soin = function () {
// 		if (mana > 10) {
// 			alert("soin en cours");
// 			this.sante += 10;
// 			alert("recupère santé " + this.sante);
// 		}
// 		else {
// 			alert("mana insuffisant");
// 		}
// 	}
// };

// var guerrier1 = new guerrier("guerrier1", 3, 6, 10);
// var guerrier2 = new guerrier("guerrier2", 2, 8, 12);
// var magicien1 = new magicien("Le magicien", 4, 6, 10, 16);

// guerrier1.combat(magicien1);
// guerrier2.combat(magicien1);
// magicien1.soin();
// magicien1.combat(guerrier2);


// EXERCICE 3 ================================================
// var index = 0;
// var tabProduct = [];

// function produit (titre, accroche, description) {
// 	this.titre = titre;
// 	this.accroche = accroche;
// 	this.description = description;
// }

// $("#envoi").click(function(){
// 	tabProduct.push(new produit($('#titre').val(), $('#accroche').val(), $('#description').val()));
// 	//creer le produit html
// 	$('h2').html(tabProduct[index].titre);
// 	$('h4').html(tabProduct[index].accroche);
// 	$('.description').html(tabProduct[index].description);	

// 	$('.fiche').css('visibility', 'visible');
// 	index++;
// });



// EXERCICE 4 ======================================================
// // $("tr").append("<td></td>")

$('#tri').change(function () {
  var xhttp = new XMLHttpRequest(); 
	xhttp.onreadystatechange = function() {

  		if (this.readyState == 4 && this.status == 200) {
   		 	
   		 	var maListeObjet = JSON.parse(this.responseText);
			var tableau = maListeObjet.maListe;

			tableau.sort(function (a, b) {
  			if (a[$("select option:selected").val()]<b[$("select option:selected").val()]) {
    			return -1;
  			}
  			else if (a[$("select option:selected").val()]>b[$("select option:selected").val()]) {
    			return 1;
  			}
  			else {
  				return 0;
  			}
			});
			$("tbody").empty();
			for (i=0; i<tableau.length; i++){
				$("tbody").append("<tr></tr>");
				$("tr:last").append("<td>"+tableau[i].nom+"</td>");
				$("tr:last").append("<td>"+tableau[i].prenom+"</td>");
				$("tr:last").append("<td>"+tableau[i].age+"</td>");
				$("tr:last").append("<td>"+tableau[i].taille+"</td>");
			};
		};
	 };

	xhttp.open("GET", "bonjour.json", true);
	xhttp.send();
});


