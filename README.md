														Cahier de charge projet EasyStock

RUBRIQUE 						CE QU’ON ATTEND 
Titre du projet: 		EasyStock : Application Web de gestion de stock, de suivi des ventes et de comptabilité pour petites PME et commerces de proximité 

Le problème:				Les gérants de petites structures gèrent encore leurs stocks et leur comptabilité manuellement (cahier, tableurs Excel ou de tête), et même parfois ne le font pas du tout.

						Ma tante est propriétaire d'un cabinet d'optique à Douala, elle consulte des patients et confectionne des lunettes de vue. 
						Elle gère un stock varié : montures, étuis, produits d'entretien et lentilles. Chaque jour, elle vend des articles, encaisse des paiements, enregistre des clients. 
						Mais sans outil numérique adapté. Elle ne sait pas en temps réel combien il lui reste de montures d'un modèle donné, ni combien elle a gagné cette semaine. 
						En cas d'absence ou de perte de son cahier de notes, toutes ces informations sont perdues ou inaccessibles. Ce problème est partagé par des dizaines de petits commerces médicaux en particulier, et des petites PME en général, dans les grandes villes camerounaises.

Cible (utilisateurs): 	Les gérants des petites PME et des commerces de proximité.

Proposition de valeur: 	Remplacer les cahiers et tableurs par une application web multi-appareils, simple et accessible partout, même en faible connexion. 

Fonctionnalités MVP: 	1. Gestion du stock
						Ajouter, modifier, supprimer un article. Voir la liste complète avec les quantités disponibles. Définir un seuil d'alerte (ex : "alerter si moins de 3 montures restantes"). Filtrer par catégorie (montures, étuis, produits d'entretien).
						2. Enregistrement des ventes
						Saisir une vente : quel article, quelle quantité, quel prix, quel client (optionnel). Le stock se met à jour automatiquement après chaque vente.
						3. Registre des clients
						Fiche client simple : nom, prénom, téléphone, email, date de naissance, date d'inscription. Consulter la liste des clients et accéder à leur fiche.
						4. Tableau de bord comptable
						Vue synthétique des recettes : aujourd'hui, cette semaine, ce mois, cette année. Historique des ventes avec filtre par période. Visualisation simple (chiffres clairs, pas forcément des graphiques en MVP).
						5. Alertes stock bas
						Indicateur visuel (rouge/orange) sur le tableau de bord quand un article passe sous son seuil d'alerte. Permet d'anticiper les réapprovisionnements.

Fonctionnalités bonus: 	RDV, fiches consultation, rappels, messages clients.
						-	Prise de rendez-vous : calendrier simple pour planifier les consultations patient par patient
						-	Fiche de consultation : enregistrer les résultats d'une consultation (ordonnance, équipements prescrits, remarques)
						-	Rappel nettoyage : notifier automatiquement un client X mois après son dernier achat pour qu'il revienne entretenir ses lunettes
						-	Messages de fêtes : envoyer un message groupé aux clients à l'occasion des fêtes (Noël, Nouvel An...)
						-	Export bilan : télécharger un rapport comptable en PDF ou Excel
						-	Multi-utilisateurs : permettre à un employé d'avoir un accès limité (ventes uniquement, pas la comptabilité)

Écrans / pages: 			Connexion, Dashboard (accueil), Liste du stock, formulaire article, nouvelle vente, historique des ventes, Liste clients, fiche client, bilan comptable

Données manipulées:		-	Article : id, nom, catégorie (monture/étui/produit/autre), prix unitaire, quantité en stock, seuil d'alerte, date d'ajout 
						-	Vente : id, date et heure, article(s) vendu(s), quantité, prix total, client associé (optionnel), mode de paiement.
						-	Client : id, nom, prénom, téléphone, email, date de naissance, date d'inscription, historique des achats (référence aux ventes)

Stack technique: 		Angular + Firebase (Firestore, Auth, Hosting) + PWA

Contrainte connexion: 	PWA avec cache 

