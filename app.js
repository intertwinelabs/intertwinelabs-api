/**
 * Package: intertwinelabs-api
 * Author:  Richard Lee
 * Date:    29 Jan 2023
 *
 * Simple API to respond to get/post methods for testing purpose
 */

const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.get('/api/ping', (req,res) => {

    res.status(200).send({
        message: "Ping successful!",
        method: "get"
    });
});

app.post('/api/ping',(req,res) => {
    res.status(200).send({
        message: "Ping successful!",
        method: "post"
    });
});

app.get('*', (req,res) => {
    res.status(200).send('~^0^~');
});

app.post('*', (req,res) => {
    res.status(200).send('~^0^~');
});

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);