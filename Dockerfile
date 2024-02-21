# Utilisez une image officielle Node.js en tant que base
FROM node:12

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez le fichier package.json et package-lock.json (si disponible)
COPY package*.json ./

# Installez les dépendances du projet
RUN npm install

# Copiez le reste des fichiers du projet dans le conteneur
COPY . .

# Exposez le port sur lequel l'application écoute
EXPOSE 8080

# Commande pour exécuter l'application
CMD ["npm", "start"]
