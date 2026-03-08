# Bonnes pratiques

Utilisez ces recommandations lorsque vous configurez Better Robots.txt via l’assistant actuel.

## Commencez par le flux de l’assistant

- Choisissez d’abord un mode, puis examinez chaque étape numérotée au lieu d’aller directement aux règles personnalisées
- Utilisez `Mode 1` ou `Mode 2` si vous voulez un point de départ plus sûr avant de faire des modifications manuelles
- Utilisez `Mode 0: Custom` uniquement si vous savez déjà quels modules vous voulez ajuster

## Conservez les bases

- Gardez les règles de protection WordPress de base activées sauf si vous avez une raison précise de les modifier
- Gardez les règles `Allow` pour CSS/JS et les images activées dans `Ressources et fichiers`, sauf si vous avez validé un autre besoin
- Assurez-vous qu’au moins une source de sitemap valide est configurée dans `Paramètres globaux`

## Préférez la sortie virtuelle sauf si vous avez besoin d’un fichier

- Utilisez le `robots.txt` `Virtual` pour la plupart des sites
- Choisissez `Physical File` uniquement lorsque vous avez besoin d’un fichier écrit à la racine du site
- Si un `/robots.txt` physique existe déjà, résolvez ce conflit avant de compter sur la sortie virtuelle

## Utilisez les contrôles IA de manière intentionnelle

- Laissez la protection contre l’entraînement IA activée sauf si vous souhaitez délibérément autoriser les robots d’entraînement
- Décidez séparément si les moteurs de recherche IA doivent être bloqués ou autorisés
- Utilisez `/llms.txt` uniquement si vous voulez publier un fichier de politique séparé et manuel, et que vous êtes prêt à en rédiger vous-même le contenu

## Gardez les règles de boutique ciblées

- Pour les sites WooCommerce, commencez par `Basic Cleanup`
- Passez à `Advanced Cleanup` uniquement si la prolifération des filtres et paramètres est un vrai problème
- Revérifiez la prévisualisation après avoir modifié les règles liées à la boutique, car elles peuvent ajouter rapidement beaucoup de sortie

## Utilisez les règles personnalisées avec prudence

- Ajoutez des règles personnalisées uniquement pour des directives qui ne sont pas déjà couvertes par l’assistant
- Gardez les directives personnalisées courtes et intentionnelles
- Revoyez la prévisualisation finale après chaque modification de règle personnalisée

## Vérifiez toujours avant d’enregistrer

- Utilisez `Étape 14 - Vérification et enregistrement` pour confirmer la sortie générée
- Vérifiez que les lignes de sitemap attendues sont présentes
- Vérifiez que les règles de robots attendues sont présentes
- Si `Consolidate User-agents` est activé, vérifiez que la sortie finale se lit toujours comme vous l’attendez

## Rappelez-vous à quoi sert robots.txt

- `robots.txt` aide à guider le comportement des robots d’exploration
- ce n’est pas un système de sécurité
- ne comptez pas dessus pour protéger du contenu privé ou l’accès à l’administration

## Suite

Utilisez [Exemples](/fr/examples) pour des chemins de configuration courants ou [Dépannage](/fr/troubleshooting) si la sortie ne se comporte pas comme prévu.
