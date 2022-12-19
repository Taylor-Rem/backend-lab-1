let express = require('express');
let cors = require('cors');

let app = express();

app.use(cors());
app.use(express.json());

let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riley'];

app.get('/api/users', (req, res) => res.status(200).send(friends));

app.get('/weather/:temperature', (req, res) =>
  res.status(200).send(`<h3>It was ${req.params.temperature} today</h3>`)
);

app.listen(4000, () => console.log('server running on port 4000'));
