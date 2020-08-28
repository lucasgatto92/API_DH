const db = require('../database/models');

let moviesApiController = {
    todas: (req, res) => {
        db.Movie.findAll()
            .then(resultado => {
                return res.status(200).json(resultado);
            })
            .catch(err => { res.status(503).send(err) });
    },

    una: (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(resultado => {
                return res.status(200).json(resultado);
            })
            .catch(err => { res.status(503).send(err) });
    },

    crear: (req, res) => {
        db.Movie.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length
            })
            .then(resultado => {
                return res.status(201).json(resultado);
            })
            .catch(err => { res.status(503).send(err) });
    }
};

module.exports = moviesApiController;