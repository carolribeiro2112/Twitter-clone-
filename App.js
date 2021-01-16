const objectUser = new User();
const objectCardUser = new CardUser();
const objectFollowers = new Followers(); 
const objectFollowersList = new FollowersList();
const objectTweets = new Tweets();
const objectTweetsList = new TweetsList();

objectUser.searchUser()
  .then(function(response) {
    response.json()
    .then(function(data){
      objectCardUser.showUser(data)
    })
  })

objectFollowers.searchFollowers()
  .then(function(response){
    response.json()
    .then(function(data){
      objectFollowersList.showFollowers(data)
    })
  })

objectTweets.searchTweets()
  .then(function(response){
    response.json()
    .then(function(data){
      objectTweetsList.showTweets(data)
    })
  })

