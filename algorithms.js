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
