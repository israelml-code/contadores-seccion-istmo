const express = require('express');
const path = require('path');
const app = express();

// Servir todos los archivos estáticos de esta carpeta
app.use(express.static(path.join(__dirname)));

// Cualquier ruta devuelve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor corriendo en puerto ' + PORT);
});
