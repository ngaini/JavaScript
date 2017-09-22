/*   
	find fibonacci number 

	Edge cases
	   - if input is ZERO
	   - if input is -ve
	   - undefined
	   - null
	   - decimal number
	   - passing String
	   - inside String passing number

*/



function findFibonacciNumber(nValue){

	if(nValue != null && nValue != undefined && nValue >=0 && nValue%1===0){
		if(nValue === 0){
			return 0;
		}
		else if(nValue ===1){
			return 1;

		}
		else if(nValue){
			var last, second_last, result;

			second_last =0;
			last =1;
			for(var i=2; i<= nValue; i++){
				console.log('Finbonacci number :',i," Last and second last values are",last, ' ',second_last);
				result = last +second_last;
				second_last = last;
				last = result;



			}
			return result;
		}


	}
	else{
		return -1;
	}


}

function test(){

var integer1 = 0;
var integer2 = undefined;
var integer3 = -45;
var integer4 = null;
var integer5 = 45.15;
var integer6 = 5;

var result;


result = findFibonacciNumber(integer1);
console.log("Fibonacci number of "+integer1+" is "+result)
result = findFibonacciNumber(integer2);
console.log("Fibonacci number of "+integer2+" is "+result)
result = findFibonacciNumber(integer3);
console.log("Fibonacci number of "+integer3+" is "+result)
result = findFibonacciNumber(integer4);
console.log("Fibonacci number of "+integer4+" is "+result)
result = findFibonacciNumber(integer5);
console.log("Fibonacci number of "+integer5+" is "+result)

result = findFibonacciNumber(integer6);
console.log("Fibonacci number of "+integer6+" is "+result)
}
