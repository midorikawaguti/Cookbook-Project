import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken';

// @desc Auth user & get token
// @route GET/api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
    const{email, password} = req.body;
    const user = await User.findOne({email});
    
    if(user&&(await user.matchPassword(password))){
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET,{
            expiresIn:'30d'
        });
        
        //set JWT as HTTP-Only Cookie
        res.cookie('jwt', token,{
            httpOnly: true,
            secure: process.env.NODE_ENV!=='development',
            samesite:'strict',
            maxAge: 30*24*60*60*1000 
        });
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else{
        res.status(401);
        throw new Error('Invalid email or password');
    }
});


// @desc Register user
// @route POST/api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    res.send('register user')
});

// @desc Get user profile
// @route GET/api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
});

// @desc Logout user / clear cookie
// @route POST/api/users/logout
// @access Private

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({message:'Logged out successfully'});
});


// @desc Update user profile
// @route PUT/api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user')
});

// @desc Get users
// @route GET/api/users
// @access Private/ Admin

const getUsers = asyncHandler(async (req, res) => {
    res.send('get users')
});


// @desc Get users by ID
// @route GET/api/users/:id
// @access Private/ Admin

const getUserByID = asyncHandler(async (req, res) => {
    res.send('get user by ID')
});


// @desc Delete user by ID
// @route DELETE/api/users/:id
// @access Private/ Admin

const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user by ID')
});

// @desc Update user
// @route PUT/api/users/:id
// @access Private/ Admin

const updateUser = asyncHandler(async (req, res) => {
    res.send('update user')
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
}