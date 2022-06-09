const { validationResult } = require('express-validator');

const controller = {
    home: (req, res) => {
        // const email = req.session.email;
        const email = req.cookies.email;
        res.render('index', { email: email });
    },
    email: (req, res) => {
        res.cookie('email', req.body.email);
        // req.session.email = req.body.email;
        res.redirect('/');
    },
    deleteSession: (req, res) => {
        // delete req.session.email;
        res.clearCookie('email');
        res.redirect('/');
    },
    desafio: (req, res) => {
        res.render('desafio1', { user: req.session.user });
    },
    storeUser: (req, res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.render('desafio1', { errors: errors.errors });
        }
        req.session.user = {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            color: req.body.color
        };
        res.redirect('/desafio');
    }
}

module.exports = controller;