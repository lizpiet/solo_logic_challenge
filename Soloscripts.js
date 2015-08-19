

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
console.log(combined);											//console.log to check work