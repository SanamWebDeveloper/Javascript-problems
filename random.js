var a = 10;
var b = 3;
var temp = a;
a = b;
b = temp;
console.log("after swap: a=", a, ",", "b=", b);


var x = Math.random() * 10;
console.log("Ans is:", x);

var randomNum = Math.random() * 6;
var output = Math.round(randomNum);
console.log(output);

for(var i = 0; i <10; i++){
    var randomNum = Math.random() * 6;
    var output = Math.round(randomNum);
    console.log(output);
}

var marks = [54,21,8,47,3,58,748,21,85,64,2,368,35,4];
var max = marks[0];

for(var i = 0; i <marks.length; i++){
    if(marks[i] > max){
        max = marks[i];
    }
}

console.log("The biggest:",max);
