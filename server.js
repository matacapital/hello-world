const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'hello2.html'));
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Bonjour depuis le serveur Express !', time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
