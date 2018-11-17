const express = require("express")
const bodyParser = require('body-parser')

const cors = require('cors')

const ChallengeService = require('./src/service/ChallengeService')

const app = express()

var service = new ChallengeService()

app.use(cors())
app.use(bodyParser())

app.get("/followers_of/:userId",async (req, res)=>{
    // console.log(req.params.userId)
    var followers = await service.getFollowers(req.params.userId,2)
    res.json(followers)
})

app.get("/repo/:owner",async (req, res)=>{
    // console.log(req.params.userId)
    var followers = await service.getRepoGazers(req.params.owner,2)
    res.json(followers)
})

app.listen(8000, ()=>{
    console.log('Server listening on port 8000')
})