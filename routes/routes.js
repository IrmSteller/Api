const heroRoutes = require('./heroes');

const appRouter = (app, fs) => {
    console.log("get");
    app.get('/', (req,res) =>{
        res.send("welcome to api-server");
    });

    heroRoutes(app, fs);
};

module.exports = appRouter;