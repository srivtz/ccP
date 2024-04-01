const express = require('express');
const app = express();

const PORT = 80;
const HOST = 'localhost';

app.use('/',express.static('build'));
app.use((req, res, next) => {
    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
});
app.listen(PORT,HOST,() => {
    console.log(`Listening on ${HOST}:${PORT}`);
})