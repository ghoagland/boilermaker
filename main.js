const db = require('./server/db');

// and our server is created in 'server.js'

db.sync()  // sync our database
.then(() => require('./server')) // then start our express server
