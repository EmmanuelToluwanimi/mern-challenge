const users_data = require("../data/user.json")
const Users = require("../model/user")

const seed_data = async () => {

    const users = await Users.find()

    if (users.length !== 0) return

    await Users.insertMany(users_data)
    console.log("Users data synced to db successfully")
}

module.exports = { seed_data }