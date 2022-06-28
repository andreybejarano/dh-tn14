const db = require('../database/models');
const sequelize = db.sequelize;
/**
 * En este controlador se usaron los then y catch para reolver las promesas
 */
const genresController = {
    list: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.render('genresList.ejs', {genres})
            })
            .catch(err => {
                res.send(err);
            });
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            })
            .catch(err => {
                res.send(err);
            });
    }

}

module.exports = genresController;