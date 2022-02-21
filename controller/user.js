const Users = require("../model/user")

const getUsers =async (req, res) => {

    try {
        const users = await Users.find({}).select(["-_id", "-__v"])

        res.status(200).json({
            status: 'success',
            data: users
        })
    } catch (error) {
        res.status(error.code || 500).json({
            status: "fail",
            message: error.message
        })
    }
}

module.exports = { getUsers }