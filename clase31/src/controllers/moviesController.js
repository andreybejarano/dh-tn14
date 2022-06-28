const db = require('../database/models');


/**
 * Aqui en este controlador uso el Async/Await y el try/catch para resolver las promesas, 
 * es igual a los de generos pero recuerden que usando esta estructura queda mas prolijoj el codigo
 */
const moviesController = {
    list: async (req, res) => {
        try {
            const data = await db.Movie.findAll()
            res.render('moviesList', { movies: data });
        } catch (error) {
            res.send(error);
        }
    },
    detail: async (req, res) => {
        try {
            const data = await db.Movie.findByPk(req.params.id);
            res.render('moviesDetail', { movie: data });
        } catch (error) {
            res.send(error);
        }
    },
    new: async (req, res) => {
        try {
            const data = await db.Movie.findAll({
                order: [
                    ['release_date', 'DESC']
                ],
                limit: 5
            });
            res.render('newestMovies', { movies: data });
        } catch (error) {
            res.send(error);
        }
    },
    recomended: async (req, res) => {
        try {
            const data = await db.Movie.findAll({
                where: {
                    rating: { [db.Sequelize.Op.gte]: 8 }
                },
                order: [
                    ['rating', 'DESC']
                ]
            });
            res.render('recommendedMovies', { movies: data });
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = moviesController;