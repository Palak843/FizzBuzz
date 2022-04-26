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
    if (resultString === '')
    {
        resultString += i;
    }
    console.log(resultString);
}
}
fizzBuzz();


