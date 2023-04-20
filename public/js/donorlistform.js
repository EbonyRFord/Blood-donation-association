var donorUserId = document.getElementById("donor_userId").textContent;

const donorFormHandler = async (event) => {

  let name = document.querySelector('#donorName').value;
  let height = document.querySelector('#donorHeight').value;
  let weight = document.querySelector('#donorWeight').value;
  let gender = document.querySelector('#donorGender').value;
  let bloodtype = document.querySelector('#donorType').value;
  let age = document.querySelector('#donorAge').value;
  let phone = document.querySelector('#donorPhone').value;
  let id = document.getElementById("userId").textContent

  if (name && height && weight && gender && bloodtype && age && phone) {
    const response = await fetch('/api/donors', {
      method: 'POST',
      body: JSON.stringify({ name, height, weight, gender, bloodtype, age, phone, id }),
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

const donorFormUpdater = async (event) => {

  let name = document.querySelector('#donorName').value;
  let height = document.querySelector('#donorHeight').value;
  let weight = document.querySelector('#donorWeight').value;
  let gender = document.querySelector('#donorGender').value;
  let bloodtype = document.querySelector('#donorType').value;
  let age = document.querySelector('#donorAge').value;
  let phone = document.querySelector('#donorPhone').value;

  if (name && height && weight && gender && bloodtype && age && phone) {
    const response = await fetch('/api/donors', {
      method: 'PUT',
      body: JSON.stringify({ name, height, weight, gender, bloodtype, age, phone }),
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
  .addEventListener('submit', function (event) {
    event.preventDefault();
    if (donorUserId != "") {
      console.log("Donor data exists");
      donorFormUpdater();
    } else {
      console.log("Donor data does not exist");
      donorFormHandler();
    }
  });
