// palindrome

/*
	THINGS TO ASK

		- if there are going to be capital letters 
*/

function isPalindrome(word){

	var i = 0;
	var j = word.length-1;
	var length = word.length;
	if(length<1){
		return false;
	}
	else if(length===1){
		return true;
	}
	else if(length>=2){
		while(i<j){
			console.log(i,",",j);
			if(word.charAt(i) != word.charAt(j)){
				return false;
			}
			i++;
			j--;
		}
	}



	return true;


}

