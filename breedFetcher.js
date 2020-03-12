const arg = process.argv[2];
const request = require('request');
request(`https://api.thecatapi.com/v1/images/search?breed_ids=${arg.substring(0,4)}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('No such breed exists!');
    process.exit();
  }
  console.log(data[0]);
});