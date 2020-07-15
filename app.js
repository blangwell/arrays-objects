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
