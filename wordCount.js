var words = "I am a good person. Thank you buddy.";
var sum = 0;

for(var i = 0; i<words.length; i++){
    if(words[i] == " " && words[i-1] != " "){
        sum++;
    }
}
sum++;
console.log(sum);