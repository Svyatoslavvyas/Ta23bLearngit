const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();

const characters = [
  {
    name: "Wasp Beth",
    status: "Alive",
    species: "Animal",
    gender: "Female",
    origin: "Earth (Wasp Dimension)",
    location: "Earth (Wasp Dimension)",
    image: "https://rickandmortyapi.com/api/character/avatar/521.jpeg",
    type: "Wasp",
    episodeCount: 1
  },
  {
    name: "Caterpillar Mr. Goldenfold’s Larvae",
    status: "Dead",
    species: "Animal",
    gender: "unknown",
    origin: "Earth (Wasp Dimension)",
    location: "Earth (Wasp Dimension)",
    image: "https://rickandmortyapi.com/api/character/avatar/522.jpeg",
    type: "Caterpillar",
    episodeCount: 1
  }
];

nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.render('index.njk', { characters });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
