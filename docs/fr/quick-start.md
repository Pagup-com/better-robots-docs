# Guide de démarrage rapide

Mettez Better Robots.txt en service en quelques minutes avec ce guide étape par étape.

## Étape 1 : Activer et accéder aux paramètres

1. **Naviguez vers** **Better Robots.txt** → **Paramètres** dans votre tableau de bord WordPress
2. **Acceptez les valeurs par défaut** pour l'instant (vous pourrez personnaliser plus tard)
3. **Cliquez sur** **Sauvegarder les modifications**

Votre robots.txt de base est maintenant configuré !

## Étape 2 : Vérifiez votre robots.txt

Visitez `https://votresite.com/robots.txt` pour voir votre nouveau fichier robots.txt :

```txt
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php
Disallow: /wp-login.php
Disallow: /wp-register.php
Disallow: */disclaimer/*
Disallow: *?attachment_id=
Disallow: /privacy-policy

# This robots.txt file was created by Better Robots.txt (Index & Rank Booster by Pagup) Plugin
```

## Étape 3 : Fonctionnalités gratuites essentielles

Activez ces paramètres gratuits importants :

### Bloquer le bot ChatGPT

1. Allez dans **Paramètres** → **Gestion des bots**
2. **Activez** "Bloquer le bot ChatGPT"
3. **Sauvegardez les modifications**

### Autoriser les fichiers Ads.txt

1. Faites défiler vers **Paramètres Ads.txt**
2. **Sélectionnez** "Autoriser" pour ads.txt et app-ads.txt
3. **Sauvegardez les modifications**

## Étape 4 : Fonctionnalités Pro recommandées

Pour des performances optimales, envisagez ces fonctionnalités Pro :

### Activer la détection de sitemap

1. **Passez à Pro** (si ce n'est pas déjà fait)
2. Allez dans **Intégration de sitemap**
3. **Activez** "Détection automatique des sitemaps"
4. **Sélectionnez** votre plugin SEO (Yoast, Rank Math, etc.)

### Bloquer les mauvais bots

1. Naviguez vers **Protection des bots**
2. **Activez** "Bloquer les mauvais bots (recommandé par IA)"
3. **Activez** "Bloqueur de backlinks de spam"

## Étape 5 : Optimisation WooCommerce (si applicable)

Si vous gérez une boutique en ligne :

1. Allez dans **Paramètres e-commerce**
2. **Activez** "Optimisation WooCommerce"
3. **Sauvegardez les modifications**

Cela bloque les URLs inutiles comme `/cart/`, `/checkout/`, `add-to-cart` etc.

## Étape 6 : Testez votre configuration

### Google Search Console

1. Ajoutez votre site à [Google Search Console](https://search.google.com/search-console/)
2. Soumettez votre robots.txt pour test
3. Vérifiez les problèmes de blocage

### Test manuel

Testez les pages importantes :

- Page d'accueil : Doit être accessible
- Zones d'administration : Doivent être bloquées
- Sitemap : Doit être référencé

## Configurations rapides courantes

### Site de blog

```markdown
✅ Activer : Détection automatique de sitemap
✅ Activer : Blocage du bot ChatGPT
✅ Activer : Autorisation Ads.txt
✅ Désactiver : WooCommerce (si non utilisé)
```

### Site e-commerce

```markdown
✅ Activer : Tous les paramètres de blog
✅ Activer : Optimisation WooCommerce
✅ Activer : Blocage des mauvais bots
✅ Envisager : Génération de fichiers physiques
```

### Réseau multisite

```markdown
✅ Activer : Gestion multisite
✅ Configurer : Règles réseau
✅ Activer : Protection intersite
✅ Tester : Chaque sous-site individuellement
```

## Dépannage des problèmes rapides

### robots.txt ne se met pas à jour

1. **Videz le cache** (WordPress et navigateur)
2. **Vérifiez** que les paramètres sont sauvegardés
3. **Attendez** 5-10 minutes pour la propagation

### Conflit de plugin SEO

1. **Désactivez** les autres plugins robots.txt
2. **Vérifiez** les paramètres robots.txt de Yoast/Rank Math
3. **Définissez** Better Robots.txt pour "remplacer"

### Erreur 404

1. **Vérifiez** les paramètres de confidentialité WordPress
2. **Vérifiez** la structure des permaliens
3. **Assurez-vous** qu'aucun fichier robots.txt physique n'existe

## Prochaines étapes

- 📖 Apprenez les [Règles Avancées](/fr/settings/sitemaps)
- 🎯 Explorez [Exemples de fonctionnalités](/fr/examples)
- 🛠️ Consultez les [Bonnes pratiques](/fr/best-practices)
- ❓ Consultez notre [FAQ](/fr/faq)

## Besoin d'aide ?

- **Documentation** : Parcourez ces guides
- **Support** : [Forum WordPress.org](https://wordpress.org/support/plugin/better-robots-txt/)
- **Premium** : Support prioritaire pour les utilisateurs Pro

---

**Félicitations !** 🎉 Votre site WordPress dispose maintenant d'un fichier robots.txt optimisé qui vous aidera à améliorer votre SEO et à protéger votre contenu.
