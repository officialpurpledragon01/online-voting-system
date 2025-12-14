// import cards from '../preview/script.js'
const cards = JSON.parse(localStorage.getItem('cards'));
let imgUrl;

const inputName = document.querySelector('.name')
const description = document.querySelector('.description')
const img = document.querySelector('.img')
const btn = document.querySelector('.upload')
let btn3;
let test2 = document.body

let test = '';

//reads image directory/location and converts into readable address for browser
// converts the img to bits 
img.addEventListener('change', ()=>{
  const image = img.files[0]
  const reader = new FileReader();

  reader.onload = () => {
    if (imgData) {
      imgUrl = reader.result
    } else {
      console.log('quota exceed')
    }
    // localStorage.setItem('imgData', imgData); 
  };

  if (image) {
    reader.readAsDataURL(image);
  }
})

function loadForm() {
  let newFile = {
    name: inputName.value,
    url: imgUrl, 
    description: description.value
  }
  cards.push(newFile);
  localStorage.setItem('cards', JSON.stringify(cards));
  // displayCard();
  // refresh();

  console.log('new card added');
  alert('File uploaded successfully')
  console.log(JSON.parse(localStorage.getItem('cards')));   
  
}
function upload() {
  btn.innerHTML = 'Uploading...';

  let id = crypto.randomUUID()
  const btn2 = document.querySelector(`.upload`)
  btn3 = btn2

  setTimeout(()=>{
    btn.innerHTML = 'Upload';

    if (imgUrl == undefined && description.value === '') {//not working well
      alert('File upload failed');
    } else {
      loadForm();
      inputName.value = '';
      description.value = '';
      img.value = '';
    }
    
  }, 2000);

  test2.innerHTML += `
    <div class="div">
    <p>Fill in file info below</p>
    <div class="form">
      <input type="text" class="name" placeholder="file name">
      <input type="text" class="description" placeholder="file description">
      <input type="file" class="img">
      <button class="upload-${id}"> Upload </button>
    </div>
    <p>Redirect back to. <a href="preview.html">preview page</a> </p>
  </div>
  `
}
btn3.addEventListener('click', upload)

btn.addEventListener('click', upload)