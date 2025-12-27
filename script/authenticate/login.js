import { getFromStorage, saveTempUser, users } from '../../data/users.js';
import {showMsg} from '../utils/message.js'
// import {dayjs} from 'https://unpkg.com/dayjs@1.11.19/dayjs.min.js'

const today = dayjs().format('ddd M, MMM YYYY (hh:mm A)');

const loginBtn = document.querySelector('.login')

function login(){
  let regNo = document.querySelector('.matric').value.trim().toUpperCase();
  let pascode = document.querySelector('.password').value.trim();

  if(!regNo || !pascode){
    showMsg('no', 'empty')
    // alert('all fields are required')
    console.log('all fields are required');
    return;
  }

  let matched = false;
  let currentUser;

  users.forEach((user) => {
    if (regNo === user.matric && pascode=== user.password){
      matched = true;
      currentUser = user;
    }  
  });
  
  if (matched){
    currentUser.session.lastLogin = today;

    saveTempUser(currentUser);

    showMsg('yes', 'Login')
    console.log('matched success')

    loginBtn.innerHTML = 'LOGGING IN...'
    setTimeout(()=>{
      window.location.href = '../pages/profile.html';
    }, 2500)
  } else {
    loginBtn.innerHTML = 'LOGGING IN...'
    setTimeout(()=>{
      loginBtn.innerHTML = 'LOG IN'
      showMsg('no', 'notfound')
      // alert('User not found')
    }, 1500)
    console.log('User Not Found')
  }
}

loginBtn.addEventListener('click',()=>{
login()
});