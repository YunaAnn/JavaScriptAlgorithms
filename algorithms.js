function nameSwap()
{
    //  EXAMPLE
        // 'Doe Jane' -> 'Jane Doe'
        // 'Nowak Jan' -> 'Jan Nowak'

    var nameSwapString = document.getElementById("nameSwap").value;

    /*
    //option 1 :
    var stringToArray = nameSwapString.split(' ');
    var reverseArray = stringToArray.reverse();
    var reverseString = reverseArray.join(' ');
    document.getElementById("swapNameResult").innerHTML = reverseString;
    */

    //option 2 : Indexes
    /*
    var array = nameSwapString.split(' ');
    var result = array[1] + ' ' + array[0];
    document.getElementById("swapNameResult").innerHTML = result;
    */

    //option 3 : One line
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
    //1. cat -> tac
    //2. rain -> niar

    var reverseString = document.getElementById("reverseString").value;
    
    var reverseStringResult = reverseString.split('').reverse().join('');

    //option 2:
    //var reverseStringResult = [...reverseString].reverse().join('');

    //option 3 - for loop:
    /*
        var reverseStringResult = '';
        for (var i = reverseString.length-1; i >= 0 ; i--)
        {
            reverseStringResult += reverseString; 
        }
    */

    document.getElementById("reverseStringResult").innerHTML = reverseStringResult;
}


function repeatString()
{
    //EXAMPLE
    //'cat', 5 -> 'catcatcatcatcat'
    //'rain, 4' -> 'rainrainrainrain' 

    var repeatStringString = document.getElementById("repeatStringString").value;
    var repeatStringNumber = document.getElementById("repeatStringNumber").value;

    var finalString = '';

    if(repeatStringNumber <= 0)
    {
        finalString = ' Error. Incorrect data. ';
    }

    //for loop
    for (let index = 1; index <=repeatStringNumber; index++)
    {
        finalString += repeatStringString; 
    }

    //option 2 :  while loop
    /*
    while (num > 0) 
    {
        finalString += str; 
        num--;
    }
    */

    document.getElementById("repeatStringResult").innerHTML = finalString;
}

function alphabetizeString()
{
    //EXAMPLE
    //cat -> act
    //rain -> ainr  

    var alphabetizeStr = document.getElementById("alphabetizeString").value;

    var alphabetizeStrResult = alphabetizeStr.split('').sort().join('');
    //option 2
    //var alphabetizeStrResult = [...alphabetizeStr].sort().join('');

    document.getElementById("alphabetizeStringResult").innerHTML = alphabetizeStrResult;
}

function findTheLongestString()
{

    //EXAMPLE
    //Hello, what's up? -> Hello
    //I like trains :3 -> trains  

    var findTheLongestStringStr = document.getElementById("findTheLongestStringInput").value;

    var noSpecialCharacters = findTheLongestStringStr.replace(/\W/g,' ');
    var longestWord = '';
    var wordArray = noSpecialCharacters.split(' ');

    for(let i=0; i<wordArray.length; i++ )
    {
        if(wordArray[i].length > longestWord.length)
        {
            longestWord = wordArray[i];
        }
    }

    document.getElementById("findTheLongestStringResult").innerHTML = longestWord;
}

function findTheLargestElement()
{

    //EXAMPLE 
    //1. 1,3,10,4,6,7,8 -> 10
    //2. 302,17,35,66,100,1 -> 302

    var findTheLargestElementData = document.getElementById("findTheLargestElementInput").value;
    var largestElement = null;
    var findTheLargestElementSplit = findTheLargestElementData.split(',');

    largestElement = Math.max.apply(null,findTheLargestElementSplit);

    document.getElementById("findTheLargestElementResult").innerHTML = largestElement;

}  

function findTheSmallestElement()
{

    //EXAMPLE 
    //1. 1,3,10,4,6,7,8 -> 1
    //2. 302,17,35,66,100,1 -> 1

    var findTheSmallestElementData = document.getElementById("findTheSmallestElementInput").value;
    var smallestElement = null;
    var findTheSmallestElementSplit = findTheSmallestElementData.split(',');

    smallestElement = Math.min.apply(null,findTheSmallestElementSplit);

    document.getElementById("findTheSmallestElementResult").innerHTML = smallestElement;

}  
