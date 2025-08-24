const express = require('express');
const app = express();

// Sample Data
const harmfulEffects = [
  "Lung cancer",
  "Heart disease",
  "Respiratory issues",
  "Increased risk of stroke",
  "die"
]

// Endpoint for harmful effects
app.get('/harmful-effects', (req, res) => {
  res.json({ effects: harmfulEffects });
});

// Endpoint for a random harmful effect
app.get('/random-effect', (req, res) => {
  const randomEffect = harmfulEffects[Math.floor(Math.random() * harmfulEffects.length)];
  res.json({ effect: randomEffect });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
