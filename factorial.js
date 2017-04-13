// •	n! means n × (n − 1) × ... × 3 × 2 × 1
// 		For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
//  	and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
//  	Find the sum of the digits in the number 100!

var factorial = function(value){

	if(value == 0){
		return 1;
	}
	return value * factorial(value-1);


} 


var factorialResultSum = function(value){
	if(!(typeof value == 'number' && value%1 == 0)){
		return -1;
	}
	var result = factorial(value);

	var total = addResult(result);
	// var resultStr = result.toString();
	// var total = 0;
	// for(var i =0 ; i< resultStr; i++){

	// 	var currVal = parseInt(resultStr.charAt(i));

	// 	total += currVal;
	// }

	return total;
}


var addResult = function(sum){

	var rem =0;
	var total =0;
	while(sum>0){
		rem = sum%10;
		total += rem;
		sum = sum/10;


	}
	return total;

}