var name = 'Barent';
console.log(name);

var myLocation = 'Inland Empire';
console.log(myLocation);

var favoriteNumber = 23;
console.log(favoriteNumber);

var teams = ['clippers', 'lakers', 'beers', 'rockets', 'nets'];
console.log(teams);

// while loops
var number = 10;
var otherNumber = 1;
while(otherNumber < number){
    console.log(otherNumber);
    otherNumber = otherNumber + 1; //called a counter
}

var numberTwo = 20;
var myOtherNumber = 10;
while(myOtherNumber < numberTwo){
    console.log(myOtherNumber); // 10, 11, 12
    myOtherNumber += 1 // 11, 12, 13
}

var barentFavorite = 23;
var letGoToOneHundred = 100;
while (barentFavorite < letGoToOneHundred){
    console.log(barentFavorite); // 23, 24, 25
    barentFavorite += 1; // 24, 25, 26
}

//for loops
for (var i = 0; i < 10; i++){
    console.log(i); // 0, 1, 2....
}

//print teams
for (var i = 0; i < teams.length; i++){
    var eachTeam = teams[i]; // clippers, lakers, beers, rockets, nets
    console.log(eachTeam); 
}

// make an array
// use a for loop to iterate through the array
// print each element in your array

var dopeFilms = ['hara kiri: death of a samurai', 'twilight samurai', 'palindromes', 'synecdoche, new york'];

for (var i = 0; i < dopeFilms.length; i++){
    var eachFilm = dopeFilms[i]; // intermediate variable
    console.log(eachFilm);
}

const cars = ['ancap tesla', 'fascist ford', 'objectivist audi'];
console.log(cars);

for (let i = 0; i < cars.length; i++) {
    let eachCar = cars[i];
    console.log(eachCar);
}

//objects!
// key: value pairs

const barent = {
    fullName: 'Barent Christien Langwell',
    age: 30,
    myLocation: 'Inland Empire',
    placesTraveled: ['Hawaii', 'Mexico', 'Arizona', 'Nevada']
};

console.log(barent);

//myLocation
console.log(barent.myLocation);
//print arizona
console.log(barent.placesTraveled[2]);

const myReallyCoolPost = {
    username: '@generalassembly',
    likes: 1200,
    comments: ['really cool post!', 'nice!', 'javascript is cool', 'whoa'],
    caption: 'Day 3 of SEI!',
    picture: 'https://instagram.com/generalassembly/...',
    shares: 12
};
console.log(myReallyCoolPost);

myReallyCoolPost.myLocation = 'San Francisco';
console.log(myReallyCoolPost);

// likes, captions, shares, comments, username, picture

//instagram post object

const newInstagramPost = {
    username: '@nastyplanter',
    likes: 42069,
    comments: ['yo, what the hell?', 'are you serious?', 'hey leave him alone!'],
    caption: 'Actual pic of my endoscopy!',
    picture: 'https://instagram.com/nastyplanter/...',
    shares: 0
};

newInstagramPost.myLocation = 'Actual doctor\'s office'
console.log(newInstagramPost);

//Functions
// standard
function sayHello() {
    //write my code
    //write your logic
    console.log('Hello');
};

//invoke the function (call)
sayHello();

// function expression
const sayHelloAgain = function() {
    console.log('Hello Again!');
};

sayHelloAgain();

// arrow function
const sayHelloFinal = () => {
    console.log('Hello for the last time');
};

sayHelloFinal();

const otherNumbers = [10,20,30,40,50,60,70,80,90];


function printNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        let num = array[i]; // 10, 20, 30 ...
        
        if (num < 50) {
            console.log('this number is less than 50: ' + num); 
        }else{
            console.log('this number is greater than 50: ' + num);
        }
    }
}

// printNumbers(numbers);
printNumbers(otherNumbers);

const numbers = [1,2,3,4,5,6,7,8,9];

function addNumbers(array) {
    let result = 0;
    
    for(let i = 0; i < array.length; i++) {
        let num = array[i]; // 1, 2, 3, 4, 5

        result += num; // 1, 3, 6, 10, 15....
    }

    return result;
}

// console.log(addNumbers(numbers));
let myResult = addNumbers(numbers);
console.log(myResult);