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

 * With the results from this request, inside "content", 
 * list every maintainer and each package name that they maintain,
 * return an array with the following shape:
[
    ...
    {
        username: "a-username",
        packageNames: ["a-package-name", "another-package"]
    }
    ...
]
 * NOTE: the parent array and each "packageNames" array should 
 * be in alphabetical order.
 */
var a = -1
var packageID = 0
var packageNames = []
var username = []
var Array = []
var oldestPackage = new Date();

var responseObject = {}
const axios = require('axios')
function CreatePostRequest() {
    a = 0
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
                    for(let step = 0; step < response.data.content.length - 1; step++){ a = a + 1;}
                        console.log(response.data.content[a])
                        packageNames.push(response.data.content[a].package.name)
                        packageNames.sort()
                        username.push(response.data.content[a].package.maintainers)
                        username.sort()
                        return Array = [username, [packageNames]];})


        return responseObject
    };
module.exports = async function organiseMaintainers() {
  // TODO
  const maintainers = await CreatePostRequest()
  maintainers.sort()
 
  return maintainers
};
