const db = require('../database/models');

const controller = {
    create: async (req, res) => {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            roles_id: req.body.role,
            countries_id: req.body.country
        };
        db.User.create(newUser)
            .then((userCreated) => {
                res.json({
                    message: `Hola ${newUser.name} tu id es ${userCreated.id}`
                });
            })
            .catch((error) => {
                res.json(error);
            })
        // try {
        //     const newUser = {
        //         name: req.body.name,
        //         email: req.body.email,
        //         password: req.body.password,
        //         roles_id: req.body.role,
        //         countries_id: req.body.country
        //     };
        //     const userCreated = await db.User.create(newUser);
        //     res.json({
        //         message: `Hola ${newUser.name} tu id es ${userCreated.id}`
        //     });
        // } catch (error) {
        //     res.json(error);
        // }
    },
    all: async (req, res) => {
        try {
            const users = await db.User.findAll({
                attributes: {
                    exclude: ['password', 'roles_id', 'countries_id']
                },
                include: ['role', 'country']
            });
            res.json(users);
        } catch (error) {
            res.json(error);
        }
    }
};

module.exports = controller;