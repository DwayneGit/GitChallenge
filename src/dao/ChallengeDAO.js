const axios = require('axios')

class ChallengeDAO{
    
    
    /**
     * @function getUserFollowers
     * @param {String} userName
     * 
     * @description takes a github user name and returns a 
     * list of five usernames
     * 
     */
    async getUserFollowers(userName){

        const URL = "https://api.github.com/users/"+userName+"/followers"
        
        var followers = await axios({
            method:"get",
            url:URL,
            // auth:{
            //     username: 'username',
            //     password: 'password'
            // }
        })
        .then((res)=>{
            
            var fList = []
            var counter = 0;
            for( var follower of res.data ){
                if( counter === 5)
                    break
                
                fList.push(follower.login)
                counter=counter+1
            }
            return fList
        })
        .catch((e)=>{
            console.log(e.message)
            return null;
        })
        
        return followers
    }

    /**
    * @function getUserRepo
    * @param {String} user : owner of repositoris
    * 
    * @description takes a github username and returns three
    * repositories from that user
    * 
    */
    async getUserRepo(user){
        
        const URL = "https://api.github.com/users/"+user+"/repos"
        
        var repos = await axios({
            method:"get",
            url:URL,
            // auth:{
            //     username: 'username',
            //     password: 'password'
            // }
        })
        .then((res)=>{
            
            var rList = []
            var count = 0
            for(var repo of res.data){
                if(count == 3)
                    break
                rList.push(repo.name)
                count = count + 1
            }
            return rList;
        })
        .catch((e)=>{
            console.log(e.message)
            return null;
        })

        return repos;
    }

    /**
    * @function getStargazers
    * @param {String} owner : owner of repository
    * @param {String} repo : name of repositry to get stargazers
    * 
    * @description takes a github username and one of its
    * repositories and returns 3 stargazers of the repository
    * 
    */
   async getStargazers(owner,repo){
        const URL = "https://api.github.com/repos/"+owner+"/"+repo+"/stargazers"
        
        var gazer = await axios({
            method:"get",
            url:URL,
            // auth:{
            //     username: 'username',
            //     password: 'password'
            // }
        })
        .then((res)=>{
            var gList = []
            var count = 0
            for(var gazer of res.data){
                if(count == 3)
                    break
                gList.push(gazer.login)
                count = count + 1
            }
            return gList;
        })
        .catch((e)=>{
            console.log(e.message)
            return null;
        })

        return gazer;
    }

}

module.exports = ChallengeDAO