const app = require('./app');

app.listen(app.get('port'), () => console.dir('app listening on port 3001'));
