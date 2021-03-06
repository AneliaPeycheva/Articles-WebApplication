const Article = require('../models/article')

module.exports = {

    index(req, res) {
        Article.find()
            .lean()
            .then((articles) => {
                res.render('articles/index', { articles });
            })
    },

    getCreate: function (req, res) {
        res.render('articles/create')
    },

    postCreate(req, res) {
        const { title, content, author } = req.body
        let article = new Article({
            title,
            content,
            author
        })

        article.save(function (err, data) {
            if (err) return console.error(err);
            res.redirect('/articles')
        });
    },

    getByAuthor(req, res) {
        Article.find({ author: req.params.name })
            .lean()
            .then(function (data) {
                res.render('articles/index', { articles: data })
            })
    }

}