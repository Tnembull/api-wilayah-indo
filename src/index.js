const express = require('express');
const app = express();
const wilayahRoutes = require('./routes/wilayahRoutes');

const port = 3000;

app.use(express.json());
app.use('/api', wilayahRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
