const controller = {
    index: (req, res) => {
        res.render('index');
    },
    admin: (req, res) => {
        res.send(`Hola Admin: ${req.query.name}`);
    }
};

module.exports = controller;