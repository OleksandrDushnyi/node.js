const asyncHandler = require("express-async-handler")

//@desc Register a User
//@route POST /api/useers/register
//@access public
const registerUser = asyncHandler( async (req, res) => {
    res.json({message: "Register the user"})
})

//@desc Login a User
//@route POST /api/useers/login
//@access public
const loginUser = asyncHandler( async (req, res) => {
    res.json({message: "Login the user"})
})

//@desc Current user
//@route POST /api/useers/current
//@access private
const currentUser = asyncHandler( async (req, res) => {
    res.json({message: "Current use information"})
})

module.exports = {registerUser, loginUser, currentUser}