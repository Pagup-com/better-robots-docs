# Guide de migration

Utilisez ce guide lorsque vous remplacez une autre configuration robots.txt par Better Robots.txt.

## 1. Notez vos règles actuelles

Avant de changer quoi que ce soit :

- enregistrez une copie du `robots.txt` actuel
- notez les directives personnalisées que vous devez conserver
- notez si le site actuel utilise un fichier `/robots.txt` physique

## 2. Supprimez les conflits

Si une autre extension ou un fichier physique écrit manuellement contrôle actuellement `robots.txt`, désactivez ou supprimez d’abord cette source.

Le blocage le plus courant est un fichier `/robots.txt` physique à la racine du site.

## 3. Installez Better Robots.txt

Installez et activez l’extension, puis ouvrez l’assistant de configuration.

## 4. Recréez les règles nécessaires

Utilisez le flux actuel de l’assistant pour reconstruire ce dont vous avez réellement besoin :

- `Paramètres globaux` pour les lignes de sitemap et les règles WordPress de base
- `Visibilité des moteurs de recherche` pour les préréglages de recherche
- `Gouvernance IA & LLM` pour les règles robots liées à l’IA
- `Optimisation e-commerce` pour le nettoyage WooCommerce
- `Paramètres avancés` pour toute directive personnalisée que vous souhaitez conserver

## 5. Comparez la prévisualisation

Ouvrez `Étape 14 - Vérification et enregistrement` et comparez la prévisualisation générée avec l’ancien fichier.

## 6. Enregistrez et testez à nouveau

Après l’enregistrement :

- visitez `https://votresite.com/robots.txt`
- vérifiez les lignes de sitemap
- vérifiez les règles que vous vouliez conserver
- vérifiez qu’il ne reste aucun conflit avec un fichier physique

## Note importante

La voie de migration la plus sûre consiste à relire vos anciennes règles et à recréer dans le nouvel assistant uniquement celles que vous souhaitez encore utiliser.
