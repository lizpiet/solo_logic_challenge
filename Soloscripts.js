
//QUESTION 1

		var primes = [2, 3, 5, 7, 11, 13, 17, 19];
		var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];
		var newNonPrimes = nonPrimes.reverse();   				//reverse nonPrime
		var combined = [];										// new array
   
var combinedFunction = function(){								//Create new function 
	for ( i = 0; i < nonPrimes.length; i++ ){					//loop the arrays
			combined.push((primes[i] + newNonPrimes[i]));		//combine array 1 and 2, add them
		}	
			};


combinedFunction();												// return function
console.log(combined);	//console.log to check work

//QUESTION 2


$(document).ready(function(){

var numbers1 = [4, 1, 6, 5, 8];
var numbers2 = [7, 3, 2, 9, 10];


var numbers3 = $.merge(  numbers1 ,  numbers2  )				 //merge in jQUery

 function sortedArray(a,b){							// comparator function
return a - b;										//because values get sorted lexiconically,
													// 10 will end up in a funky spot
}
numbers3.sort(sortedArray);							// call function

console.log(numbers3);								// console.log to check work

});
