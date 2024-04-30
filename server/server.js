require('dotenv').config();
const express = require('express');
const tasks = require('./routes/tasksRoutes');
const connectToDb = require('./config/dbConnection');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');

connectToDb();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(errorHandlerMiddleware);
app.use(notFound);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});