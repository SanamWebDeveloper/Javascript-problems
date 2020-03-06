var numbers = [12, 45, 21, 1, -3, 6, -8, 68];
var smallest = numbers[0];

for(var i = 0; i < numbers.length; i++){
    var num = numbers[i];
    if(num < smallest){
        smallest = num;
    }
}
console.log("Smallest:",smallest);








/*var marks = [54,21,8,47,3,58,748,21,85,64,2,368,35,4];
var max = marks[0];

for(var i = 0; i <marks.length; i++){
    if(marks[i] > max){
        max = marks[i];
    }
}

console.log("The biggest:",max);*/
