class TweetsList {
  constructor() {
    this.tweets = document.querySelector("#tweets-card")
  }

  showTweets(data){
    let tweetcard = ""

    data.tweets.map(function(item){
      tweetcard += `<li class="tweet-card">
      <div class="tweet-content">
        <div class="tweet-header">
          <span class="fullname">
            <strong>${item.nome}</strong>
          </span>
          <span class="username">${item.usuario}</span>
          <span class="tweet-time">- ${item.data}</span>
        </div>
        <a>
          <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
        </a>
        <div class="tweet-text">
          <p class="" lang="es" data-aria-label-part="0">${item.mensagem}<a href="https://t.co/dqg5hVQXA0"
              class="twitter-timeline-link" target="_blank"><span
                class="">https://www.mozilla-hispano.org/</span></a> <a href=""
              class="twitter-hashtag"><s>#</s><b>firefox</b></a> <a href=""
              class="twitter-hashtag"><s>#</s><b>comunidad</b></a>
            <a href="" class="twitter-hashtag" dir="ltr"></a>
          </p>
        </div>
        <div class="tweet-footer">
          <a class="tweet-footer-btn">
            <i class="octicon octicon-comment" aria-hidden="true"></i><span>${item.comentarios}</span>
          </a>
          <a class="tweet-footer-btn">
            <i class="octicon octicon-sync" aria-hidden="true"></i><span>${item.compartilhamentos}</span>
          </a>
          <a class="tweet-footer-btn">
            <i class="octicon octicon-heart" aria-hidden="true"></i><span>${item.likes}</span>
          </a>
        </div>
      </div>
    </li>`
    })
    this.tweets.innerHTML = tweetcard
  }
}