# Koumbia Infos — guide de mise en ligne

Ce dossier contient ton site, construit pour que tu puisses **publier des articles toi-même**, sans jamais toucher au code, avec un niveau de sécurité professionnel dès le départ.

## Comment c'est construit, et pourquoi c'est plus sûr

Beaucoup de sites "pros" (WordPress, etc.) utilisent une base de données et un serveur qui tourne en permanence — ça demande des mises à jour de sécurité régulières, et c'est la cible n°1 des piratages (failles de plugins, mots de passe admin forcés, etc.).

Ton site est **statique** : il n'y a pas de base de données, pas de serveur à sécuriser. Quand tu publies un article, il est transformé en simple page HTML et mis en ligne. Il n'y a donc quasiment rien à pirater :
- Pas d'injection SQL possible (pas de base de données).
- Pas de plugin à mettre à jour.
- HTTPS (le cadenas) activé automatiquement et gratuitement.
- Des en-têtes de sécurité (anti-clickjacking, anti-script malveillant) déjà configurés dans le fichier `netlify.toml`.
- Chaque publication est sauvegardée automatiquement (historique complet, tu peux toujours revenir en arrière).

Tu gères le contenu depuis une interface simple à l'adresse `tonsite.com/admin` — comme un panneau d'administration classique, mais sans les risques d'un vrai serveur.

## Mise en ligne — étape par étape

### 1. Créer un compte GitHub (gratuit)
GitHub héberge le code de ton site. Va sur [github.com](https://github.com), crée un compte, **active la double authentification (2FA)** dans les paramètres de sécurité dès la création (obligatoire pour la sécurité de ton site).

Crée un nouveau dépôt (bouton "New repository"), nomme-le `koumbia-infos`, et mets tous les fichiers de ce dossier dedans (GitHub te propose un glisser-déposer dans le navigateur si tu ne connais pas Git — pas besoin de ligne de commande).

### 2. Créer un compte Netlify (gratuit)
Va sur [netlify.com](https://netlify.com), crée un compte (active aussi la 2FA), puis :
- "Add new site" → "Import an existing project" → connecte ton compte GitHub → choisis le dépôt `koumbia-infos`.
- Netlify détecte automatiquement la commande de build (`npm run build`) et le dossier `_site` grâce au fichier `netlify.toml`. Clique sur "Deploy".
- En 1-2 minutes, ton site est en ligne sur une adresse du type `nom-au-hasard.netlify.app`.

### 3. Activer l'espace de gestion (Decap CMS)
Dans Netlify : **Site settings → Identity → Enable Identity**.
Puis **Identity → Registration → Invite only** (important : ça empêche n'importe qui de créer un compte admin).
Puis **Identity → Services → Git Gateway → Enable Git Gateway**.

Ensuite, invite-toi toi-même : **Identity → Invite users** → ton adresse email. Tu recevras un email pour définir ton mot de passe (choisis-en un fort, et si Netlify le propose, active la 2FA sur ce compte aussi).

### 4. Publier un article
Va sur `tonsite.netlify.app/admin`, connecte-toi, clique sur "Articles" → "New Article". Remplis le titre, la catégorie, la photo (tu peux l'envoyer directement depuis ton ordinateur ou ton téléphone), le résumé, le contenu — puis "Publish". L'article apparaît sur le site en 1 à 2 minutes.

### 5. Ton nom de domaine
Une fois que tout fonctionne, achète un nom de domaine (ex. `koumbia-infos.com`) chez un registraire comme [Namecheap](https://namecheap.com) ou [OVH](https://ovh.com) — compte quelques milliers de francs guinéens par an. Dans Netlify : **Domain settings → Add a domain**, puis suis les instructions pour pointer ton domaine vers Netlify (Netlify te guide pas à pas, et le HTTPS se met en place automatiquement).

## Check-list sécurité (à faire une fois, puis à garder en tête)

- [ ] 2FA activée sur GitHub, Netlify, et ton compte Identity
- [ ] Enregistrement Identity réglé sur "Invite only" (jamais "Open")
- [ ] Seules les personnes de confiance (toi, ton frère) ont un accès `/admin`
- [ ] Mots de passe uniques et forts (utilise un gestionnaire de mots de passe si possible)
- [ ] Domaine renouvelé chaque année (mets un rappel)
- [ ] Ne jamais coller un mot de passe ou un lien d'invitation dans un message public

## Modifier le contenu du site (textes hors articles)

Les textes fixes (hero, section contact, pied de page) sont dans `src/index.njk` et `src/_includes/base.njk`. Ce sont les seules parties qui demandent de toucher au code — pour tout le reste (les articles), passe par `/admin`.

## Besoin d'aide ?

Si un jour tu es bloquée, garde ce dossier et reviens me voir avec la question précise (une capture d'écran aide beaucoup) — je pourrai te guider sans tout reconstruire.
