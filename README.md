# GitChallenge

Prerequisites:
nodeJs & npm must be installed.

Installing:
1) clone/download repo from  git
2) navigate to project and install node modules 
    "npm install"
3) run api
    "npm start"
4) using a web browser or post man:
    get followers from a user
    "http://localhost:8000/followers_of/{username}"

    get repositories and stargazers
    "http://localhost:8000/repo/{username}"

#note 1: to go deeper in searches in index.js app.get functions change 2 to any number desired

#note 2: due to git api rate limit the un authorize user may only make 60 calls per hour and authorize users may make 500 calls. for deeper searches in src/dao/ChallangeDao.js uncomment lines 20-23, 61-64, 101-104 and fill in your username and password