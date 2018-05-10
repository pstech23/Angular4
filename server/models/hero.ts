import * as mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
    name: String
}, { collection: 'heroes'});

const Hero = mongoose.model('Hero', heroSchema);

export default Hero;
