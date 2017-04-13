// to find prime numbers in a range

function printPrimeNumbers(start, end){
	
	let result = [];

	for(let i = start; i<= end; i++){
		let count =0;
		for(let j=i; j>=1; j--){

			if(i%j ==0){
				count++;
			}
		}
		
		if(count ==2 || (i ==1 && count == 1)){

			result.push(i);
		}


	}

	return result;


}




