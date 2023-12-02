var name = "SouravDey";
var age = 27;

// Array

var users = ["Sourav" , "Harkirat" , "Gaurav"];
// var user1 = "Sourav"
// var user2 = "Harkirat"
// var user3 = "Gaurav"





// var user1 = "Sourav";
// var age1 = 27;

// var user2="Harkirat";
// var age2 = 28;

// Write above in a array

// var users_and_age = [

//     "Sourav" , 27 , "Harkirat" , 28

// ]

// Better way to to this use OBJECTS 

var user1 = {
    name: "Sourav" ,
    age: 27 ,
    email:"deysourav756@gmail.com"
}

// var user1 = "Sourav"
// var age1 = 27
// var email1 = "deysourav756@gmail.com"


var user2 = {
    name: "Harkirat" ,
    age: 28
}




// console.log(user1 , user2 );


// Loops

var userss = ["Sourav" , 'Harkirat' , "Gaurav"]

// console.log(userss);

// console.log(userss[0]);
// console.log(userss[1]);
// console.log(userss[2]);


for (var i = 0 ; i<userss.length ; i++){
    // console.log(userss[i]);
}

// Functions


// var usersss = [
//     {name:"Sourav" , age : 27},
//     {name:" Harkirat" , age : 28}
// ]

// console.log(usersss[0].age);


// for ( var i = 0 ; i<usersss.length ; i++){
//     console.log(usersss[i].name + 's age is ' + usersss[i].age );
// }

// for ( var i = 0 ; i<usersss.length ; i++){
//     console.log("age of " + usersss[i].name + ' is ' + usersss[i].age );
// }


// Same context , not necessary to write for loops for similar type of work , Use FUNCTIONS



function printAllUsers(usersss){
    for ( var i = 0 ; i<usersss.length ; i++){
             console.log("age of " + usersss[i].name + ' is ' + usersss[i].age );
}
}



var usersss = [
    {name:"Sourav" , age : 27},
    {name:" Harkirat" , age : 28}
]

printAllUsers(usersss);


// Sum of 1 to 100

function sumAll(startIndex , endIndex){
    var sum = 0;
    for(var i = startIndex ; i <=  endIndex ; i++){
        // sum = sum + i 
        sum += i;
    }

    return sum
}

console.log(sumAll(1,100));


// Function can take other function as input

// function sum(index1, index2) {
//   return index1 + index2;
// }

// function multiply(index1, index2) {
//   return index1 * index2;
// }

// function divide(index1, index2) {
//   return index1 / index2;
// }

// function doArithmatic(firstEl, secondEl, arithmeticFn) {
//   return arithmeticFn(firstEl, secondEl);
// }

// console.log(doArithmatic(1, 2, sum)); //3
// console.log(doArithmatic(1, 2, multiply)); //2

// Pattern creation

// function createPattern(numerOfRows) {
//   for (var i = 0; i < numerOfRows; i++) {
//     var stringPrint = "";
//    for(var j = 0; j<i+1; j++){
//       stringPrint = stringPrint + "*";
//    }

//    console.log(stringPrint);
//   }
// }

// createPattern(10)

//1

// *

//2

// *
// **

// 3

// *
// **
// ***

/*

**
****
******
********

  */


function starLine(n){
    var answer = "";
    for (var i = 0 ; i < n; i++){
        answer+="**"
    }
    console.log(answer);
}



function starryPattern(n) {

//   if (n == 1) {
//     console.log("**");
//   }

//   if (n == 2) {
//     console.log("**");
//     console.log("****");
//   }

//   if (n == 3) {
//     console.log("**");
//     console.log("****");
//     console.log("******");
//   }



// this problem can be solved By Loop


for ( var i = 0; i<=n; i++){
    starLine(i)
}

}

console.log(starryPattern(3));

//   5

// console.log("**");
// console.log("****");
// console.log("******");
// console.log("********");
