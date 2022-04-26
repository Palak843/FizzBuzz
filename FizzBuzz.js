function fizzBuzz()
{
console.log("Hello World");
for (var i = 1; i <=100;i++)
{
    let resultString = '';
    if (i%3 === 0)
    {
        resultString += "Fizz";
    }
   
    if(i%5 === 0 )
    {
        resultString += "Buzz";
    }
    if(i%7 === 0 )
    {
        resultString += "Bang";
    }
    if(i%11 === 0 )
    {
        resultString = "Bong";
    }
    if (i%13 === 0)
    {
        const bIndex = resultString.indexOf("B");
        if (bIndex === -1)
        {
            resultString +="Fezz";
        }
        else{
            resultString = resultString.slice(0,bIndex)+ "Fezz" + resultString.slice(bIndex);
        }
    }
    if (resultString === '')
    {
        resultString += i;
    }
    console.log(resultString);
}
}
fizzBuzz();









