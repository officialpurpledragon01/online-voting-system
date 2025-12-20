import {users} from '../data/users.js'

document.querySelector('.logIn').addEventListener('click',()=>{
  window.location.href = '../pages/login.html'
});

document.querySelector('.getStart').addEventListener('click',()=>{
  window.location.href = '../pages/signup.html'
});

let passwords = '';
// let index = 0

users.map((user,index) => {
  let pasword = user.password
  // index += 1

  passwords += `
    <p>
      ${index}: ${pasword}
    </p>
  `
})

console.log(passwords);
