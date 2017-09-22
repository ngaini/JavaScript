/*   
	find fibonacci number  - recursive solution

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
	var result;
	if(nValue != undefined && nValue != null && nValue >=0 && nValue%1 ===0 ){
		console.log("finding fib of" , nValue);
		if(nValue===0){
			return 0;
		}
		else if(nValue===1){
			return 1;
		}
		else{
			return findFibonacciNumber(nValue-1)+ findFibonacciNumber(nValue-2)
		}



	}



}

function findFibNumber(n){
	var result;
	var result_arr=[];
	for(var i=0;i<=n;i++){
		result_arr.push(-1);
	}
	if(n != null && n != undefined && n>=0 && n%1 ===0){
		result = findFibonacciNumberUsingMomoization(n, result_arr);	
	}
	return result;
}

function findFibonacciNumberUsingMomoization(n, result_arr){
	if(n>=0){
		if(result_arr[n] >= 0){
	console.log(n," IF ",result_arr);

			console.log('if')
			return result_arr[n];
		}
		else{
			console.log('else');
	console.log(n," ELSE ",result_arr);

			if(n===0){
				result_arr[n] =n;
				return result_arr[n];
			}
			else if(n===1){
				result_arr[n] =n;
				return result_arr[n];

			}
			else{
				result_arr[n]= findFibonacciNumberUsingMomoization(n-1, result_arr)+findFibonacciNumberUsingMomoization(n-2,result_arr);
				console.log(result_arr,n);
				return result_arr[n];
			}
		}




	}

	console.log(n," END ",result_arr);
		




}


function test(){

var integer1 = 0;
var integer2 = undefined;
var integer3 = -45;
var integer4 = null;
var integer5 = 45.15;
var integer6 = 5;

var result;


result = findFibNumber(integer1);
console.log("Fibonacci number of "+integer1+" is "+result)
result = findFibNumber(integer2);
console.log("Fibonacci number of "+integer2+" is "+result)
result = findFibNumber(integer3);
console.log("Fibonacci number of "+integer3+" is "+result)
result = findFibNumber(integer4);
console.log("Fibonacci number of "+integer4+" is "+result)
result = findFibNumber(integer5);
console.log("Fibonacci number of "+integer5+" is "+result)

result = findFibNumber(integer6);
console.log("Fibonacci number of "+integer6+" is "+result)
}