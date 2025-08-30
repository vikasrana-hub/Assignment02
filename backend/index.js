import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './database/db.js';
import router from './routes/Portfolio.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const start = async () => {
    try {
        await connectDB();
        app.use('/api/', router);

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });


    } catch (error) {
        console.log(error);

    }
}
start();
