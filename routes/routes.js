const userRoutes = require("./heroes");

const appRouter = (app, fs) => {
    app.get("/", (req,res) =>{
        res.send("welcome to api-server");
    });

    userRoutes(app, fs);
};

module.exports = appRouter;