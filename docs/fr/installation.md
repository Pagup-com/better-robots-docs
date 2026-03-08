# Installation

## Prérequis

- WordPress avec un accès administrateur
- PHP `7.4+`

## Installation depuis WordPress.org

1. Allez dans **Extensions → Ajouter**
2. Recherchez `Better Robots.txt`
3. Installez et activez l’extension

## Premier lancement

Après l’activation :

1. Ouvrez **Better Robots.txt**
2. Choisissez un mode sur l’écran `Sélection du mode`
3. Cliquez sur **Configure**
4. Parcourez les étapes numérotées
5. Vérifiez la prévisualisation dans `Étape 14 - Vérification et enregistrement`
6. Enregistrez depuis le pied de page collant

## Vérification importante du fichier physique

Si votre site possède déjà un fichier `/robots.txt` physique à la racine web, le mode virtuel peut être bloqué. L’écran des paramètres affiche un avertissement lorsque cela se produit.

## Vérifier l’installation

- Visitez `https://votresite.com/robots.txt`
- Si vous avez activé `llms.txt`, visitez `https://votresite.com/llms.txt`

## Si quelque chose semble incorrect

- Réenregistrez les permaliens dans **Réglages → Permaliens**
- Assurez-vous que **Réglages → Lecture → Visibilité pour les moteurs de recherche** n’empêche pas l’indexation
- Vérifiez s’il existe un fichier `/robots.txt` physique
- Vérifiez la prévisualisation dans l’étape finale avant d’enregistrer
