# Exercise - Higher Order Functions

In this exercise we are going to practice how to use Higher Order Functions with enumerators, with the help of Contstructors and Prototypes.

## Setup

Make sure to run `npm i` in the root folder to install `jest`

You have a `ScranAdvisor` constructor created for you.

`ScranAdvisor` is a restaurant recommender, which has a property called `this.restaurants` pre-loaded into it.

This data can be inspected in `restaurants.json`.

Each task already has a test written for it in `ScranAdvisor.test.js`. Most test already have the expectation stored in a variable, this indicates what type of result and what data are we looking for.

Every test except the first has `test.skip` in the definition. Remove the `.skip` when you start working on a test.

Think through if a function needs a parameter or not! Some do need it, some don't!

## Tasks

- Add methods to `ScranAdvisor` to:
  - Count the number of restaurants that we have stored
  - Find a restaurant by its name (full name)
  - Return an array containing each restaurant's name
  - Find all the restaurants from a given city (pass in the city name, e.g. `"Glasgow"` should return 4 restaurants)
- Finish the tests for `ScranAdvisor`'s methods.

## Extensions

- Create a method that finds which one is the most common cuisine in our `ScranAdvisor` (hint: hard with enumerators, try counting occurances using an object where the key is the cuisine and the value is counted to be the number of times it occurs in the restaurants list!)
- Create a method that allows us to find restaurants if a given substring is found in its name - e.g. the method `searchByName("ru")` should find Rudy's Pizza, Humble Crumble Camden and The Brunch Club.
