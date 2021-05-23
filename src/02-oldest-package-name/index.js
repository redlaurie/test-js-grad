/**
 * Make the following POST request with either axios or node-fetch:

POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
}

 *******

The results should have this structure:
{
    "status": 200.0,
    "location": [
      ...
    ],
    "from": "CACHE",
    "content": [
      ...
    ]
}

 ******

 *  With the results from this request, inside "content", return
 *  the "name" of the package that has the oldest "date" value
 */
var a = 0
var packageID = 0
var pack = []
var oldestPackage = 100
var responseObject = {}
const axios = require('axios')
function CreatePostRequest() {
    a = 8
    const POST = {
         method: 'post',
         url: 'http://ambush-api.inyourarea.co.uk/ambush/intercept',
         headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
         },
         data: {
            "url": "https://api.npms.io/v2/search/suggestions?q=react",
            "method": "GET",
            "return_payload": true
         }

    };
    const Count = axios(POST).then(function (response) {
                const Value = response.data.content});

    responseObject = axios(POST).then(function (response) {
                     for(var i in response){ a = a + 1; 
                    if (parseInt(response.data.content[a].package.version) < oldestPackage) 
                        {oldestPackage =  parseInt(response.data.content[a].package.version), packageID = a}} 
                        return response.data.content[packageID].package.name})


        return responseObject
    };

module.exports = async function oldestPackageName() {
  // TODO
  const name = await CreatePostRequest()
  return name
};
