document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const category = document.getElementById('category');
  const message = document.getElementById('message');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const msg = {
      name: nameInput.value.trim(),
      category: category.value,
      text: message.value.trim(),
      date: new Date().toLocaleString('en-US')
    };
    
    let storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    storedMessages.push(msg);
    localStorage.setItem('messages', JSON.stringify(storedMessages));
    
    alert(`شكراً ${msg.name}، تم إرسال رسالتك بنجاح!`);
    form.reset();
  });
});
