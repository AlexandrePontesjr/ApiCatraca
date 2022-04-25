console.log('Starting login!')

var request = require('request');
//let session = "";
var options = {
  'method': 'POST',
  'url': 'http://172.19.10.19/login.fcgi',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "login": "admin",
    "password": "admin"
  })

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  let session = JSON.parse(response.body).session

  console.log(session)

  console.log('Done to login')

  console.log('Starting to get access logs')

  var optionslog = {
    'method': 'POST',
    'url': `http://172.19.10.19/load_objects.fcgi?session=${session}`,
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "object": "access_logs"
    })

  };
  request(optionslog, function (error, response) {
    if (error) throw new Error(error);

    let access_logs = JSON.parse(response.body).access_logs

    console.log('Done to access logs')

    console.log('Starting to save logs in database')

    console.log('Done to save access logs in database')

  });

});
