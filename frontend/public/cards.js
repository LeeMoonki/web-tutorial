// const elCardsList = document.getElementsByClassName('cards-list')[0];
const elCardsList = document.querySelector('.cards-list');
const elBtnList = document.querySelector('.btn-list');
let page = 1;
let pending = false; // 데이터를 가져오는 중인지?

function getList(p, label) {
  return api.get(`http://localhost:8080/api/cards?page=${p}`).then(res => {
    if (res.success) {
      for (const card of res.cards) {
        const elLi = document.createElement('li');
        const elTitle = document.createElement('span');
        
        elLi.classList = 'card';
        elTitle.innerHTML = `${card.title}-${card.id}`;
  
        elLi.appendChild(elTitle);
        elCardsList.appendChild(elLi);
      }

      page = page + 1;
    }
  });
}

getList(page);

elBtnList.addEventListener('click', (e) => {
  getList(page);
});

window.addEventListener('scroll', function (e) {
  if ((window.innerHeight + window.scrollY) + 150 >= document.body.offsetHeight) {
    if (!pending) {
      // pending이 없으면 위험할 수 있음
      getList(page).then(() => {
        pending = false;
      });  
    }
  }
});

