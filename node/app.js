const express = require('express');
const data = require('./tasks');
require('./mongo');
const Task = require('./models/task')

const app = express();

app.use(express.json())
// 1
app.get('/tasks', (req, res) => {
    Task.find({}).then((data) => {
        res.json(data);
    }).catch(e => {
        console.error(e);
    });
});
// 2
app.get('/tasks/:id', (req, res) =>{
    const givenId = req.params.id;
    Task.findOne({_id: givenId}).then((data) => {
        if(!data){
            res.status(404);
            res.json({error: 'Task does not exist'});
            return;
        }
        res.json(data);

    }).catch(error => {
        console.error(error);
        res.status(404);
        res.json({error: 'Task does not exist'});
    });
});
// 3
app.post('/tasks', (req, res) => {
    const title = req.body.title;
    const status2 = req.body.status2;

    const objectToInsert = new Task({
        status: 'Pending',
        title: title,
        status2: status2
    })

    objectToInsert.save().then(() => {
        res.json(objectToInsert);
    }).catch(error => {
        console.error(error);
    });
});
// 4
app.delete('/tasks/:id', (req, res) =>{
    const givenId = req.params.id;
        
    Task.deleteOne({_id: givenId}).then((data) => {
        if(!data){
            res.status(404);
            res.json({error: 'Task can not be deleted, because does not exist'});
            return;
        }
        res.status(204);
        res.send();
    }).catch(error => {
        console.error(error);
        res.status(404);
        res.json({error: 'Task can not be deleted, because does not exist'});
    });
})
// 5
app.put('/tasks/:id', (req, res) => {
    const givenId = req.params.id
    const givenStatus = req.body.status;
    const givenTitle = req.body.title;
    const givenStatus2 = req.body.status2;

    Task.updateOne({_id: givenId}, {status: givenStatus, title: givenTitle, status2: givenStatus2}).orFail().then((data) => {
        if(!data){
            res.status(404);
            res.json({error: 'Task can not be updated, because does not exist'});
            return;
        }
        res.status(200);

        res.json({_id: givenId, status: givenStatus, title: givenTitle, status2: givenStatus2});
    }).catch(error => {
        console.error(error);
        res.status(404);
        res.json({error: 'Task can not be updated, because does not exist'});
    })
})

app.listen(3000);