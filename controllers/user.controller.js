const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const wrapAsyc = require("../utils/wrapAsyc");
const UserModel = require("../models/user.Schema");

const signup =wrapAsyc( async (req, res) => {
    const { username, email, password } = req.body;
        const User = await UserModel.findOne({ email });
        if (!User) {
            bcrypt.hash(password, 7, async (err, hash) => {
                if (err) {
                    res.send(err)
                }
                else {
                    let data = await UserModel.create({ username: username, email: email, password: hash })
                    res.json(data)
                    
                }
            })
        }
        else {
            return res.status(400).json({ message: 'User already exists' });
        }
})

const login = wrapAsyc(async (req, res) => {
    const { email, password } = req.body;
    
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found!' });
        }
        else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Incorect Password' });
            }
            else {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
                res.cookie("token", token)
                res.status(200).json({ token, userID: user._id });
            }
        }
}
)

module.exports = { signup, login }