const express = require('express');
const PORT = 4000;
const bodyParser = require('body-parser');
// const router = require('./Routes/userRoutes')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

// app.use("/v1/api", router)
app.use("/v1/api", require('./Routes/userRoutes'))

app.listen(PORT, ()=>{
    console.log(`Server is Working on port: ${PORT}`);
})