const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const { getUsers } = require('./controller/user')
const connectDB = require('./config/db')

connectDB()
app.use(express.json())

app.get("/api", getUsers)

app.listen(PORT, () => console.log(`Server running on port ${PORT} \u2714`))