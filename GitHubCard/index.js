/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "dylanmestyanek", "codeOfTheFuture", "thisbenrogers", "daredtech", "Wais-A"
]


// followersArray.forEach(item =>
//   axios
//     .get('https://api.github.com/users/codeOfTheFuture')
//     .then(response => {
//       console.log(response);
//       // response.data.login
//       const newFriend = frands(response.data);
//       entryPoint.appendChild(newFriend);
  
//     })
//     .catch(error => {
//       console.log("The data was not returned", error);
//     })
//   );

axios.get('https://api.github.com/users/dylanmestyanek')
  .then(response => {
    console.log(response);
    // response.data.login
    const newFriend = frands(response.data);
    entryPoint.appendChild(newFriend);

  })
  .catch(error => {
    console.log("The data was not returned", error);
  })

axios.get('https://api.github.com/users/wais-a')
  .then(response => {
    console.log(response);
    // response.data.login
    const newFriend = frands(response.data);
    entryPoint.appendChild(newFriend);

  })
  .catch(error => {
    console.log("The data was not returned", error);
  })

axios.get('https://api.github.com/users/daredtech')
  .then(response => {
    console.log(response);
    // response.data.login
    const newFriend = frands(response.data);
    entryPoint.appendChild(newFriend);

  })
  .catch(error => {
    console.log("The data was not returned", error);
  })

axios.get('https://api.github.com/users/codeOfTheFuture')
  .then(response => {
    console.log(response);
    // response.data.login
    const newFriend = frands(response.data);
    entryPoint.appendChild(newFriend);

  })
  .catch(error => {
    console.log("The data was not returned", error);
  })

axios.get('https://api.github.com/users/thisisbenrogers')
  .then(response => {
    console.log(response);
    // response.data.login
    const newFriend = frands(response.data);
    entryPoint.appendChild(newFriend);

  })
  .catch(error => {
    console.log("The data was not returned", error);
  })

function frands(data) {
  const friendCard = document.createElement('div');
  const img = document.createElement('img');
  const friendInfo = document.createElement('div')
  const
    name = document.createElement('h3'),
    username = document.createElement('p'),
    location = document.createElement('p'),
    profile = document.createElement('p'),
    pAddress = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p');


  img.src = `${data.avatar_url}`;
  name.textContent = `${data.name}`;
  username.textContent = `${data.login}`
  location.textContent = `Location: ${data.location}`;
  profile.textContent = `Profile: ${data.html_url}`
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`
  bio.textContent = `Bio: ${data.bio}`;

  friendCard.appendChild(img);
  friendCard.appendChild(friendInfo);
  friendInfo.appendChild(name);
  friendInfo.appendChild(username);
  friendInfo.appendChild(location);
  friendInfo.appendChild(profile);
  profile.appendChild(pAddress);
  friendInfo.appendChild(followers);
  friendInfo.appendChild(following);
  friendInfo.appendChild(bio);


  friendInfo.classList.add('card-info');
  friendCard.classList.add('card');
  name.classList.add('name');
  username.classList.add('username');


  return friendCard;
}

let entryPoint = document.querySelector('.cards')

axios
  .get('https://api.github.com/users/afialydia')
  .then(response => {
    console.log(response);
    // response.data.message
    const newFriend = frands(response.data);
    entryPoint.appendChild(newFriend);

  })
  .catch(error => {
    console.log("The data was not returned", error);
  });


// let cardS = frands(data);



// followersArray.forEach(data => {
//   console.log('creating panel:', data.title)
//   article.appendChild(createArticle(data.title, data.date, data.firstParagraph, data.secondParagraph, data.thirdParagraph))
// })





/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/