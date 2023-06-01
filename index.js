const express = require('express');
const PORT = 4000;
const bodyParser = require('body-parser');
const router = require('./userRoutes')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.use("/v1/api", router)

app.listen(PORT, ()=>{
    console.log(`Server is Working on port: ${PORT}`);
})