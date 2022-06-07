function isAdmin(req, res, next) {
    const admins = [
        'ada', 
        'greta', 
        'vim',
        'tim'
    ];
    const name = req.query.name?.toLowerCase();
    const userFound = admins.includes(name);
    if(!userFound) {
        return res.send('No tienes los privilegios para ingresar');
    }
    next();
}

module.exports = isAdmin;