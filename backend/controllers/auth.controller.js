import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookies from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const {fullname, username, password, confirmPassword, gender} = req.body

        if (password !== confirmPassword) {
            return res.status(400).json({error: "Passwords do not match"})
        }

        const user = await User.findOne({username});
        if (user) {
            return res.status(400).json({error: "username already exists"})
        }

        //HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser) {
            //generate GWT token
            generateTokenAndSetCookies(newUser._id, res);
            await newUser.save();
            res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic
            });
        } 
        else {
            res.status(400).json({error: "username already exists"})
        }
    } 
    catch (error) {
        console.log("Error in the dummy signup controller", error.message)
        res.status(500).json({error: "Internal server error idk how to solve"})
    }
};

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateTokenAndSetCookies(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic 
        })
    }
    catch (error) {
        console.log("Error in the dummy login controller", error.message);
        res.status(500).json({error: "Internal server error idk how to solve"});
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully!"});
    }
    catch(error) {
        console.log("Error in the dummy login controller", error.message);
        res.status(400).json({error: "Internal server error idk how to solve"});
    }
};
