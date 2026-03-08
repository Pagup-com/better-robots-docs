# Guide de démarrage rapide

Ce guide suit l’assistant de configuration de l’extension.

## 1. Ouvrir l’assistant

Dans WordPress, allez dans **Better Robots.txt** et ouvrez l’écran de paramètres.

Si l’extension détecte un fichier `/robots.txt` physique à la racine de votre site, résolvez d’abord ce problème. Le mode virtuel ne peut pas prendre le relais tant que ce fichier n’est pas supprimé.

## 2. Choisir un mode

Le premier écran est **Sélection du mode**. Les modes disponibles sont :

- `Mode 1: Essential`
- `Mode 2: AI-First`
- `Mode 3: Fortress`
- `Mode 0: Custom`

Cliquez ensuite sur **Configure**.

## 3. Parcourir les 14 étapes numérotées

1. `Visibilité des moteurs de recherche`
   Choisissez `Minimal Visibility`, `Recommended Visibility`, `Extended Visibility` ou `Custom Control`.
2. `Gouvernance IA & LLM`
   Décidez si les robots d’entraînement IA doivent être bloqués et si les moteurs de recherche IA doivent être bloqués ou autorisés.
3. `Protection contre les outils SEO`
   Activez ou désactivez les groupes de robots SEO si votre offre le permet.
4. `Protection contre les mauvais robots`
   Activez la liste organisée de mauvais robots.
5. `Contrôle de l’archivage et de Wayback`
   Laissez l’archivage autorisé, ou bloquez les services d’archive sur Premium.
6. `Paramètres globaux`
   Choisissez un `robots.txt` `Virtual` ou `Physical`, ajoutez une URL de sitemap, activez l’auto-détection du sitemap et examinez les interrupteurs de protection WordPress de base.
7. `Spam, flux et pièges d’exploration`
   Configurez le blocage des flux, des archives et le nettoyage des pièges d’exploration.
8. `Optimisation e-commerce`
   Choisissez le niveau de nettoyage WooCommerce adapté à votre boutique.
9. `Ressources et fichiers`
   Décidez si CSS/JS et les images doivent recevoir des règles `Allow` explicites.
10. `Robots des réseaux sociaux`
    Contrôlez si les robots d’aperçu social sont bloqués.
11. `Publicités et revenus`
    Gardez `ads.txt` et `app-ads.txt` accessibles si vous utilisez la vérification des réseaux publicitaires.
12. `Fichier LLMS.txt`
    Sur Pro ou Premium, activez le fichier virtuel et saisissez son contenu.
13. `Paramètres avancés`
    Ajoutez des directives personnalisées, consolidez éventuellement les user-agents et définissez un crawl delay si votre offre le permet.
14. `Vérification et enregistrement`
    Actualisez la prévisualisation et vérifiez la sortie générée.

## 4. Enregistrer vos modifications

Utilisez la barre collante **Save Changes** en bas de l’écran. L’étape finale affiche la prévisualisation, mais l’action d’enregistrement est globale.

## 5. Vérifier le résultat

- Vérifiez `https://votresite.com/robots.txt`
- Si vous avez activé `llms.txt`, vérifiez `https://votresite.com/llms.txt`
- Confirmez que la ligne de sitemap attendue apparaît
- Confirmez que les sections ou robots bloqués attendus sont présents dans la sortie

## Notes de publication

- La prévisualisation se trouve dans `Étape 14 - Vérification et enregistrement`.
- `llms.txt` n’est servi que lorsque le fichier est activé **et** que le champ de contenu n’est pas vide.
