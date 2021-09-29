const express = require('express');
const data = require('./tasks');

const app = express();

app.use(express.json())
// 1
app.get('/tasks', (req, res) => {
    res.json(data.tasks);
});
// 2
app.get('/tasks/:id', (req, res) =>{
    const givenId = req.params.id;

    const searchedTask = data.tasks.find(element => element.id == givenId);
    
    if(!searchedTask){
        res.status(404);
        res.json({error: 'Task does not exist'});
        return;
    }

    res.json(searchedTask)
});
// 3
app.post('/tasks', (req, res) => {
    const title = req.body.title;
    let counter = 0
    for(let i = 0; i <= data.tasks.length; i++){
        counter = i;
    }

    const newTask = {
        id: counter + 1,
        status: 'Pending',
        title: title
    };
    data.tasks.push(newTask);
    res.status(201);
    res.json(newTask)
});
// 4
app.delete('/tasks/:id', (req, res) =>{
    const givenId = req.params.id;

    const searchedTask = data.tasks.find(element => element.id == givenId);

    if(!searchedTask){
        res.status(404);
        res.json({error: 'Task can not be deleted, because does not exist'});
        return;
    }

    newArray = data.tasks.splice(givenId - 1, 1);

    res.status(204);
    res.send();
})
// 5
app.put('/tasks/:id', (req, res) => {
    const givenId = req.params.id
    const givenStatus = req.body.status;
    const givenTitle = req.body.title;

    const existingTask = data.tasks.find(element => element.id == givenId); 

    if(!existingTask){
        res.status(404);
        res.json({error: 'Task can not be updated, because does not exist'});
        return;
    }
    
    existingTask.status = givenStatus;
    existingTask.title = givenTitle;
    
    res.status(200);
    res.json(existingTask);
})

app.listen(3000);