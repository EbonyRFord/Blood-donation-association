const donorFormHandler = async (event) => {
    event.preventDefault();
  
    let donorName = document.querySelector('#donorName').value;
    let donorHeight = document.querySelector('#donorHeight').value;
    let donorWeight= document.querySelector('#donorWeight').value;
    let donorGender = document.querySelector('#donorGender').value;
    let donorType = document.querySelector('#donorType').value;
    let donorAge= document.querySelector('#donorAge').value;
    let donorPhone= document.querySelector('#donorPhone').value;

    if (donorName && donorHeight && donorWeight && donorGender && donorType && donorAge & donorPhone) {
      const response = await fetch('/api/donors', {
        method: 'POST',
        body: JSON.stringify({ donorName, donorHeight, donorWeight, donorGender, donorType, donorAge, donorPhone  }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('.donor-form')
    .addEventListener('submit', donorFormHandler);
  