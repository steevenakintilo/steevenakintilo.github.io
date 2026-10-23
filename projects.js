// Tes projets, dans l'ordre d'affichage.
// Pour en ajouter un : copie un bloc { ... }, mets ton image dans le dossier images/ et change les textes.
// "url" et "image" peuvent rester vides ("").
window.PROJECTS = [
  {
    "name": "00Chess",
    "image": "images/00chess.png",
    "url": "https://play00chess.com/",
    "summary": "Un jeu de plateau stratégique qui mélange le 007, les échecs et le tower defense façon Bloons TD 5. Le but est de tuer le roi adverse, en choisissant parmi diverses stratégies pour y arriver.\n\n."
  },
  {
    "name": "WikipediaPeopleMap",
    "image": "images/wikipediapeoplemap.jpg",
    "url": "https://www.wikipediapeoplemap.com",
    "summary": "Une carte interactive qui montre où sont nées et mortes toutes les personnes ayant un article sur Wikipédia en français. On peut filtrer par pays, métier, genre, âge ou époque, consulter des statistiques et des classements de noms, villes et pays, et exporter les résultats en CSV. Les données viennent du dump de Wikipédia, traité par un pipeline Python. Stack : React + TypeScript, Django + PostgreSQL. Projet open source."
  },
  {
    "name": "TwitterGiveawayBotV2",
    "image": "images/twittergiveawaybotv2.jpg",
    "url": "https://github.com/steevenakintilo/TwitterGiveawayBotV2",
    "summary": "Un bot Python qui trouve les concours sur Twitter/X et y participe automatiquement : like, retweet, abonnements, commentaires et mentions selon ce que demande chaque concours. Il pilote un navigateur, sans passer par l'API, gère plusieurs comptes répartis sur trois jours, fonctionne dans toutes les langues et envoie un suivi sur Discord par webhooks (concours trouvés, erreurs, gains). Tout se règle dans un fichier de configuration YAML. Nouvelle version de mon premier TwitterGiveawayBot."
  },
  {
    "name": "UnMixWords",
    "image": "images/unmixwords.png",
    "url": "https://www.unmixwords.com/Home",
    "summary": "Un jeu de mots en ligne inspiré de Wordle, des mots mêlés et du Rubik's Cube. La grille est mélangée et il faut échanger des lettres pour reformer un mot sur chaque ligne, avec des cases orange et vertes comme indices. Grille du jour identique pour tous, plus de 10 000 niveaux aléatoires de 2 à 10 mots, mode contre-la-montre, 4 niveaux de difficulté, en français et en anglais. Stack : TypeScript, Python, déployé sur Vercel."
  },
  {
    "name": "LinkedinApplicationRecap",
    "image": "images/linkedinapplicationrecap.png",
    "url": "https://github.com/steevenakintilo/LinkedinApplicationRecap",
    "summary": "Comme Spotify Wrapped, mais pour tes candidatures LinkedIn. Le programme lit l'archive de données LinkedIn, calcule les statistiques de tes candidatures et les affiche sur une page web sous forme de graphiques, de tableaux et de phrases. On peut aussi récupérer seulement le fichier JSON. Stack : Python, Django, React + TypeScript. Projet open source."
  },
  {
    "name": "FootballMatchGuessr",
    "image": "images/footballmatchguessr.jpg",
    "url": "https://www.footballmatchguessr.com",
    "summary": "Un jeu de quiz foot : à partir des deux compositions d'équipe d'un vrai match, il faut deviner les équipes, le score, les buteurs et l'année. Mode quotidien identique pour tous sur les 5 grands championnats, modes par championnat, par équipe et par coupe d'Europe ou Copa Libertadores, plus un mode difficile sans drapeaux. Les matchs des 10 dernières années sont récupérés et traités par un script Python. Stack : Python, React + TypeScript."
  },
  {
    "name": "autoApply",
    "image": "images/autoapply.jpg",
    "url": "https://github.com/steevenakintilo/autoApply",
    "summary": "Un bot Python qui postule automatiquement à des offres d'emploi sur Welcome to the Jungle. Il cherche les offres selon des mots-clés et des filtres définis dans un fichier YAML, répond aux questions des recruteurs à partir d'une base de réponses qui s'enrichit au fil des candidatures, génère une lettre de motivation adaptée à chaque offre et envoie le suivi sur Discord (offres trouvées, candidatures envoyées, erreurs). Stack : Python, Selenium.\n\nProjet plus maintenu : Welcome to the Jungle a entièrement changé son site en avril 2026, le bot ne fonctionne donc plus."
  },
  {
    "name": "BadFootballBet",
    "image": "images/badfootballbet.png",
    "url": "https://github.com/steevenakintilo/BadFootballBet",
    "summary": "Un bot Python qui prédit le résultat d'un match de foot (victoire, nul ou défaite) à partir des derniers matchs de chaque équipe. Il récupère les données par web scraping (statistiques, confrontations directes, blessures, xG, cotes) et calcule un score maison pour chaque équipe. Un mode automatique analyse tous les matchs du jour et envoie les résultats sur Discord. Fonctionne en clubs comme en sélections nationales. Stack : Python, Selenium.\n\nProjet plus maintenu : il ne fonctionne probablement plus, les sites scrapés ayant pu changer."
  },
  {
    "name": "TwitterWrapped",
    "image": "images/twitterdatainsight.jpg",
    "url": "https://github.com/steevenakintilo/YourTwitterAccountDataBackFront",
    "summary": "Comme Spotify Wrapped, mais pour ton compte Twitter : le site lit l'archive de données Twitter et en tire des statistiques, par exemple les personnes avec qui tu échanges le plus en DM. Stack : Python côté back, JavaScript côté front.\n\nCe site ne sera jamais mis en ligne : il faudrait confier son archive Twitter, qui contient des données privées comme les DM, au site d'un inconnu. Et l'archive fournie par Twitter ne contient pas assez d'informations pour en faire un outil vraiment exploitable."
  },
  {
    "name": "Space Shooter",
    "image": "images/spaceshooter.jpg",
    "url": "https://github.com/steevenakintilo/space_shooter",
    "summary": "Mon premier gros projet : un jeu de tir spatial en Python avec Pygame, réalisé il y a environ 5 ans. 10 niveaux et 3 boss, une boutique pour acheter de nouveaux vaisseaux avec l'argent gagné, plusieurs niveaux de difficulté, un meilleur score, des statistiques de partie et de la musique. Le code date de mes débuts en Python, mais le jeu est complet et jouable. Stack : Python, Pygame."
  }
];
