import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Getting this?');
})

app.post('/', (req,res) => {
  return res.send('Received POST HTTP');
})

app.put('/', (req,res) => {
  return res.send('Recieved PUT HTTP');
})

app.delete('/', (req,res) => {
  return res.send('Recieved DELETE HTTP');
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});