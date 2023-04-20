const donorFormHandler = async (event) => {
    event.preventDefault();
  
    let name = document.querySelector('#donorName').value;
    let height = document.querySelector('#donorHeight').value;
    let weight= document.querySelector('#donorWeight').value;
    let gender = document.querySelector('#donorGender').value;
    let bloodtype = document.querySelector('#donorType').value;
    let age= document.querySelector('#donorAge').value;
    let phone= document.querySelector('#donorPhone').value;

    if (name && height && weight && gender && bloodtype && age && phone) {
      const response = await fetch('/api/donors', {
        method: 'POST',
        body: JSON.stringify({ name, height, weight, gender, bloodtype, age, phone  }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
        
      } else {
        alert(response.statusText);
        console.log(donorName)
      }
    }
  
  };
  
  
  document
    .querySelector('.donor-form')
    .addEventListener('submit', donorFormHandler);
  