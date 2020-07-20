const heroRoutes = (app, fs) => {
    const dataPath = "./data/heroes.json";

    app.get('/heros',(req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }

        res.send(JSON.parse(data));
        });
    });
};

module.exports = heroRoutes;