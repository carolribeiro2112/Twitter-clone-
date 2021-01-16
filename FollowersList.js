class FollowersList {
  constructor() {
    this.followers = document.querySelector("#followers-list")
  }

  showFollowers(data) {
    let cardFollowers = ""

    data.followers.map(function(item){
      cardFollowers +=`<li class="tweet-card">
      <div class="tweet-content">
        <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
        <div class="tweet-header">
          <span class="fullname">
            <strong>${item.nome}</strong>
          </span>
          <span class="username">${item.usuario}</span>
        </div>

        <button class="btn btn-follow">Follow</button>
      </div>
    </li>`
    })

    this.followers.innerHTML = cardFollowers
  }
}