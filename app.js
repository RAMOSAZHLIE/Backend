import express from "express";

import bookRoutes from "./routes/bookRoutes.js";
import studentRoutes from "./routes/studentsRoutes.js";

import e from "express";

//create express app
const app = express();

app.use(express.json());

/* Routes implementation */
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);

try {
    const port = 3000; // Define port variable
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}