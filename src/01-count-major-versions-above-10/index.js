
/**
 * Make the following POST request with either axios or node-fetch:

POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
    axios.get('https://api.npms.io/v2/search/suggestions?q=react').then(response => response.data).filter(obj => {
      return obj.b === 6
    });
    Object.values().filter(function (el) { return el.version == "17.0.2"; });
    
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

**

 *  With the results from this request, inside "content", count
 *  the number of packages that have a MAJOR semver version 
 *  greater than 10.x.x
 */
var a = -1
var b = 1
var pack = []
var packageCount = 0
var responseObject = {}
const axios = require('axios')
function CreatePostRequest() {

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
                     for(let step = 0; step < response.data.content.length - 1; step++){a = a + 1

                            if (parseInt(response.data.content[a].package.version) > 10) 
                            {packageCount = packageCount + 1 }} 
                            return packageCount});


        return responseObject
    };


module.exports = async function countMajorVersionsAbove10() {
  // TODO
  
  const count = await CreatePostRequest()


  return count
};
