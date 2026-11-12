import express from "express";

import bookRoutes from "./routes/bookRoutes.js";
import studentRoutes from "./routes/studentsRoutes.js";
import userRoutes from './routes/userRoutes.js';


//create express app
const app = express();

app.use(express.json());

/* Routes implementation */
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);
app.use('/user', userRoutes);


try {
    const port = 3000; // Define port variable
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}