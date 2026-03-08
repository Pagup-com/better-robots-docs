# Publicités et revenus

**Emplacement :** `Étape 11 - Publicités et revenus`

Cette étape contrôle les règles `Allow` pour les fichiers de vérification publicitaire.

## Interrupteurs disponibles

- **Allow verification file (ads.txt)**
- **Allow app verification file (app-ads.txt)**

## Fonctionnement

- Si `ads.txt` est activé, l’extension autorise l’accès à `/ads.txt`
- Si `app-ads.txt` est activé, l’extension autorise l’accès à `/app-ads.txt`

Ce sont de simples règles `Allow` sous `User-agent: *`.
