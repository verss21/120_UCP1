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

app.get('/hotel', async (req, res) => {
    try {
        const hotel = await db.Hotel.findAll();
        res.send(hotel);
    } catch (error) {
        res.send({message: error.message});
    }
});

app.put('/hotel/:id', async (req, res) => {
    try {
        const Hotel = await db.Hotel.findByPk(req.params.id);
        if (!Hotel) return res.status(404).send({message: 'Hotel not found'});
        
        await Hotel.update(req.body);
        res.send({message : "Hotel berhasil di update", Hotel});
    } catch (error) {
        res.send({message: error.message});
    }
});

app.delete('/hotel/:id', async (req, res) => {
    try {
        const Hotel = await db.Hotel.findByPk(req.params.id);
        if (!Hotel) return res.status(404).send({message: 'Hotel not found'});

        await Hotel.destroy();
        res.send({message : "Hotel berhasil dihapus", Hotel});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});
 