const app = require('./app');

const port = process.env.PORT || 3400;

app.listen(port, () => console.dir(`listening on ${port}`));
