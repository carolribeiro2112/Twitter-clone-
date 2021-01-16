class CardUser {
  constructor() {
    this.user = document.querySelector(".profile-header")
    this.profileItems = document.querySelector("#profile-items")
  } 
    
  showUser(data) {
    console.log(data)
    let profileItemsCard = ''

    profileItemsCard = ` <li class="profile-stats-item-active">
    <a>
      <span class="profile-stats-item profile-stats-item-label">Tweets</span>
      <span class="profile-stats-item profile-stats-item-number">${data[0].quantidade_tweets}</span>
    </a>
  </li>
  <li>
    <a>
      <span class="profile-stats-item profile-stats-item-label">Following</span>
      <span class="profile-stats-item profile-stats-item-number">${data[0].seguindo}</span>
    </a>
  </li>
  <li>
    <a>
      <span class="profile-stats-item profile-stats-item-label">Followers</span>
      <span class="profile-stats-item profile-stats-item-number">${data[0].seguidores}</span>
    </a>
  </li>
  <li>
    <a>
      <span class="profile-stats-item profile-stats-item-label">Likes</span>
      <span class="profile-stats-item profile-stats-item-number">${data[0].likes}</span>
    </a>
  </li>`

    localStorage.setItem("nome do usuario", data[0].nome)

    
    let userName = localStorage.getItem("nome do usuario")
    

    let userCard = ''
    
      userCard = `<h3 class="profile-fullname"><a>${userName}<a></h3>
      <h2 class="profile-element"><a>${data[0].usuario}</a></h2>
      <a class="profile-element profile-website" hrerf=""><i
        class="octicon octicon-link"></i>&nbsp;${data[0].usuario}.com</a>
      <a class="profile-element profile-website" hrerf=""><i
        class="octicon octicon-location"></i>&nbsp;${data[0].local}</a>
      <h2 class="profile-element"><i class="octicon octicon-calendar"></i>${data[0].cadastro}</h2>
      <button class="btn btn-search-bar tweet-to-btn">Tweet to ${data[0].nome}</button>
    `
    this.profileItems.innerHTML = profileItemsCard
    this.user.innerHTML = userCard
  }
  
}

