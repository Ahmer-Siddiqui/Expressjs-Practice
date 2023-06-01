const path = require('path');

const registerUser = (req, res)=>{
    const userName = req.body.name;

    const userEmail = req.body.email;
    const userPassword = req.body.password;

    res.json({success : true})
}

const userData = (req, res)=>{
    res.sendFile(path.join(process.cwd(),"index.html"))
}

module.exports = {registerUser,userData};