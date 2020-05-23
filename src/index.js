import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { v4 as uuidv4} from 'uuid';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use((req,res,next) => {
  // dostuffs
  req.me = users[1];
  next();
})

// ---------------------

app.get('/session', (req,res) => {
  return res.send(users[req.me.id]);
})

app.get('/users', (req, res) => {
  return res.send(Object.values(users));
})

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
})

app.post('/users', (req,res) => {
  return res.send('Received POST HTTP');
})

app.put('/users/:userId', (req,res) => {
  return res.send('Patch the user');
})

app.delete('/users/:userId', (req,res) => {
  return res.send(`DELETE method for userId ${req.params.userId}`);
})


// -----------------------

app.get('/messages', (req,res) => {
  return res.send(Object.values(messages));
})

app.post('/messages', (req,res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.me.id
  };
  messages[id] = message;
  return res.send(message);
})

app.get('/messages/:messageId', (req,res) => {
  return res.send(messages[req.params.messageId]);
}) 

app.delete('/messages/:messageId', (req,res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = messages;

  messages = otherMessages;

  return res.send(`DELETE message ${req.params.messageId}`);
})

// -----------------------

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

// -----------------------

let users = {
  1: {
    id: '1',
    username: 'Susan Erhart',
  },
  2: {
    id: '2',
    username: 'Jeremy Smith',
  },
};
 
let messages = {
  1: {
    id: '1',
    text: 'Hello Cosmos',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'Bye Cosmos',
    userId: '2',
  },
};