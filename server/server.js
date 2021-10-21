require('./app/services/db');

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(cors());

// api routes
app.get('/', (req, res) => {
  res.json({ message: 'Yellow.' });
});

require('./app/components/user.routes.js')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
