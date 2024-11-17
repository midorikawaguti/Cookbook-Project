import express from "express";
import {protect, admin} from '../middleware/authMiddleware.js'

const router =  express.Router();

import{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
} from "../controllers/usersControllers.js";

// Routes for registration and getting all users (admin function)
router.route('/').post(registerUser).get(protect, admin, getUsers);

// Route for logging out
router.post('/logout', logoutUser);

// Route for logging in
router.post('/login', authUser);

// Route for getting and updating user profile
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

// Route for deleting, fetching by ID, and updating a specific user
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserByID).put(protect, admin, updateUser);


export default router;