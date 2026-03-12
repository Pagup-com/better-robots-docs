---
title: Exemples de robots.txt
description: Consultez des exemples Better Robots.txt pour les éditeurs, les boutiques WooCommerce et les configurations orientées protection.
schemaType: TechArticle
---

# Exemples de robots.txt

Ces exemples sont illustratifs. Ils montrent le type de politique que Better Robots.txt peut t’aider à publier. Ils ne remplacent ni un conseil juridique, ni un durcissement serveur, ni une réflexion adaptée à ton site.

## Exemple 1 — Site vitrine / petite entreprise

**Preset recommandé :** Essential

```txt
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml
```

**Pourquoi c’est pertinent**
- Le site est public et veut être découvert.
- Il n’y a pas de raison forte de devenir restrictif trop tôt.
- L’objectif principal est une politique par défaut plus propre et plus sûre.

## Exemple 2 — Site de contenu avec politique IA plus claire

**Preset recommandé :** AI-First

```txt
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml

# Content-Signal: search=yes, ai-input=yes, ai-train=no
```

**Pourquoi c’est pertinent**
- La recherche classique reste ouverte.
- La position sur l’entraînement des modèles est plus restrictive.
- Cela correspond mieux à un contexte éditorial qu’un simple fichier par défaut.

## Exemple 3 — Boutique WooCommerce

**Preset recommandé :** Essential ou Pro selon l’ampleur

```txt
User-agent: *
Allow: /
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Sitemap: https://example.com/sitemap.xml
```

**Pourquoi c’est pertinent**
- On bloque des chemins privés ou de faible valeur.
- On réduit le gaspillage de crawl.
- On garde une meilleure clarté pour la découverte produit.

## Exemple 4 — Site orienté protection

**Preset recommandé :** Fortress

```txt
User-agent: *
Allow: /
Disallow: /private/
Disallow: /archive/
Sitemap: https://example.com/sitemap.xml
```

**Pourquoi c’est pertinent**
- La politique est plus stricte.
- Le raisonnement est protection-first.
- C’est plus cohérent quand l’archive ou le scraping sont des enjeux.

## Comment utiliser ces exemples

- Pars du contexte métier qui ressemble au tien.
- Utilise l’exemple pour comprendre la logique, pas pour copier aveuglément.
- Laisse le plugin générer le fichier final, puis vérifie-le avant publication.

## Continuer

- [Choisir un preset](/fr/presets)
- [Comparer les plans](/fr/pricing)
- [Lire la gouvernance](/fr/governance/)
