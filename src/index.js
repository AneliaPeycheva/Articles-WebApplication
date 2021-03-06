const express = require('express')
const app = express();
const config = require('./config/config')
const router = require('./config/routes')

require('./config/express')(app);

require('./config/database')(config);
//const db=require('./config/database')
//db(config)

router(app)

app.listen(config.port,
    () => console.log(`Server is on port ${config.port}........`))