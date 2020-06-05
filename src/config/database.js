const mongoose = require('mongoose')

function database(config) {
    mongoose.connect(config.dbRoute, {
        useNewUrlParser: true
    })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('Db Conected'));

}

module.exports = database