import axios from 'axios';

export default {

    // getCharities: function(){
    //     return axios.get("/api/charity")
    // },

    getCharitiesBySearch: function(query){
        return axios.get("/api/charity/query/" + query)
    },

    getCharityById: function(id) {
        return axios.get("/api/charity/id/" + id)
    },

    getRandom: function() {
        return axios.get("/api/charity")
    },

// need to create routes for signup page, this is just an example. I'm sure this doesnt
// the way we need it to.
    createCharity: function(charityData) {
        return axios.post("/api/charity", charityData)
    },

    createUser: function(user){
        return axios.post("/api/charity/register", user)
    },

    updateUser: function(id,user){
        return axios.put("/api/charity/profile/" + id, user)
    },

    signIn: function (user) {
        return axios.post("/api/charity/signin", user)
    }

}