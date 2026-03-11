---
title: "Exemples"
description: "Exemples et cas d’usage pour Better Robots.txt."
pageType: "docs"
ogImage: "/og/home.jpg"
---

# Exemples et cas d’usage

Ces exemples suivent le flux de paramètres affiché dans l’extension.

## Site simple

Chemin suggéré :

- `Mode 1: Essential`
- `Visibilité des moteurs de recherche` : `Recommended Visibility`
- `Gouvernance IA & LLM` : laissez la protection contre l’entraînement activée
- `Paramètres globaux` : ajoutez votre sitemap
- `Ressources et fichiers` : laissez CSS/JS et les images activés
- `Publicités et revenus` : laissez `ads.txt` activé si nécessaire

## Site de contenu préoccupé par l’entraînement IA

Chemin suggéré :

- `Mode 0: Custom` ou `Mode 2: AI-First`
- `Gouvernance IA & LLM` : laissez la protection contre l’entraînement activée
- Décidez si la recherche IA doit être bloquée ou autorisée
- Si vous êtes sur Pro/Premium, ajoutez un fichier manuel `/llms.txt` à l’`Étape 12`

## Boutique WooCommerce

Chemin suggéré :

- `Optimisation e-commerce` : `Basic Cleanup` pour la plupart des boutiques
- `Advanced Cleanup` sur Pro/Premium si la prolifération des filtres et paramètres est un vrai problème
- Gardez CSS/JS et les images activés dans `Ressources et fichiers`
- Gardez les fichiers de vérification publicitaire activés si vous les utilisez

## Site utilisant un fichier robots.txt physique

Chemin suggéré :

- Dans `Paramètres globaux`, choisissez `Physical File` uniquement si vous avez réellement besoin d’un fichier écrit
- Résolvez tout conflit existant avec un fichier physique avant de compter sur la sortie virtuelle
- Vérifiez toujours la prévisualisation avant d’enregistrer
