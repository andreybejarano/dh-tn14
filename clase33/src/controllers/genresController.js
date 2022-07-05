const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll({
            include: ['movies'] // Esto va a crear una porpiedad dentro de cada objeto llanda movies, fijense como se llama en el ejs
        })
            .then(genres => {
                res.render('genresList.ejs', {genres})
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    }

}

module.exports = genresController;