const mongoose = require('mongoose');
const { seed_data } = require('../controller/seeder');

const DB_URL = "mongodb://localhost/mern-challenge"

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        seed_data()
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}


module.exports = connectDB