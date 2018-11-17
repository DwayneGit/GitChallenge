const ChallengeDAO = require('../dao/ChallengeDAO')

class ChallengeService{

    constructor(){
        this.dao = new ChallengeDAO()
    }

    /**
     * @function getFollowers
     * @param {String} follower 
     * @param {Number} maxLvl 
     * @param {Number} currLvl 
     * 
     * @description recursively grabs calls getUserFollowers
     * and fills an object with the returned list of followers
     */
    async getFollowers(follower, maxLvl, currLvl=0){
        
        var followers = await this.dao.getUserFollowers(follower)
        
        if(currLvl===maxLvl){
            return followers
        }

        var fList = {}
        
        if(followers!==null){
            for( var f of followers){
                fList[f] = await this.getFollowers(f,maxLvl,currLvl+1)
            }
        }
        
        return fList
        
    }

    

    /**
     * @function getRepoGazers
     * @param {String} owner 
     * @param {Number} maxLvl 
     * @param {Number} currLvl 
     * 
     * @description recursively graps stargazers and repositries
     * until it reaches the depth indecated in maxLvl
     */
    async getRepoGazers(owner, maxLvl, currLvl=0){
        var repos = await this.dao.getUserRepo(owner)
        
        if(currLvl===maxLvl){
            return repos
        }

        var rList = {}
        
        if(repos!==null){
            for( var r of repos){
                var gazers = await this.dao.getStargazers(owner, r)
                
                var gList = {}
                for ( var g of gazers){
                    gList[g] = await this.getRepoGazers(g,maxLvl,currLvl+1)
                }
                rList[r] = gList
            }
        }
        
        return rList
    }

}

module.exports = ChallengeService