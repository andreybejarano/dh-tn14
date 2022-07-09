const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser')

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(cookieParser());
app.use(session({ secret: 'estaEsMiclaveSecret' }));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', mainRoutes);
app.use('/user', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});

