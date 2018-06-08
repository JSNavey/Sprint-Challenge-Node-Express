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

server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    projects
        .get(id)
        .then(project => {
            res.json({ project })
        })
        .catch(err => {
            return errorAlert(500, 'The information could not be retieved.', res);
        })
})

server.get('/api/projects/actions/:project_id', (req, res) => {
    const { project_id } = req.params;
    projects
        .getProjectActions(project_id)
        .then(project => {
            res.json({ project })
        })
        .catch(err => {
            return errorAlert(500, 'The information could not be retieved.', res);
        })
})

server.post('/api/projects', (req, res) => {
    const { name, description, completed } = req.body;
    projects
        .insert({ name, description, completed })
        .then(newProject => {
            res.status(201).json({ newProject })
        })
        .catch(err => {
            return errorAlert(500, 'The information could not be retieved.', res);
        })
})




//=================== Actions EndPoint ====================//

server.get('/api/actions', (req, res) => {
    actions
        .get()
        .then(action => {
            res.json({ action })
        })
        .catch(err => {
            return errorAlert(500, 'The information could not be retieved.', res);
        })
})

server.get('/api/actions/:id', (req, res) => {
    const { id } = req.params;
    actions
        .get(id)
        .then(action => {
            res.json({ action })
        })
        .catch(err => {
            return errorAlert(500, 'The information could not be retieved.', res);
        })
})

server.post('/api/actions/:project_id', (req, res) => {
    const { project_id } = req.params;
    const { description, notes, completed } = req.body;
    actions
        .insert({ project_id, description, notes, completed })
        .then(newAction => {
            res.status(201).json({ newAction })
        })
        .catch(err => {
            return errorAlert(500, 'The information could not be retieved.', res);
        })
})





server.listen(port, () => console.log(`Server is running on port ${port}`));