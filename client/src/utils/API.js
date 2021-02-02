import axios from 'axios';

export default {

    getCharities: function(){
        return axios.get("/api/charity/")
    },

    getCharitiesBySearch: function(query){
        return axios.get("/api/charity/query/" + query)
    },

    getCharityById: function(id) {
        return axios.get("/api/charity/" + id)
    },

    getCharityByName: function(name) {
        return axios.get("/api/charity/name", name)
    },

    getCharityBy: function(acceptedItems) {
        return axios.get("/api/charity/acceptedItems", acceptedItems)
    },

    getCharityByCauses: function(causes) {
        return axios.get("/api/charity/causes/" + causes)
    },

    getCharityByZipCode: function(zipCode) {
        return axios.get("/api/charity/zipcode", zipCode)
    },

    getCharityByCity: function(city) {
        return axios.get("/api/charity/city", city)
    },

// need to create routes for signup page, this is just an example. I'm sure this doesnt
// the way we need it to.
    createCharity: function(charityData) {
        return axios.post("/api/charity/", charityData)
    },

}