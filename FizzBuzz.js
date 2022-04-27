function fizzBuzz(){
console.log("Hello World");

for (var i = 1; i <=100;i++){
    let resultString = '';
    var arr = [];
    if (i%3 === 0){
        resultString += "Fizz";
        arr.push("Fizz");
        //console.log(i);
    }
   if(i%5 === 0 ){
        resultString += "Buzz";
        arr.push("Buzz");
        //console.log(i);
    }
    if(i%7 === 0 ){
        resultString += "Bang";
        arr.push("Bang");
        //console.log(i);
    }
    if(i%11 === 0 ){
        resultString = "Bong";
        arr = []
        arr.push("Bong");
        //console.log(i);
    }
    if (i%13 === 0){
        
        const bIndex = resultString.indexOf("B");
        

        if (bIndex === -1){
            resultString +="Fezz";
        }
        else{
            resultString = resultString.slice(0,bIndex)+ "Fezz" + resultString.slice(bIndex);
        }
        const bIndex2 = arr.forEach(checkval)
        function checkval(printval)
        {
            printval.indexOf("B");
        }
        if (bIndex2 === -1){
            arr.push("Fezz");
        }
        else{
            console.log(bIndex2)
            resultString = resultString.slice(0,bIndex)+ "Fezz" + resultString.slice(bIndex);
        }
    }
    if (i%17 === 0){
        arr = arr.reverse();
    }
    
    if(arr.length == 0)
    {
        arr.push(i)
    }
    if (resultString === ''){
        resultString += i;
    }
    console.log(resultString);
    console.log(arr.toString());
}
}
fizzBuzz();









