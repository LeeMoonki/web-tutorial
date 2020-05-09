const authForm = document.querySelector('.auth__user-data');
const userInput = authForm.getElementsByTagName('input')
const reqLogin = document.querySelector('.buttons__log-in');

reqLogin.addEventListener('click', handleSubmit);
userInput[0].onkeyup = function() { validateInput();};
userInput[1].onkeyup = function() { validateInput();};

function validateInput() { 
    let userInputId = userInput[0].value.length;
    let userInputPw = userInput[1].value.length;
    
    if ((userInputId >= 8) && (userInputPw >= 8)) {
        console.log(userInputId.length); //실패
        console.log(userInputPw.length); //실패
        console.log(userInput[0].value.length);
        reqLogin.disabled = false;
    } else {
        reqLogin.disabled = true;
    };
 };

function handleSubmit(e){
    e.preventDefault();
    
    api.post('http://localhost:8080/api/login', {
        body: JSON.stringify({
            id: 'test12345',
            password: '123456789'
        })
    }).then(res => {
        console.log('response : ', res);
    });
    alert('post')
};
// authForm.addEventListener('submit', handler);

// function handler(e) {
//     e.preventDefault()
//     console.log('test')
// }

// document.querySelector('.bottons__log-in').addEventListener('click', handleSubmit);
// function handleSubmit(e) { 
//     e.preventDefault()
//     console.log('bottons__log-in')
// }