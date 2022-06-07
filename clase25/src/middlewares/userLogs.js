const fs = require('fs');

function registerLog(req, res, next) {
    const log = `El usuario ingresó a la ruta: ${req.url}\n`;
    fs.appendFileSync('logs/userLogs.txt', log);
    next();
}

module.exports = registerLog;