let cards = JSON.parse(localStorage.getItem('cards'));

if (!cards) {
  cards = [
    { 
      name: 'landing page',
      url: 'page-1.jpg',
      description: `This is the landing page of the webpage`
    },
    { 
      name: 'signup page',
      url: 'page-2.jpg',
      description: `This is the signup page of the webpage`
    },
    { 
      name: 'login page',
      url: 'page-3.jpg',
      description: `This is the login page of the webpage`
    },
    { 
      name: 'home page',
      url: 'page-4.jpg',
      description: `This is the home page of the webpage`
    }
  ];

  localStorage.setItem('cards', JSON.stringify(cards));
};

// let card = document.querySelector('.card')

function displayCard() {
  const container = document.querySelector('.card-wrapper');

  let html = ``;

  cards.forEach(card => {
    html += `
      <div class="card">
          <img src="${card.url}" alt="${card.name}" class="thumbnail">
          <div class="description">
            <p><i>${card.description}</i></p>
          </div>
      </div>
    `
    // console.log(card);
    container.innerHTML = html;
  }); 

  
  console.log('displayed sucess');
  
  console.log(JSON.parse(localStorage.getItem('cards')));

};

displayCard();

// sessionStorage.setItem('refresher', JSON.stringify(displayCard()));