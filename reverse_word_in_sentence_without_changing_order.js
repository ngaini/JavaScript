	


	Write a function that given a sentence, reverses the letters in each word but keeps the order of the words the same.
input: "have a nice day"
output: "evah a ecin yad"

.reverse()


function reverseSentance(stringInput){
    
    var result="";
    if(stringInput.length>0){
    
            // split by space
        var arr = stringInput.split(" ");;
        
        // array.map
        
        var result_arry = arr.map(function(curr){
        
            return reverseString(curr);
        
        })
    
        // array.join(" ");
        result = result_arry.join(" "); 
    
    
    }   
    
     return result;
}



function reverseString(input){
    var result="";
    
    for(var i=0;i<input.length; i++){
        
        result= input.charAt(i)+ result;
    
    }

    return result;
}

/* 
	•	Write a function that given a sentence, reverses the letters in 
		each word but keeps the order of the words the same.


		MUST ASK ABOUT

			- we should capitilize the first letter of the reveresd word
			- 
			- 



*/


function reverseWord(word){
	var length = word.length;
	var reverseWord="";

	for(var i=0; i<word.length; i++){
		reverseWord = word.charAt(i)+reverseWord;
	}

	return reverseWord; 
}


function reverseWordsInString(stringInput){

	var resultStr;
	if(stringInput != undefined && stringInput!=null){

		var stringInput_arr = stringInput.split(" ");
		console.log(stringInput_arr);
		
		if(stringInput_arr.length>0){
			result = stringInput_arr.map(function(word){
			var reverse = reverseWord(word);
			return reverse;
		});
		}

		console.log(result);

		resultStr = result.join(" ");
	}
	else if(stringInput === undefined){
		console.log("Input value is undefined")
	}
	else if(stringInput ===null){
		console.log("Input value is null")
	}
	return resultStr;
}	


function test(){

	var string1 = "Return an array of all the values in the ages array that are 18 or over";

	var string2 = "r e return";

	var string3 = undefined;

	var string4 = null;

	var result;
	console.log(" for string1");
	result= reverseWordsInString(string1);
	console.log(result);

	console.log(" for string2");
	result= reverseWordsInString(string2);
	console.log(result);

	console.log(" for string3");
	result= reverseWordsInString(string3);
	console.log(result);

	console.log(" for string4");
	result= reverseWordsInString(string4);
	console.log(result);	
}


Write a function that given a sentence, reverses the letters in each word but keeps the order of the words the same.
input: "have a nice day"
output: "evah a ecin yad"

.reverse()


function reverseSentance(stringInput){
    
    var result="";
    if(stringInput.length>0){
    
            // split by space
        var arr = stringInput.split(" ");;
        
        // array.map
        
        var result_arry = arr.map(function(curr){
        
            return reverseString(curr);
        
        })
    
        // array.join(" ");
        result = result_arry.join(" "); 
    
    
    }   
    
     return result;
}



function reverseString(input){
    var result="";
    
    for(var i=0;i<input.length; i++){
        
        result= input.charAt(i)+ result;
    
    }

    return result;
}

