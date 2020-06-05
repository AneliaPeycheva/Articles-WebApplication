const articlesController = require('../controllers/articles-controller')
function router(app) {
    app.get('/', (req, res) => {
        res.render('home/index')
    })

    app.get('/articles', articlesController.index)

    app.get('/articles/create', articlesController.getCreate)

    app.post('/articles/create', articlesController.postCreate)
}
module.exports = router