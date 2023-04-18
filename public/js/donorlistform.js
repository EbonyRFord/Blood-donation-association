const donorFormHandler = async (event) => {
    event.preventDefault();
  
    const donorName = document.querySelector('#donorName').value.trim();
    const donorHeight = document.querySelector('#donorHeight').value;
    const donorWeight= document.querySelector('#donorWeight').value.trim();
    const donorGender = document.querySelector('#donorGender').value();
    const donorType = document.querySelector('#donorType').value();
    const donorAge= document.querySelector('#donorAge').value.trim();
    const donorPhone= document.querySelector('#donorPhone').value.trim();

    if (donorName && donorHeight && donorWeight && donorGender && donorType && donorAge & donorPhone) {
      const response = await fetch('/api/donors', {
        method: 'POST',
        body: JSON.stringify({ donorName, donorHeight, donorWeight, donorGender, donorType, donorAge, donorPhone  }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('.donor-form')
    .addEventListener('submit', donorFormHandler);
  