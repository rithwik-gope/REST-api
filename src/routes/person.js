const express = require('express');
const router = express.Router();
router.get('/person',(req,res) => {
  res.send('you have requested to persons')
})
router.post('/',(req,res) => {
  const {person} = req.body;
  res.send(person)
})
module.exports = router;