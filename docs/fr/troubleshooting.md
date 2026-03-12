---
title: Dépannage
description: Résolvez les questions fréquentes Better Robots.txt autour de la sortie générée, des éditions, des aperçus, du cache et des fichiers publics.
schemaType: TechArticle
---


# Dépannage

## Le fichier généré ne ressemble pas à ce que j’attendais
Commence par vérifier trois choses :
1. le preset sélectionné
2. l’édition utilisée
3. ce que montre l’aperçu final Review & Save

## Je vois des fonctions verrouillées
Certaines parties de l’interface appartiennent à Pro ou Premium. Le site documente le produit complet, pas seulement la version gratuite.

## Je ne sais pas quel preset convient à mon site
Commence par [Presets](/fr/presets) puis lis [Cas d’usage](/fr/use-cases). Pour la plupart des sites, Essential reste le premier choix le plus sûr.

## Le site public s’est chargé bizarrement après un déploiement
Si le shell de page charge mais que le contenu semble incorrect jusqu’au refresh, il se peut que tu voies une ancienne session navigateur ou des assets mis en cache. Fais un hard refresh et teste en navigation privée avant de conclure que la route est cassée.

## SEMrush ou un autre crawler a signalé une 404 transitoire
Si la page fonctionne normalement dans une session propre et que le HTML source contient du contenu, le signal a pu être observé pendant une transition temporaire ou un décalage de cache. Relance l’audit une fois le déploiement stabilisé.

## J’attendais un enforcement fort de ces fichiers
robots.txt, llms.txt et les fichiers similaires publient une intention. Ils ne remplacent pas un WAF, un CDN ou un contrôle serveur.

## J’ai encore besoin d’aide
Utilise [Contact](/fr/contact).
