const express = require('express');
const app = express();
const PORT = 3009;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.sequelize.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log('Server Started on port', PORT);
    });
})
.catch(err => console.log(err));

app.post('/hotel', async (req, res) => {
    try {
        const hotel = await db.Hotel.create(req.body);
        res.send(hotel);
    } catch (error) {
        res.send({message: error.message});
    }
});

