const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length
};

ScranAdvisor.prototype.findRestaurant = function(name){
    findName = function(restaurant){
        return restaurant.name === name;
    }

    return this.restaurants.find(findName);
}

// The above solution can also be solved in a much simpler method via 
// ScranAdvisor.prototype.findRestaurant = function(name) {
//     return this.restaurants.find(restaurant => restaurant.name === name);
// };




ScranAdvisor.prototype.findRestaurantNames = function(){
    let restaurantNames = this.restaurants.map((restaurant) => {
        return restaurant.name});
    return restaurantNames;
}

ScranAdvisor.prototype.findByTown = function(town){
    findTown = function(restaurant){
        return restaurant.location.town === town;
    }

    return this.restaurants.filter(findTown);
}




ScranAdvisor.prototype.findMostCommonCuisine = function(){

    let listOfCuisines = [];
    let cuisineCounts = {};

    this.restaurants.forEach((restaurant) => {
        restaurant.cuisines.forEach((cuisine) => {
            listOfCuisines.push(cuisine);
        })
    })

    listOfCuisines.forEach((cuisine) => {
        return cuisineCounts[cuisine] = (cuisineCounts[cuisine] || 0) + 1;
    });

    const mostCommonCuisine = Object.keys(cuisineCounts).reduce((accumulator,currentValue) => {
        if (cuisineCounts[accumulator] > cuisineCounts[currentValue]){
            return accumulator;
        } else {
            return currentValue;
        }
    });

    return mostCommonCuisine;
}




ScranAdvisor.prototype.findRestaurantBySubstring = function(name){
    findName = function(restaurant){
        return restaurant.name.toLowerCase().includes(name.toLowerCase());
    }

    return this.restaurants.filter(findName);
}

const restaurants = require('./restaurants.json')
let scranAdvisor = new ScranAdvisor(restaurants);

const actual = scranAdvisor.findMostCommonCuisine();
console.log(actual);





module.exports = ScranAdvisor;