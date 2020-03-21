const cards = [
  { title: 'Todo 리스트 작성하기', label: [{ name: 'todo', color: '#23bf02' }], summary: '할일을 이젠 Todo리스트를 통해 관리...' },
  { title: '자바스크립트로 동적 생성', label: [{ name: 'todo', color: '#23bf02' }], summary: '카드 리스트를 자바스크립트를 활용해 동적으로...' },
  { title: '퍼블리싱 연습', label: [{ name: 'todo', color: '#23bf02' }], summary: 'display를 적절히 사용해서 레이아웃을 잡아본다.' },
  { title: '새로운 프로젝트 기획', label: [{ name: 'todo', color: '#23bf02' }, { name: 'project', color: '#ababf0' }], summary: '일상에 활력을 줄 수 있는 활동을 찾아...' },
];

const db = {
  cards: {
    get: count => {
      let result = [];

      for (let i = 0; i < count; i++) {
        result.push(cards[i % cards.length]);
      }

      return result;
    },
  }
};

const getCardsAPI = count => {
  let cardList;
  if (typeof count === 'number') {
     cardList = db.cards.get(count);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!cardList) {
        reject({
          success: false,
          list: null,
        });
      } else {
        resolve({
          success: true,
          list: cardList
        });
      }
    }, 0);
  });
};

// 사용예
// getCardsAPI(6).then(res => {
//   console.log(res.success, res.list.length);
// });

window.onload = () => {
  // 코드 작성
};
