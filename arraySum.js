var numbers = [45, 65, 78, 12, 3, 54, 65, 10];

/*var sum = 0;
for(var i = 0; i < numbers.length; i++){
    sum+=numbers[i];
}*/
//console.log("Result:", sum);

var newSum = sumArray(numbers);
console.log(newSum);

function sumArray(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
    sum+=numbers[i];
    }
return sum;    
}