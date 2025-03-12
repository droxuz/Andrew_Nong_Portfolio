console.log(process.platform);

const express = require('express');
const { readFile } = require('fs');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    readFile(__dirname + './index.js', 'utf-8', (err, html) => {
        if (err) {
            return response.status(500).send("Sorry, Not Working");
        }
        response.send(html);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App available at http://localhost:${PORT}`));