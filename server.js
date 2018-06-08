const express = require('express');
const cors = require('cors');

const projects = require('./data/helpers/projectModel');
const actions = require('./data/helpers/actionModel.js');

const port = 5555;
const server = express();

server.use(express.json());
server.use(cors());


//******************* middleware **************************//


//******************* EndPoint Starts Here *******************//

server.get('/', (req, res) => {
    res.send('Hello from Port 5555');
})

//=================== Projects EndPoint ====================//


//=================== Actions EndPoint ====================//




server.listen(port, () => console.log(`Server is running on port ${port}`));