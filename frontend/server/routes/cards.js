const express = require('express');
const router = express.Router();

const cards = [
  { title: 'Todo 리스트 작성하기', label: [{ name: 'todo', color: '#23bf02' }], summary: '할일을 이젠 Todo리스트를 통해 관리...' },
  { title: '자바스크립트로 동적 생성', label: [{ name: 'todo', color: '#23bf02' }], summary: '카드 리스트를 자바스크립트를 활용해 동적으로...' },
  { title: '퍼블리싱 연습', label: [{ name: 'todo', color: '#23bf02' }], summary: 'display를 적절히 사용해서 레이아웃을 잡아본다.' },
  { title: '새로운 프로젝트 기획', label: [{ name: 'todo', color: '#23bf02' }, { name: 'project', color: '#ababf0' }], summary: '일상에 활력을 줄 수 있는 활동을 찾아...' },
];

const db = {
  cards: {
    get: (page, options) => {
      const cs = (options && options.label) ? cards.filter(c => c.label.findIndex(l => l.name === options.label) > -1) : cards;
      const count = options ? (options.count || 10) : 10;
      const start = (page == null ? 0 : page - 1) * count;
      let result = [];

      for (let i = start, len = start + count; i < len; i++) {
        result.push(
          {id: i, ...cs[i % cs.length]}
        );
      }

      return result;
    },
  }
};

router.get('/', function(req, res) {
  const { page, label } = req.query;

  res.json({
    success: true,
    cards: db.cards.get(page, { label })
  });
});

module.exports = router;
