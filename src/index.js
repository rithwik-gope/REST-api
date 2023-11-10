const express = require('express');
const app = express();
const person = require('./routes/person');
const port = '4041';
app.use(express.json())
app.use(person)
app.get('/',(req,res) => {
  res.send('hello world');
})

app.listen(port,() => {
  console.log(`server is running on ${port}`);
})