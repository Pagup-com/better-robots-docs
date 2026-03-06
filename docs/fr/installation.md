# Installation

Ce guide vous accompagnera dans l'installation de Better Robots.txt sur votre site WordPress.

## Prérequis

Avant d'installer, assurez-vous que votre site WordPress répond à ces exigences :

- **Version WordPress** : 4.1 ou supérieure
- **Version PHP** : 7.4 ou supérieure
- **Accès** : Accès administrateur au tableau de bord WordPress
- **Stockage** : 10MB d'espace libre pour les fichiers du plugin

## Méthodes d'installation

### Méthode 1 : Annuaire WordPress.org (Recommandée)

1. **Connectez-vous** à votre tableau de bord WordPress
2. Allez dans **Extensions → Ajouter**
3. Recherchez "Better Robots.txt"
4. Cliquez sur **Installer maintenant** sur le plugin de Pagup
5. Cliquez sur **Activer** après la fin de l'installation

### Méthode 2 : Téléversement manuel

1. **Téléchargez** le plugin depuis [WordPress.org](https://wordpress.org/plugins/better-robots-txt/)
2. **Décompressez** le fichier téléchargé sur votre ordinateur
3. **Connectez-vous** à votre site via FTP ou gestionnaire de fichiers
4. **Naviguez** vers `/wp-content/plugins/`
5. **Téléversez** le dossier `better-robots-txt`
6. **Connectez-vous** à WordPress et activez le plugin

### Méthode 3 : Téléchargement direct

1. Visitez la [page WordPress.org de Better Robots.txt](https://wordpress.org/plugins/better-robots-txt/)
2. Cliquez sur le bouton **Télécharger**
3. Suivez les **étapes de la méthode 2** des étapes 2-6

## Configuration post-installation

### 1. Configuration initiale

Après activation, vous verrez un nouvel élément de menu :

1. Dans votre tableau de bord WordPress, allez dans **Better Robots.txt → Paramètres**
2. Le plugin détectera automatiquement votre configuration actuelle et suggérera des paramètres optimaux
3. Vérifiez la configuration par défaut et apportez les modifications souhaitées
4. Cliquez sur **Sauvegarder les modifications**

### 2. Configuration Freemius (Optionnelle)

Better Robots.txt utilise Freemius pour les fonctionnalités premium :

1. Vous verrez un écran d'opt-in après activation
2. **Version gratuite** : Cliquez sur "Ignorer" pour continuer avec les fonctionnalités gratuites
3. **Version Pro** : Cliquez sur "Autoriser et continuer" pour débloquer les fonctionnalités premium

::: tip Pourquoi opter ?
L'opt-in nous permet de :

- Fournir des mises à jour automatiques
- Offrir un support prioritaire
- Envoyer des notifications de sécurité
- Partager des annonces de fonctionnalités
  :::

### 3. Vérifier l'installation

Pour vérifier que votre robots.txt fonctionne :

1. Visitez `https://votresite.com/robots.txt`
2. Vous devriez voir le contenu robots.txt généré
3. Vérifiez qu'il contient la signature Better Robots.txt

```txt
# This robots.txt file was created by Better Robots.txt (Index & Rank Booster by Pagup) Plugin
```

## Problèmes d'installation courants

### Échec de l'installation du plugin

**Problème** : WordPress affiche "L'installation a échoué : Impossible de créer le répertoire"

**Solutions** :

- Vérifiez les permissions des fichiers WordPress
- Assurez-vous que `/wp-content/plugins/` est accessible en écriture (permissions 755)
- Essayez la méthode d'installation manuelle

### Écran blanc après activation

**Problème** : Le site affiche un écran blanc après l'activation du plugin

**Solutions** :

1. **Augmentez la limite de mémoire PHP** dans `wp-config.php` :
   ```php
   define('WP_MEMORY_LIMIT', '256M');
   ```
2. **Vérifiez la version PHP** - nécessite PHP 7.4+
3. **Désactivez les plugins en conflit**
4. **Basculez vers un thème par défaut** temporairement

### robots.txt introuvable

**Problème** : `votresite.com/robots.txt` renvoie une erreur 404

**Solutions** :

1. **Vérifiez les paramètres de confidentialité WordPress** :
   - Allez dans **Réglages → Lecture**
   - Assurez-vous que "Décourager les moteurs de recherche..." est **décoché**

2. **Vérifiez la structure des permaliens** :
   - Allez dans **Réglages → Permaliens**
   - Sauvegardez les paramètres (aucune modification nécessaire)

3. **Vérifiez le fichier .htaccess** :
   ```apache
   <Files robots.txt>
       Allow from all
   </Files>
   ```

### Les paramètres du plugin ne sauvegardent pas

**Problème** : Les modifications dans les paramètres ne sauvegardent pas

**Solutions** :

1. **Videz le cache WordPress**
2. **Vérifiez la compatibilité de la version PHP**
3. **Vérifiez les permissions utilisateur** (doit être Administrateur)
4. **Désactivez les plugins de cache** temporairement

## Désinstallation

Si vous devez supprimer Better Robots.txt :

### Suppression sécurisée

1. **Sauvegardez vos paramètres** (capture d'écran ou copie de la configuration)
2. Allez dans **Extensions → Extensions installées**
3. Trouvez "Better Robots.txt" et cliquez sur **Désactiver**
4. Cliquez sur **Supprimer** pour retirer complètement

### Préserver les paramètres lors de la suppression

Pour conserver votre configuration robots.txt après désactivation :

1. Allez dans **Better Robots.txt → Paramètres**
2. Faites défiler vers **Options avancées**
3. **Décochez** "Supprimer les paramètres lors de la désinstallation"
4. Sauvegardez les modifications avant la désactivation

## Migration depuis d'autres plugins robots.txt

Vous passez d'un autre plugin robots.txt ? Better Robots.txt automatiquement :

- **Détecte** les fichiers robots.txt existants
- **Importe** les paramètres actuels lorsque possible
- **Sauvegarde** la configuration originale
- **Fournit** des recommandations de migration

::: warning Fichiers physiques
Si vous avez un fichier `robots.txt` physique dans votre répertoire racine, le plugin suggérera de le supprimer pour la génération virtuelle, ou de le convertir pour les utilisateurs de la version Pro.
:::

## Obtenir de l'aide

Si vous rencontrez des problèmes lors de l'installation :

- **Forum de support** : [Support WordPress.org](https://wordpress.org/support/plugin/better-robots-txt/)
- **Documentation** : Continuez à lire ces guides
- **Support premium** : Disponible pour les utilisateurs de la version Pro
- **Contact** : Via la page de support du plugin

## Prochaines étapes

Après une installation réussie :

1. 📖 Lisez le [Guide de démarrage rapide](/fr/quick-start)
2. ⚙️ Configurez vos [Paramètres de base](/fr/basic-configuration)
3. 🚀 Explorez les [Règles Avancées](/fr/settings/sitemaps)
4. 🎯 Consultez nos [Exemples](/fr/examples) pour cas d'usage courants

---

**Besoin d'aide ?** Visitez notre [Forum de support](https://wordpress.org/support/plugin/better-robots-txt/) ou consultez notre [Guide de dépannage](/fr/troubleshooting).
