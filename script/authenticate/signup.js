import { saveToStorage, users} from "../../data/users.js";
import {showMsg} from '../utils/message.js';
import {userIdGen} from '../utils/idGen.js'
// import {dayjs} from 'https://unpkg.com/dayjs@1.11.19/dayjs.min.js'

const today = dayjs().format('ddd M, MMM YYYY (hh:mm A)');

console.log(today);


const signinBtn = document.querySelector('.signup')
const img1 = document.querySelector('.idCard');
const img2 = document.querySelector('.photo');
const img3 = document.querySelector('.receipt');

let idCard, photo, receipt 

function handleImageUpload(input, callback, storageKey) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    const imgData = reader.result;
    callback(imgData);

    // // Store in localStorage (optional)
    // localStorage.setItem(storageKey, imgData);

    console.log(`${storageKey} added`);
  };

  reader.readAsDataURL(file);
}

// ID Card
img1.addEventListener('change', () => {
  handleImageUpload(img1, data => idCard = data, 'idCardImage');
});

// Passport Photo
img2.addEventListener('change', () => {
  handleImageUpload(img2, data => photo = data, 'passportPhoto');
});

// Receipt
img3.addEventListener('change', () => {
  handleImageUpload(img3, data => receipt = data, 'receiptImage');
});


function signup() {
  const username = document.querySelector('.name').value;
  const email = document.querySelector('.email').value;
  const matric = document.querySelector('.matric').value.toUpperCase();
  const password = document.querySelector('.password').value.trim();
  const faculty = document.querySelector('.faculty').value;
  const department = document.querySelector('.department').value;
  const level = document.querySelector('.level').value;
  const radio = document.querySelector('.radio');
  
  let newuser = {
    username,
    email,
    matric,
    password,
    faculty,
    department,
    level,
    userId : userIdGen(),
    image: {
      photo, idCard, receipt
    },
    status:{
      voted: false,
      verified: true
    },
    session:{
      regDate: today,
      lastLogin: today
    }
  }

  if (!username || !password || !department || !faculty || !level || !matric) {
    showMsg('no', 'empty')
    // alert('all field is required')
    console.log('all field required')
  } 
  else{
    if (password.length >= 6){
     if (!idCard && !receipt){
      showMsg('no', 'file')
      // alert('An id card or school fee reciept must be uploaded')
       console.log('upload required files')
      } else {
        if (idCard == photo || idCard == receipt) {
          photo = '../images/avatar.jpg'
          receipt = ''
        } 
        if (receipt == photo || receipt == idCard) {
          receipt = ''
          idCard = ''
        }
        
        showMsg('yes', 'Signup')
        signinBtn.innerHTML = 'SIGNING IN...';

        setTimeout(() => {
          window.location.href = '../pages/login.html'
        }, 2000);
        users.push(newuser)
        console.log('signup successful')
        saveToStorage(users);
      }
    } else {
      showMsg('no', 'password')
      // alert('Password lenght should atleast be 6(six) character long')
      console.log('password not long enough');
    }
  }
  console.log(users);
}
signinBtn.addEventListener('click', 
  signup);

