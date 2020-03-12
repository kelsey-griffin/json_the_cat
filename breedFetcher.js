const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedName.substring(0,4)}`, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, 'No such breed exists!');
    } else {
      callback(null, data[0].breeds[0].description.trim());
    }
  });
};

module.exports = { fetchBreedDescription };
