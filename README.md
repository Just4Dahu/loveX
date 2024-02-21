# Documentation des Fonctionnalités JavaScript pour Site Web

Ce document présente deux fonctionnalités JavaScript destinées à enrichir l'expérience utilisateur sur un site web : un calculateur d'affinité amoureuse et une fonction de recherche de produits sur Amazon. Il détaille ce que chaque fonctionnalité apporte, comment les intégrer, tester et exécuter localement.

## Qu'est-ce que c'est ?

### Calculateur d'Affinité Amoureuse
Permet aux utilisateurs de saisir deux prénoms pour calculer leur pourcentage d'affinité amoureuse. Un cas spécial augmente ce pourcentage à 110 % si l'un des prénoms est "Géraldine" ou "Geraldine".

### Recherche de Produits sur Amazon
Utilise le texte d'un bouton comme mot-clé pour rechercher des produits correspondants sur Amazon, et affiche les résultats directement sur la page.

## Services / Fonctionnalités

- **Calculateur d'Affinité Amoureuse** : Offre un moyen ludique et interactif d'explorer la compatibilité amoureuse entre deux personnes.
- **Recherche de Produits sur Amazon** : Facilite la recherche de produits sans quitter la page courante, améliorant l'expérience utilisateur par une intégration transparente de contenu externe.

## Comment Construire

### Prérequis
- Serveur web local ou en ligne pour héberger les fichiers.
- Accès à une API externe pour la recherche de produits sur Amazon (facultatif pour le calculateur d'affinité, qui ne nécessite pas d'API externe).

### Intégration
1. Ajouter le code JavaScript fourni dans votre projet HTML.
2. S'assurer que les éléments HTML (champs de saisie, boutons) sont correctement identifiés dans le script.

## Comment Tester

### Calculateur d'Affinité Amoureuse
1. Ouvrir la page contenant le formulaire du calculateur.
2. Entrer différents prénoms dans les champs prévus et soumettre.
3. Vérifier que le pourcentage et le message s'affichent correctement.

### Recherche de Produits sur Amazon
1. Cliquer sur un bouton de recherche pour initier la recherche.
2. Observer les résultats affichés et vérifier qu'ils correspondent au mot-clé utilisé.

## Comment Exécuter Localement

1. Assurez-vous d'avoir un environnement local capable de servir des fichiers HTML (par exemple, Apache, Nginx, ou un serveur local simple comme `http-server` en Node.js).
2. Placez vos fichiers dans le répertoire racine de votre serveur.
3. Accédez à votre serveur local via un navigateur web pour voir le projet en action.
4. Pour la recherche de produits sur Amazon, assurez-vous que la requête proxy vers l'API Amazon est correctement configurée sur votre serveur.

## Conclusion

Ces fonctionnalités offrent des interactions dynamiques et pratiques pour les utilisateurs, en améliorant l'engagement et l'utilité d'un site web. Leur intégration nécessite une compréhension de base du développement web et de JavaScript.
