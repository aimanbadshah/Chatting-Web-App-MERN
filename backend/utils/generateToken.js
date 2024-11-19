import jwt from 'jsonwebtoken';

const generateTokenAndSetCookies = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d",
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 *60 *1000,
        httpOnly: true, // prevent XXS attacks: cross-sites scripting attacks
        sameSite: "strict" //CSRF attacks: cross-sites forgery attacks 
    })
}

export default generateTokenAndSetCookies;