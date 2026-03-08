# Questions fréquentes

## Quel est le vrai flux de configuration ?

Il y a un écran `Sélection du mode` suivi de `14` étapes numérotées. La prévisualisation `robots.txt` se trouve dans `Étape 14 - Vérification et enregistrement`.

## La prévisualisation est-elle une étape séparée ?

Non. La prévisualisation fait partie de l’étape finale.

## Quelle est la différence entre un robots.txt virtuel et physique ?

- **Virtual**
  WordPress sert `robots.txt` dynamiquement
- **Physical**
  L’extension écrit un vrai fichier à la racine du site

Le mode physique est disponible sur les offres Pro et Premium.

## Est-ce que `llms.txt` génère automatiquement son propre contenu ?

Non. Vous devez être sur Pro ou Premium, activer le fichier et saisir vous-même son contenu.

## Quels réglages comptent le plus pour le contrôle de l’IA ?

Les principaux réglages IA sont :

- la protection contre l’entraînement IA
- la politique de recherche IA
- le `llms.txt` optionnel

## Pourquoi mon robots.txt virtuel n’apparaît-il pas ?

Vérifiez d’abord ces points :

- un fichier `/robots.txt` physique à la racine du site peut bloquer le fichier virtuel
- l’écran de paramètres affiche un avertissement lorsque cela arrive
- si vous attendez la sortie virtuelle de l’extension, assurez-vous que le site est public dans **Réglages → Lecture**
