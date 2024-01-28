const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});