import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoute from './routes/user.route.js';
import adminRoute from './routes/admin.route.js';
import songRoute from './routes/song.route.js';
import albumRoute from './routes/auth.route.js';
import statsRoute from './routes/stats.route.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000

app.use("/api/users", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/songs", songRoute);
app.use("/api/albums", albumRoute);
app.use("/api/stats", statsRoute);

app.listen(PORT, () => {
    console.log(`Server Activate on Port: ${PORT}`);
})
