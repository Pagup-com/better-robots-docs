# Paramètres globaux

**Emplacement :** `Étape 6 - Paramètres globaux`

Cette étape regroupe les paramètres globaux de sortie, la gestion des sitemaps et les règles de protection WordPress de base.

## Ce que cette étape inclut

- `Robots.txt Type`
  - `Virtual (WordPress-generated)`
  - `Physical File`
- `Sitemap URL`
- `Auto-detect sitemap`
- `Footer Signature`
- `AI Governance (SSA)`
- `Core WordPress Protection`

## Ce que cette étape contrôle

- L’URL de sitemap manuelle
- Les URL de sitemap détectées automatiquement
- Les interrupteurs de protection WordPress de base pour :
  - `/wp-admin/`
  - `/wp-includes/`
  - `/readme.html` et `/license.txt`
  - `/xmlrpc.php`
  - `/wp-login.php` et `/wp-register.php`
  - `*?attachment_id=`
  - `*/disclaimer/*`
- L’interrupteur de signature de pied de page
- La case SSA

## Notes sur le fichier physique

- `Physical File` nécessite un accès Pro/Premium
- Un fichier physique `/robots.txt` déjà présent peut bloquer la sortie virtuelle avant même que vous activiez le mode physique de l’extension
