import { getFromStorage, saveToStorage } from "../data/users.js";

let userinfor= document.querySelector('.userinfor');

let userimg= document.querySelector('.userimg img');

const currentUser = getFromStorage('currentUser');

const users = getFromStorage('users');

// const userId = currentUser.userId

users.forEach(user => {
  if (user.userId == currentUser.userId) {
    user.session.lastLogin = currentUser.session.lastLogin

    saveToStorage(users);
  }
});

function renderProfileData() {
  userimg.src = currentUser.image.photo || "../images/avatar.jpg";
  userinfor.innerHTML = `
    <div class="biodata">
      <h3>BIO DATA</h3>
      <div>
        Name: <p> ${currentUser.username}</p>
      </div>
      <div>
        Reg/Matric: <p> ${currentUser.matric}</p>
      </div>
      <div>
        UserId:<p>  ${currentUser.userId}</p>
      </div>
      <div>
        Already Voted: <p> ${currentUser.status.voted}</p>
      </div>
      <div>
        Registration Date: <p> ${currentUser.session.regDate}</p>
      </div>
      <div>
        Last Login: <p> ${currentUser.session.lastLogin}</p>
      </div>
    </div>
    <div class="stddata">
      <h3>STUDENTSHIP DATA</h3>
      <div>
        Faculty: <p>${currentUser.faculty}</p>
      </div>
      <div>
        Department: <p>${currentUser.department}</p>
      </div>
      <div>
        Current Level: <p> ${currentUser.level}</p>
      </div>
    </div>
  `
}
renderProfileData()
console.log(currentUser);