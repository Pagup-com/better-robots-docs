---
title: "Dépannage"
description: "Résolution des problèmes fréquents de Better Robots.txt."
pageType: "docs"
ogImage: "/og/home.jpg"
---

# Dépannage

## `robots.txt` ne se charge pas comme prévu

Vérifiez d’abord ces points :

1. Réenregistrez les permaliens dans **Réglages → Permaliens**
2. Si vous attendez la sortie virtuelle de l’extension, assurez-vous que WordPress est public dans **Réglages → Lecture**
3. Vérifiez s’il existe un fichier `/robots.txt` physique à la racine du site

## La sortie virtuelle ne se met pas à jour

- Videz les caches de page, CDN et serveur
- Ouvrez l’étape finale de prévisualisation et confirmez la sortie générée avant d’enregistrer
- Vérifiez si un fichier `/robots.txt` physique prend le dessus

## La sortie finale ne correspond pas à ce que j’attendais

Revoyez chaque étape concernée et comparez-la à la prévisualisation dans `Étape 14 - Vérification et enregistrement` avant d’enregistrer.

## `llms.txt` n’apparaît pas

Assurez-vous que tous ces points sont vrais :

- Vous êtes sur Pro ou Premium
- L’interrupteur `Enable llms.txt Virtual File` est activé
- Le champ `LLMS.txt Content` n’est pas vide

## Conflits avec le fichier physique

Si l’écran de paramètres indique qu’un fichier `/robots.txt` physique bloque la sortie virtuelle :

- supprimez le fichier manuellement, ou
- utilisez l’action de suppression affichée par l’extension lorsqu’elle est disponible

## Les lignes de sitemap sont absentes

- Saisissez une URL de sitemap manuelle dans `Paramètres globaux`, ou
- activez la détection automatique et assurez-vous que votre sitemap est accessible

## Le crawl delay est absent de la sortie

`Crawl Delay` est disponible sur les offres Pro et Premium.
