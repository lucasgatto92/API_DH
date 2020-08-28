const db = require('../database/models');

let seriesController = {
    todas: (req, res) => {
        db.Serie.findAll()
            .then(resultado => {
                return res.status(200).json(resultado);
            })
            .catch(err => { res.status(503).send(err) });
    },

    una: (req, res) => {
        db.Serie.findByPk(req.params.id)
            .then(resultado => {
                return res.status(200).json(resultado);
            })
            .catch(err => { res.status(503).send(err) });
    },

    crear: (req, res) => {
        db.Serie.create({
                title: req.body.title,
                release_date: req.body.release_date,
                end_date: req.body.end_date,
            })
            .then(resultado => {
                return res.status(201).json(resultado);
            })
            .catch(err => { res.status(503).send(err) });
    }
};

module.exports = seriesController;