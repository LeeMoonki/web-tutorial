const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const PORT = process.env.port || 8080;

const app = express();
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const loginRouter = require('./routes/login');
const cardsRouter = require('./routes/cards');

app.use('/api/login', loginRouter);
app.use('/api/cards', cardsRouter);

function renderView(res, view) {
  const page = fs.readFileSync(path.resolve(__dirname, `../view/${view}.html`));

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(page);
  res.end();;
}

app.get('/', (_, res) => {
  renderView(res, 'index');
});

app.get('/counter', (_, res) => {
  renderView(res, 'counter');
});

app.listen(PORT, () => {
  console.log('Ready to serve client pages at : ', PORT);
});
