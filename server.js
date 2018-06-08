const express = require('express');
const cors = require('cors');

const projects = require('./data/helpers/projectModel.js');
const actions = require('./data/helpers/actionModel.js');

const port = 5555;
const server = express();

server.use(express.json());
server.use(cors());

 const errorAlert = (status, message, res) => {
    res.status(status).json({ error: message });
 }

server.get('/', (req, res) => {
    res.send('Hello from Port 5555');
})

//=================== Projects EndPoint ====================//

server.get('/api/projects', (req, res) => {
    projects
        .get()
        .then(project => {
            res.json({ project })
        })
        .catch(err => {
            return errorAlert(500, 'The information could not be retieved.', res);
        })
})

//=================== Actions EndPoint ====================//




server.listen(port, () => console.log(`Server is running on port ${port}`));