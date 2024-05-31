import express from 'express'

const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send('welcome')
})

app.get('/api/userinfo',(req,res)=>{
    res.json({
        "login": "kuldeepbeniwal",
        "id": 94345392,
        "node_id": "U_kgDOBZ-YsA",
        "avatar_url": "https://avatars.githubusercontent.com/u/94345392?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kuldeepbeniwal",
        "html_url": "https://github.com/kuldeepbeniwal",
        "followers_url": "https://api.github.com/users/kuldeepbeniwal/followers",
        "following_url": "https://api.github.com/users/kuldeepbeniwal/following{/other_user}",
        "gists_url": "https://api.github.com/users/kuldeepbeniwal/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kuldeepbeniwal/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kuldeepbeniwal/subscriptions",
        "organizations_url": "https://api.github.com/users/kuldeepbeniwal/orgs",
        "repos_url": "https://api.github.com/users/kuldeepbeniwal/repos",
        "events_url": "https://api.github.com/users/kuldeepbeniwal/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kuldeepbeniwal/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Kuldeep Beniwal",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 7,
        "public_gists": 0,
        "followers": 0,
        "following": 2,
        "created_at": "2021-11-15T06:04:16Z",
        "updated_at": "2024-05-28T10:28:13Z"
      })
})

app.listen(port,()=>{
    console.log('example app listening at 3000');
})