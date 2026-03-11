---
title: Exemples de robots.txt
description: Voir des exemples Better Robots.txt pour les éditeurs, les boutiques WooCommerce et les configurations orientées protection.
schemaType: TechArticle
---

# Exemples de robots.txt

Ces exemples sont illustratifs. Ils montrent le type de politique que Better Robots.txt peut aider à publier. Ils ne remplacent pas une analyse spécifique du site ni une décision d’infrastructure.

## Exemple 1 — site vitrine

**Préréglage recommandé :** Essential

```txt
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml
```

Pourquoi c’est pertinent :
- site public simple
- pas besoin de restrictions lourdes
- accès clair pour les moteurs de recherche

## Exemple 2 — site de contenu avec politique orientée IA

**Préréglage recommandé :** AI-First

```txt
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml

# Content-Signal: search=yes, ai-input=yes, ai-train=no
```

Pourquoi c’est pertinent :
- laisse la recherche classique ouverte
- exprime une position plus restrictive sur l’entraînement des modèles
- mieux adapté à un site éditorial qu’un fichier par défaut vide

## Exemple 3 — boutique WooCommerce

**Préréglage recommandé :** Essential ou Pro selon l’échelle

```txt
User-agent: *
Allow: /
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Sitemap: https://example.com/sitemap.xml
```

Pourquoi c’est pertinent :
- bloque les chemins privés ou de faible valeur
- aide à réduire le gaspillage de crawl
- garde une meilleure lisibilité pour les pages produits

## Exemple 4 — site orienté protection

**Préréglage recommandé :** Fortress

```txt
User-agent: *
Allow: /
Disallow: /private/
Disallow: /archive/
Sitemap: https://example.com/sitemap.xml
```

Pourquoi c’est pertinent :
- politique plus stricte
- logique protection-first
- meilleur ajustement quand l’archive et l’exposition au scraping comptent

## Comment lire ces exemples

Il faut les lire comme des modèles de politique, pas comme des règles magiques. Le bon robots.txt dépend toujours du site, de son modèle économique et des compromis acceptés.
