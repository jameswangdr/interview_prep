const cat = {
    "name": "james",
    "age": 27,
    "sex": "male",
}
console.log(cat.name)

const favColor = ['blue', 'green', 'red']
console.log(favColor[1])

const pets = [
    {
        "name": "james",
        "age": 27,
        "sex": "male",
    },
    {
        "name": "tiff",
        "age": 25,
        "sex": "female",
    }
]
console.log(pets[1].name);

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
ourRequest.onload = function() {
    let ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0])
    console.log(ourData[0].foods.likes[0]);
};
ourRequest.send();