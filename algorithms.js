function nameSwap()
{
    //  EXAMPLE
        // 'Doe Jane' -> 'Jane Doe'
        // 'Nowak Jan' -> 'Jan Nowak'

    /*
    var stringToArray = nameSwapString.split(' ');
    var reverseArray = stringToArray.reverse();
    var reverseString = reverseArray.join(' ');
    document.getElementById("swapNameResult").innerHTML = reverseString;
    */

    //Indexes
    /*
    var array = nameSwapString.split(' ');
    var result = array[1] + ' ' + array[0];
    document.getElementById("swapNameResult").innerHTML = result;
    */

    var nameSwapString = document.getElementById("nameSwap").value;
    
    var nameSwapResult = nameSwapString.split(' ').reverse().join(' ');
    document.getElementById("swapNameResult").innerHTML = nameSwapResult;
}   

function palindrome()
{
    //EXAMPLE PALIDROMES:
    //1. 'Never odd or even' 
    //2. 'Do geese see God?'
    
    var palindromeString = document.getElementById("palindrome").value;

    var palindromeRemovedNonWordsCharacters = palindromeString.replace(/\W/g, '');
    var caseInsensitiveString = palindromeRemovedNonWordsCharacters.toLowerCase();
    var reversedString = caseInsensitiveString.split('').reverse().join('');
    var palindromeResult = caseInsensitiveString === reversedString;

    document.getElementById("palindromeResult").innerHTML = palindromeResult;
}

function reverseString()
{   
    //EXAMPLE:
    //1. cat, 5 -> catcatcatcatcat
    //2. rain, 4' -> rainrainrainrain

    var reverseString = document.getElementById("reverseString").value;
    
    var reverseStringResult = reverseString.split('').reverse().join('');
    document.getElementById("reverseStringResult").innerHTML = reverseStringResult;

}


function repeatString()
{
    //EXAMPLE
    //'cat', 5 -> 'catcatcatcatcat'
    //'rain, 4' -> 'rainrainrainrain' 

    var str = document.getElementById("repeatStringString").value;
    var num = document.getElementById("repeatStringNumber").value;

    var finalString = '';

    if(num <= 0)
    {
        finalString = ' Error. Incorrect data. ';
    }

    //for loop
    for (var index = 1; index <=num; index++)
    {
        finalString += str; 
    }

    //or while loop
    /*
    while (num > 0) 
    {
        finalString += str; 
        num--;
    }
    */

    document.getElementById("repeatStringResult").innerHTML = finalString;
  
}


