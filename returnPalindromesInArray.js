/* 
	•	Write a function that determines if a word is a palindrome

	THINGS TO ASK

		- if there are going to be capital letters
		- 	

*/


function findPalindromes(inputArray){
	var result;
	if(inputArray != undefined && inputArray!= null && inputArray.length>0){
		result = inputArray.filter(function(word, index, arr){
			if(isPalindrome(word)){
				console.log(word+" is a Palindrome");
				return true;
			}
			else{
				return false;
			}
		});

	}

	return result;
}


function isPalindrome(word){
	var charAtI, charAtJ, i,j, length;

	if(word!= null && word != undefined){
		i = 0;
		j= word.length-1;
		length = word.length;
		if(length <1 ){
			return false;
		}
		else if(length ===1){
			return true;
		}
		else if(length>1){
			while(i<j){

				charAtI = word.charAt(i);
				charAtJ = word.charAt(j);
				if(charAtI != charAtJ){
					return false;
				}
				i++;
				j--;

			}
		}
		return true;
	}
}

function test(){

	var input1 = [ "civic", "deified", "microsoft", "deleveled", "devoved", "dewed", null, "level", "madam", "raceCar", "radar", "refer", "Net", "repaper", "A", "", "Kris", "hello", "reviver", "rotator", null, "rotor", "sagas", "Palindrome", "solos", "sexes", "stats", "tenet" ];
	var input2;
	var input3 = ["", "", "", "civic"];
	var input4= null;

	var result;
	console.log(" for input1")
	result =findPalindromes(input1);
	console.log(result);
	
	console.log(" for input2")
	result =findPalindromes(input2);
	console.log(result);
	
	console.log(" for input3")
	result =findPalindromes(input3);
	console.log(result);	


	console.log(" for input4")
	result =findPalindromes(input4);
	console.log(result);


}