# 🐾 Wafi — E-commerce Dropshipping

Boutique e-commerce de niche (accessoires personnalisés pour animaux) développée avec React, Vite, Tailwind CSS, et préparée pour Supabase et Stripe.

## 🚀 Guide de Déploiement

Ce guide vous explique comment héberger votre site Wafi gratuitement sur **Vercel** et comment préparer les services tiers (Base de données et Paiement).

### 1. Prérequis
Avant de déployer, vous aurez besoin de :
- Un compte [GitHub](https://github.com/) (pour héberger votre code)
- Un compte [Vercel](https://vercel.com/) (pour héberger le site web)
- *(Plus tard dans le projet)* Un compte [Supabase](https://supabase.com/) pour la base de données
- *(Plus tard dans le projet)* Un compte [Stripe](https://stripe.com/) pour les paiements

### 2. Pousser le code sur GitHub
1. Créez un nouveau dépôt (repository) sur GitHub (nommez-le `wafi-ecommerce` par exemple).
2. Ouvrez votre terminal dans le dossier du projet (`c:\Users\User\WAFI`) et lancez ces commandes :
   ```bash
   git init
   git add .
   git commit -m "Initial commit Wafi Phase 1"
   git branch -M main
   git remote add origin https://github.com/VOTRE_NOM/wafi-ecommerce.git
   git push -u origin main
   ```

### 3. Déployer sur Vercel (Hébergement du site)
Vercel est l'hébergeur idéal (et gratuit) pour les projets Vite/React.

1. Connectez-vous sur [Vercel.com](https://vercel.com/) avec votre compte GitHub.
2. Cliquez sur **"Add New..."** > **"Project"**.
3. Importez votre dépôt GitHub `wafi-ecommerce`.
4. Vercel détectera automatiquement que c'est un projet Vite.
5. Laissez les paramètres par défaut (`Build Command: npm run build`, `Output Directory: dist`).
6. *(Optionnel pour l'instant)* C'est ici que vous ajouterez vos variables d'environnement (`VITE_SUPABASE_URL`, `VITE_STRIPE_KEY`, etc.) dans la section "Environment Variables".
7. Cliquez sur **Deploy**.

🎉 En 2 minutes, votre site sera en ligne avec une URL du type `wafi-ecommerce.vercel.app` !

### 4. Nom de domaine personnalisé (Optionnel)
Pour avoir `wafi.fr` ou `wafi.com` au lieu du lien Vercel :
1. Achetez un nom de domaine (sur Hostinger, OVH, ou Porkbun).
2. Dans le dashboard Vercel de votre projet, allez dans **Settings** > **Domains**.
3. Ajoutez votre nom de domaine.
4. Vercel vous donnera des enregistrements DNS (ex: CNAME ou A record) à copier/coller chez votre fournisseur de domaine.

---

### Prochaines étapes (Phase 4)
Quand nous intégrerons la base de données et les paiements :

#### Supabase (Base de données)
1. Créez un projet sur Supabase.
2. Récupérez votre `Project URL` et votre `anon public API key`.
3. Vous les ajouterez sur Vercel dans les variables d'environnement.

#### Stripe (Paiements)
1. Créez un compte Stripe.
2. Récupérez vos clés API (Test et Live).
3. Connectez un compte bancaire pour recevoir vos virements.

---

## 🛠 Commandes Locales Utiles

- `npm run dev` : Lancer le serveur local (http://localhost:5173)
- `npm run build` : Compiler le projet pour la production
- `npm run preview` : Tester la version compilée en local
