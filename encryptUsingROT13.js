/* 

	•	Rot13: https://en.wikipedia.org/wiki/ROT13 - Given an input string, write a function that will encode the string using rot13.
*/



 function encryptRot13(input){

 	var result = {};
 	if(input != null && input != undefined){

 		if(input.length<=0 || input%1 >=0 ){
 			result.message = "invalid input";
 			return result;
 		}
 		else{

 			var length = input.length;
 			var encryptedResult=""
 			for(var i=0; i<length; i++){

 				var charAtI = input.charAt(i);
 				var charCodeAtI = input.charCodeAt(i);

 				if((charAtI >= 'a' && charAtI<='z')||(charAtI >= 'A' && charAtI<='Z')){
 					var encryptedCharCodeAtI ;
 					if((charAtI >= 'a' && charAtI>='z')){

 						console.log(charAtI, charCodeAtI,encryptedCharCodeAtI)
 						if(encryptedCharCodeAtI>("a".charCodeAt(0)+12)){
 							console.log(" greater than n")
 							encryptedCharCodeAtI = charCodeAtI-13;
 						}
 						else{
 							encryptedCharCodeAtI = charCodeAtI+13;
 						}
 					}
 					else if((charAtI >= 'A' && charAtI>='Z')){
 						console.log(charAtI, charCodeAtI,encryptedCharCodeAtI)

 						if(encryptedCharCodeAtI>("A".charCodeAt(0)+12)){
 							console.log(" greater than n")

 							encryptedCharCodeAtI = charCodeAtI-13;
 						}
 						else{
 							encryptedCharCodeAtI = charCodeAtI+13;
 						}
 					}

 					var encryptedCharAtI = String.fromCharCode(encryptedCharCodeAtI);



 				}
 				else{
 					result.message = "Invalid character at position "+i+1;
 					return result;
 				}

 				encryptedResult = encryptedResult+encryptedCharAtI;

 			}

 			result.value = encryptedResult;

 		}




 	}
 	else{
 		result.message = "Invalid input";
 	}


 	return result;







 }

function test(){

var string1 =  undefined;
var string2 =  null;
var string3 =  0;
var string4 =  "153.3";
var string5 =  "154";
var string6 =  "-153.3";
var string7=  "abcxyz";
var string8=  "AbcXyz";

	var result;
	console.log("Test for "+string1);
	result = encryptRot13(string1);
	console.log(result);

	console.log("Test for "+string2);
	result = encryptRot13(string2);
	console.log(result);

	console.log("Test for "+string3);
	result = encryptRot13(string3);
	console.log(result);

	console.log("Test for "+string4);
	result = encryptRot13(string4);
	console.log(result);

	console.log("Test for "+string5);
	result = encryptRot13(string5);
	console.log(result);

	console.log("Test for "+string6);
	result = encryptRot13(string6);
	console.log(result);

	console.log("Test for "+string7);
	result = encryptRot13(string7);
	console.log(result);

	console.log("Test for "+string8);
	result = encryptRot13(string8);
	console.log(result);





}


function encryptRot13(input){

		debugger;
	var result={}

	if(input != null && input != undefined){
 		if(input.length<=0 || input%1 >=0 ){
 			result.message = "invalid input";
 			return result;
 		}
 		else{
 			var encryptedResult="";

 			for(var i=0; i<input.length;i++ ){
 				var charAtI = input.charAt(i);
 				var charCodeAtI,encryptedcharCodeAtI;
 				charCodeAtI = input.charCodeAt(i);
 				if(charAtI>='a' && charAtI<='m'){
 					charCodeAtI +=13; 
 				}
 				else if(charAtI>='A' && charAtI<='M'){
 					charCodeAtI +=13; 
 				}
 				else if(charAtI>='n' && charAtI<='z'){
 					charCodeAtI -=13; 
 				}
 				else if(charAtI>='N' && charAtI<='Z'){
 					charCodeAtI -=13; 
 				}
 				else{
 					result.message = "invalid input"+ charAtI+ "at position"+i+1;
 					return result;
 				}

 				encryptedResult += String.fromCharCode(charCodeAtI); 


 			}

 			result.value = encryptedResult;
 			result.message = "Success"
 		}


 	}
 	else{
 			result.message = "invalid input";

 	}	

 	return result

}