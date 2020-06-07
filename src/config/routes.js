const articlesController = require('../controllers/articles-controller')
const authorsController=require('../controllers/authors-controller')
function router(app) {
    app.get('/', articlesController.index)

    app.get('/articles/create', articlesController.getCreate)
    app.post('/articles/create', articlesController.postCreate)    
    app.get('/articles', articlesController.index)

    app.get('/authors', authorsController.index)
    app.get('/authors/:name/articles', articlesController.getByAuthor)   
}
module.exports = router