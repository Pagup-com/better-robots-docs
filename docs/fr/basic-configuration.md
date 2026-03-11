---
title: "Configuration de base"
description: "Un point de départ plus sûr pour Better Robots.txt."
pageType: "docs"
ogImage: "/og/home.jpg"
---

# Configuration de base

Cette page couvre une configuration de départ sûre pour la plupart des sites.

## Une première passe simple

1. Ouvrez **Better Robots.txt**
2. Choisissez `Mode 1: Essential` si vous voulez la configuration la plus rapide et la moins risquée
3. Cliquez sur **Configure**
4. Vérifiez d’abord ces étapes :
   - `Visibilité des moteurs de recherche`
   - `Gouvernance IA & LLM`
   - `Paramètres globaux`
   - `Optimisation e-commerce` si vous utilisez WooCommerce
   - `Publicités et revenus` si vous utilisez des fichiers de vérification publicitaire
5. Vérifiez la prévisualisation dans `Étape 14 - Vérification et enregistrement`
6. Enregistrez depuis le pied de page collant

## Choix de base recommandés

- Gardez `Virtual (WordPress-generated)` sauf si vous avez spécifiquement besoin d’un fichier physique
- Ajoutez une URL de sitemap ou activez l’auto-détection du sitemap
- Laissez les interrupteurs de protection WordPress de base activés sauf si vous avez une raison de les assouplir
- Gardez les règles `Allow` pour CSS/JS activées
- Gardez les règles `Allow` pour les images activées sauf si vous voulez délibérément empêcher leur exploration
- Gardez `ads.txt` activé si vous dépendez de la vérification des réseaux publicitaires

## Avant de publier

- Confirmez que `https://votresite.com/robots.txt` est accessible
- Confirmez qu’il n’existe pas de fichier `/robots.txt` physique en conflit, sauf si vous utilisez volontairement le mode physique
- Confirmez que la prévisualisation contient les règles attendues

Pour l’ordre exact étape par étape, utilisez [Démarrage rapide](/fr/quick-start) et [Aperçu des paramètres](/fr/settings).
