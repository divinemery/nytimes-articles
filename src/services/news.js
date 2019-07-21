const axios = require('axios');

export async function queryNews() {  
  return axios.get(
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=6bllEp1gLoNBQw4TUTgmLNKK46kvnXkg',
  );
}
