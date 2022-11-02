const containerDiv = document.getElementById('users-list');
let usersList = [];

async function fetchData(url) {
    const data = await fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
    usersList = data.results;
    });
}

fetchData("https://randomuser.me/api")

const displayUserInfo = (data) => {
    const users =  data.forEach((user, index) => {
        const html = `
            <div class="user" data-index=${index}>
                <div class="user-img-container">
                    <img class="user-img" src="${user.picture.large}" alt="profile picture">
                </div>
                <div class="user-info-container">
                    <h3 id="name" class="user-name">${user.name.first} ${user.name.last}</h3>
                    <p class="user-country">Country: ${user.location.country}</p>
                    <p class="user-postcode">Postcode: ${user.location.postcode}</p>
                    <p class="user-phone">Phone: ${user.phone}</p>
                </div>
            </div>
            `;
        containerDiv.insertAdjacentHTML("beforeend", html);
    })
}

document
  .getElementsByClassName('button')[0]
  .addEventListener('click', () => {
    displayUserInfo(usersList);
  });