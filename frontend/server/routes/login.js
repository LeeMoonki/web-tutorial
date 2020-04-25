const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { id, password } = req.body;

  if (id === 'test' && password === '1234') {
    res.json({ success: true, id, name: '홍길동' });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;
