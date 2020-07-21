const heroRoutes = (app, fs) => {
    const dataPath = "./data/heroes.json";
    const Hero = require('../models/Hero');
    app.get('/heroes',(req, res) => {
        Hero.find().then(heroes => res.json(heroes)).catch(err => console.log("not found"));
    
    });

    app.get('/heros/:id', (req,res) =>{
        Hero.findOne({id: req.params.id})
    });

    app.put('/heroes/:id', (req, res) => {
        var hero = Hero.findOneAndUpdate(
            {id: req.params.id},
            {$set:{   name: req.body.name}},
            {upsert: true}
        ).then(res.send("OK")).catch(res.send("NOK"));
    });

    app.delete("/heroes/:id", (req,res) =>{
        Hero.deleteOne({id : req.params})
        .then(res.send("Ok"))
        .catch(err => res.send("not found"))
    });
    app.post('/heroes',(req, res) => {
        console.log(req.body.id);
        const newHero = new Hero({
            id: req.body.id,
            name: req.body.name
        });
        newHero.save().then(res.json("OK")).catch("NOK");
    });
};

module.exports = heroRoutes;