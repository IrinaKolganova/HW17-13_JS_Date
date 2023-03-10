let name=document.getElementById('name');
let photo=document.getElementById('photo');
let chat=document.getElementById('chat');
let button=document.getElementById('button');

let userName=document.getElementById('userName');
let userPhoto=document.getElementById('userPhoto');
let userChat=document.getElementById('userChat');

function getUserName(){let newName = name.value[0].toUpperCase() + name.value.substring(1);
return(userName.textContent=newName);
}
function checkSpam(){let antiSpam=chat.value.replace(/viagra|XXX/gi, '***');
userChat.textContent = antiSpam;}
function getComment(){
    getUserName();
    checkSpam();
    userPhoto.src=photo.value;}
button.addEventListener('click',getComment);







// button.addEventListener("click", getResult);

// function getResult()

// {
//     let name = name.charAt(0).toUpperCase() + name.slice(1);
//     // document.querySelector('.name');
//     //     name = document.name.value;
//     //     document.getElementById('name').innerHTML="name";


// // вывести картинку по вложенной ссылке
// let img=document.getElementById('photo');
// img.src=document.getElementById('photo');
// // Исключить слова Viagra и XXX в любом регистре

// }




// //Ниже - мои попытки придумать код...
// // let name = document.querySelector('.name');
// // function getName() {
// //     document.querySelector('name')
// //      };
// //  getName();

 
 
// // name.onclick=function getName() {
// //          document.querySelector('name')
// //          };
 
// //  getName()(что-то) 
// // let userName=




