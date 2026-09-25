import express from "express";

import bookRoutes from "./routes/bookRoutes.js";

//create express app
const app = express();

/* Routes implementation */
app.use('/books', bookRoutes);

try {
    const port = 3000; // Define port variable
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}