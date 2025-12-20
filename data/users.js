const testUser = [
  {
    username: 'John Doe',
    email: 'johndoe@example.com',
    matric: '123456789',
    password: 'password123',
    faculty: 'Faculty of Engineering',
    department: 'Computer Science Department',
    level: '100lvl',
    userId : 'VOTER-000-001',
    image: {
      photo: '../images/avatar.jpg', idCard: '', receipt: ''
    },
    status:{
      voted: false,
      verified: true
    },
    session:{
      regDate: 'Teu, 2 Dec 2025' ,
      lastLogin: 'Teu, 2 Dec 2025'
    }
  },
  {
    username: 'John Doe',
    email: 'johndoe@example.com',
    matric: '1234567890',
    password: 'password123',
    faculty: 'Faculty of Agriculture',
    department: 'Agricultural Science Department',
    level: '200lvl',
    userId : 'VOTER-000-002',
    image: {
      photo: '../images/avatar.jpg', idCard: '', receipt: ''
    },
    status:{
      voted: false,
      verified: true
    },
    session:{
      regDate: 'Teu, 3 Dec 2025' ,
      lastLogin: 'Teu, 3 Dec 2025'
    }
  },
  {
    username: 'John Doe',
    email: 'johndoe@example.com',
    matric: '12345678',
    password: 'password123',
    faculty: 'Faculty of Technology',
    department: 'Information Technology Department',
    level: '100lvl',
    userId : 'VOTER-000-003',
    image: {
      photo: '../images/avatar.jpg', idCard: '', receipt: ''
    },
    status:{
      voted: false,
      verified: true
    },
    session:{
      regDate: 'Teu, 2 Dec 2025' ,
      lastLogin: 'Teu, 2 Dec 2025'
    }
  }
];

export const users = JSON.parse(localStorage.getItem('users')) || testUser;

export function saveToStorage(storageKey) {
  localStorage.setItem('users', JSON.stringify(storageKey));
}

export function getFromStorage(storageValue) {
  return JSON.parse(localStorage.getItem(storageValue));
}

export function saveTempUser(storageKey) {
  localStorage.setItem('currentUser', JSON.stringify(storageKey))
}

saveToStorage(users);