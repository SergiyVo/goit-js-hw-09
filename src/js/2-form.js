const STORAG_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', () => {
    const userEmail = form.elements.email.value.trim();
    const userMessage = form.elements.message.value.trim();
  
    const data = {
        email: userEmail,
        message: userMessage,
    }

    saveToLs(STORAG_KEY, data);
});


form.addEventListener('submit', e => {
    e.preventDefault();

    if (form.elements.email.value === "" || form.elements.message.value === "") {
        return alert('All form fields must be filled in');
    }
        
    const data = loadFromLs(STORAG_KEY) || {};
    console.log(data);
    
    localStorage.removeItem(STORAG_KEY);
    form.reset();

})

function loadFromLs(key = 'empty') {
    const data = localStorage.getItem(key);

    try {
        const result = JSON.parse(data);
        return result;
    } catch {
        return data;
    }
}

function saveToLs(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}

function restoreData() {
    const data = loadFromLs(STORAG_KEY) || {};

    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
}

restoreData();





























// function saveToLs(key, value) {
//   const jsonData = JSON.stringify(value);
//   localStorage.setItem(key, jsonData);
// }

// function loadFromLs(key) {
//   const data = localStorage.getItem(key);

//   try {
//     const result = JSON.parse(data);
//     return result;
//   } catch {
//     return data;
//   }
// }

// function restoreData() {
//   const data = loadFromLs(storagKey) || {};

//   form.elements.email.value = (data.email || '').trim();
//   form.elements.message.value = (data.message || '').trim();
// }
// restoreData();