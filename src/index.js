import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/users', (req, res) => {
  res.send('Get all users');
})

app.get('/users/:userid', (req, res) => {
  res.send(`Get user ${req.params.userid}`);
})

app.post('/users', (req,res) => {
  return res.send('Received POST HTTP');
})

app.put('/users/:userid', (req,res) => {
  return res.send(`PUT method for userid ${req.params.userid}`);
})

app.delete('/users/:userid', (req,res) => {
  return res.send(`DELETE method for userid ${req.params.userid}`);
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});