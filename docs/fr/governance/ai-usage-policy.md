---
title: Politique d’usage IA
description: Comprendre search, ai-input, ai-train, et pourquoi Better Robots.txt traite l’usage IA comme une question de gouvernance.
schemaType: TechArticle
---

# Politique d’usage IA

Cette page explique la logique des réglages liés à l’IA dans Better Robots.txt.

## Comment des LLM peuvent utiliser un site

Les systèmes IA peuvent interagir avec un site de plusieurs façons :

### 1. Indexation de recherche
Un système peut crawler une page pour qu’elle apparaisse dans des résultats de recherche classiques.

### 2. Génération de réponses
Un système peut utiliser la page en temps réel pour répondre à une question ou enrichir une chaîne de réponse.

### 3. Entraînement de modèle
Un système peut ingérer le contenu pour améliorer ou entraîner un modèle dans le temps.

### 4. Scraping ou collecte de datasets
Un système peut collecter du contenu sans valeur claire pour un moteur de recherche ou une réponse utilisateur.

Ces usages ne sont pas identiques. C’est pourquoi une politique de crawl moderne ne doit pas les traiter comme s’ils étaient équivalents.

## Pourquoi les content signals comptent

Des signaux comme `search`, `ai-input` et `ai-train` aident à exprimer des préférences distinctes :

- **search** : indexation et découverte pour la recherche classique
- **ai-input** : usage en temps réel pour la génération de réponses ou le grounding
- **ai-train** : usage pour l’entraînement ou l’amélioration d’un modèle

Ces signaux sont particulièrement utiles quand on veut conserver la visibilité de recherche tout en étant plus restrictif sur l’entraînement.

## Pourquoi protéger un site peut être important

Un propriétaire de site peut vouloir limiter certains usages à cause :

- d’un travail éditorial original
- de l’intelligence concurrentielle
- de l’exposition à l’archive
- de la charge serveur
- des préoccupations sur l’entraînement IA
- d’une politique éditoriale ou de conformité interne

## Limite importante

Better Robots.txt aide à publier une intention. Il ne prétend pas que tous les systèmes respecteront ces signaux.

## Références liées

- [Vue d’ensemble de la gouvernance](/fr/governance)
- [Exemples de robots.txt](/fr/robots-txt-examples)
- [llms.txt](/llms.txt)
- [ai-governance.json](/.well-known/ai-governance.json)
