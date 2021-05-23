
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
var a = 0
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
                return response.data.content});
    return responseObject
    };
    
function filterResults(array){

    for(var i in responseObject){
        var key = i;
        console.log(key)
        var val = responseObject[i];
        for(var j in val){
            var sub_key = j;
            var sub_val = val[j];
            console.log(sub_key);
        }
    }
    return responseObject
};

module.exports = async function countMajorVersionsAbove10() {
  // TODO
  
  const count = await CreatePostRequest()
  filterResults(responseObject)
  return count
};
