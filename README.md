# Portfolio de Steeven Akintilo

Site vitrine statique : `index.html` + `projects.js` + `images/`. Aucun build, aucune dépendance.

## Mettre le site en ligne avec GitHub Pages

1. Sur GitHub, crée un dépôt **public** nommé exactement `steevenakintilo.github.io`.
2. Envoie-y le contenu de ce dossier (pas le dossier lui-même) :
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "[ADD] Portfolio"
   git branch -M main
   git remote add origin https://github.com/steevenakintilo/steevenakintilo.github.io.git
   git push -u origin main
   ```
3. Dans le dépôt : **Settings → Pages**, source **Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Après une ou deux minutes, le site est en ligne sur **https://steevenakintilo.github.io**.

## Ajouter ou modifier un projet

Tout se passe dans `projects.js` :

- **Ajouter** : copie un bloc `{ ... }`, change `name`, `summary`, `url`, et mets l'image dans `images/` (par exemple `"image": "images/mon-projet.png"`).
- **Changer l'ordre** : déplace les blocs. Le premier de la liste s'affiche en haut.
- **Supprimer** : retire le bloc (attention à la virgule entre les blocs).

Puis `git add . && git commit -m "[UPDATE] Projets" && git push`. Le site se met à jour tout seul.

Pour tester en local avant d'envoyer : ouvre simplement `index.html` dans ton navigateur.
