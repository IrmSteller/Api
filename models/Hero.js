const mongoose = require('mongoose');

let HeroSchema = mongoose.Schema({
    id: Number,
    name: String
});

module.exports = Hero = mongoose.model('hero', HeroSchema);