require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const githubData = {
    "login": "anirban-bk",
    "id": 117968658,
    "node_id": "U_kgDOBwgPEg",
    "avatar_url": "https://avatars.githubusercontent.com/u/117968658?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/anirban-bk",
    "html_url": "https://github.com/anirban-bk",
    "followers_url": "https://api.github.com/users/anirban-bk/followers",
    "following_url": "https://api.github.com/users/anirban-bk/following{/other_user}",
    "gists_url": "https://api.github.com/users/anirban-bk/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/anirban-bk/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/anirban-bk/subscriptions",
    "organizations_url": "https://api.github.com/users/anirban-bk/orgs",
    "repos_url": "https://api.github.com/users/anirban-bk/repos",
    "events_url": "https://api.github.com/users/anirban-bk/events{/privacy}",
    "received_events_url": "https://api.github.com/users/anirban-bk/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-11-11T05:52:23Z",
    "updated_at": "2024-05-01T07:11:33Z"
  };
  
app.get('/', (req, res)=>{res.send('response from server')});
app.get('/login', (req, res)=>{
    res.send('<h2>this is an attempt to login at cacb2</h2>');
});
app.get('/twitter', (req, res)=>{res.send('twitter response from server')});
app.get('/github', (req, res)=>res.json(githubData));
app.listen(port, ()=>{
    //console.log(process.env);
    console.log(`app is listening on port ${port}`)
});