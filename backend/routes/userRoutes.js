import express from "express";

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

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/:id').delete(deleteUser).get(getUserByID).put(updateUserProfile);
router.route('/profile').get(getUserProfile).get(getUserByID).put(updateUser);

export default router;