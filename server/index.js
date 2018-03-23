require('newrelic');
const app = require('./app');

app.listen(app.get('port'), () => console.dir(`listening on ${app.get('port')}`)); /*eslint-disable-line*/
