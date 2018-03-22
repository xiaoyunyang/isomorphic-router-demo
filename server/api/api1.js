import express from 'express';

const api = express.Router();

const quotes = [
  'The right to do something does not mean that doing it is right. ~ William Safire',
  'It is the mark of an educated mind to be able to entertain a thought without accepting it. ~ Aristotle',
  'Education is not the filing of a pail, but the lighting of a fire. ~ William Butler Yeats',
  'You have to dream before your dream can come true. ~ Abdul Kalam',
  'All life is an experiment. The more experiements you make the better. ~ Ralph Waldo Emerson',
  'All the art of living lies in a fine mingling of letting go and holding on. ~ Henry Ellis',
  'The price of anything is the amount of life you exchange for it. ~ Henry David Thoreau',
  'Discipline is the bridge betwenn goal and accomplishment. ~ John Rohn',
  'Life is the sum of your choices. ~ Albert Camus',
  'Not life, but good ilfe, is to be chiefly valued. ~ Socrates',
  'It is not in the stars to hold our destiny but in ourselves. ~ William Shakespeare',
  'Experience is not what happens to you; It is what you do with what happens to you. ~ Aldous Huxley',
  'Failure is only the opportunity to begin again, only this time more wisely.” ~ Henry Ford'
];

// a random index between 0 and quotes.length
const randomInd = (rand) =>  Math.floor(rand * quotes.length);

api.get('/hello', (req, res) => {
  res.send({ express: `You can choose from ${quotes.length} quotes` });
});


api.get('/quote/:rand', (req, res) => {
  const rand = parseFloat(req.params.rand);
  if (Number.isNaN(rand)) {
    res.send({ express: 'Bad request.' });
    return;
  }
  const randomQuote = quotes[randomInd(rand)];

  res.send({ express: `${randomQuote}` });
});

module.exports = api;
