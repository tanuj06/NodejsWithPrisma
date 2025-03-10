const jwt = require('jsonwebtoken')

const getJwtToken = (userId)=>{
    return jwt.sign({UserId: userId}, process.env.JWT_SECRET, {expiresIn : '1 day'}  )
}

module.exports = getJwtToken;