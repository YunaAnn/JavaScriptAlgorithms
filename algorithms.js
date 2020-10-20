function nameSwap(/*str*/)
{
    var nameSwapString = document.getElementById("nameSwap").value;

    //  EXAMPLE
        // 'Doe Jane' -> 'Jane Doe'
        // 'Nowak Jan' -> 'Jan Nowak'

    /*
    var stringToArray = str.split(' ');
    var reverseArray = stringToArray.reverse();
    var reverseString = reverseArray.join(' ');
    return reverseString;
    */

    //Indexes
    /*
    var array = str.split(' ');
    return array[1] + ' ' + array[0];
    */

    //One line 
    //return str.split(' ').reverse().join(' ');

    var nameSwapResult = nameSwapString.split(' ').reverse().join(' ');
    document.getElementById("swapNameResult").innerHTML = nameSwapResult;
}    
