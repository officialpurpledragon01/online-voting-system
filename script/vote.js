import { getFromStorage, saveTempUser, saveToStorage } from "../data/users.js";

const currentUser = getFromStorage('currentUser');

const users = getFromStorage('users');

const userId = currentUser.userId
const userVote = currentUser.status.voted;

let isVote = userVote

const voteBtn = document.querySelector('.vote')

document.querySelector('button').addEventListener('click', ()=>{
  if (!isVote){
    voteBtn.innerText = 'VOTED'
    currentUser.status.voted = true
    isVote = true

    saveTempUser(currentUser)

    alert('voted success');

    users.forEach(user => {
      if (user.userId == userId) {
        user.status.voted = currentUser.status.voted
        
        saveToStorage(users);
        console.log('vote updated')            
      }
    });

  } else {
    alert('You already voted')
    console.log(userVote)
  }
})
