var express = require('express');
var router = express.Router();

/* GET users listing. */
let users = { items: [] }

router.post('/', (req, res) => {
  users.items.push(req.body)
  res.send(users);
})

// router.post('/', function(req, res, next) {
//   res.json({
//     requestmax: req.body   
//   })
// })


router.post('/delete', (req, res) => {
  users.items = users.items.filter(function (xxx) { return xxx.email != req.body.email })
  res.send(users);
})

module.exports = router;
