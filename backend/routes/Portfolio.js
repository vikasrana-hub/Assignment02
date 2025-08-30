import express from 'express';
import connectDB from '../database/db.js';
import Portfolio from '../database/schema.js';

const router = express.Router()

router.post('/userInfo', async (req, res) => {
    try {
        await connectDB();
        const  data = req.body;
        const user = await Portfolio.create(data);
        await user.save();
        const userid = user._id;
        const template = user.Templet;
        res.status(200).json({ message: "Data received successfully", userid: userid, template: template });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error")
    }
})
router.get('/getUserInfo', async (req, res) => {
    try {
        await connectDB();
        const users = await Portfolio.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error")
    }
})
router.get('/getUserInfo/:id', async (req, res) => {
    try {
        await connectDB();
        const user = await Portfolio.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error")
    }
})





export default router;