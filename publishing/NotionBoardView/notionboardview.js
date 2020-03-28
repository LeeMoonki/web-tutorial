window.onload = () => {
  const notionContents = document.getElementsByClassName('notion-contents')[0];
  const notionTopBar = document.getElementsByClassName('notion-top-bar')[0];
  
  const t = document.getElementById('target');
  const top = document.getElementById('top');

  notionContents.addEventListener('scroll', e => {
    const s = e.target;
    // console.log('scroll : ', s.scrollTop, s.scrollLeft, s.clientTop, s.clientLeft);

    if (s.scrollTop >= t.offsetTop) {
      top.style.transform = `translate(0px, ${s.scrollTop - t.offsetTop - 1}px)`
    } else {
      top.style.transform = null;
    }
  });
};