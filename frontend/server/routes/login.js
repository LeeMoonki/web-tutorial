const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { id, password } = req.body;

  console.log('login api : ', id, password);

  if (id === 'test12345' && password === '123456789') {
    res.json({ success: true, id, name: '홍길동' });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;
