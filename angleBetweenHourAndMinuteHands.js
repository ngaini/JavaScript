/* 
	- Given a time of day (as hour and minute),
	 write a function that finds the smallest angle between 
	 the hands as it would be displayed on an analogue clock

	 EDGE CASES 
		- number is not decimal
		-  null
		- undefined
		- 


	Things to ask 

	 - if hour is in 24 hour representation

*/


function findAngle(hour, minute){
	var result = {};
	if(hour != undefined && minute != undefined && hour != null && minute != null && hour%1 ===0 && minute%1 ===0 && hour<=12 && minute <=60 && hour>=0 && minute >=0){
			
			debugger;

			if(hour == 12){
				hour = 0;
			}
			if(minute == 60){

				minute =0;
			}

			var hourHandAngle, minuteHandAngle, absAngle, angle ;


			hourHandAngle = ((hour*60)+minute)*0.5;

			minuteHandAngle = 6*minute;

			absAngle = Math.abs(hourHandAngle - minuteHandAngle);
			angle = 360-absAngle;
				
			console.log(angle, absAngle);	
			if(absAngle<= Math.abs(angle)){
				result.value = absAngle;
			}
			else{
				result.value = angle;
			}

			result.msg = "Success";
			



	}
	else{
		result.msg = "Invalid hour and minute value provided";

	}


	return result;
}


function test(){

	var hour1 = 0;
	var hour2 = undefined;
	var hour3 = -45;
	var hour4 = null;
	var hour5 = 10.15;
	var hour6 = 5;
	var hour7 = 13;
	var hour8 = 12;
	var hour9 = 12;




	var minute1 = 0;
	var minute2 = undefined;
	var minute3 = -45;
	var minute4 = null;
	var minute5 = 10.15;
	var minute6 = 5;
	var minute7 = 60;
	var minute8 = 61;
	var minute9 = 59;


	console.log(" For hour ", hour1, " and minute ", minute1);
	result = findAngle(hour1, minute1);
	console.log(result);

	console.log(" For hour ", hour2, " and minute ", minute2);
	result = findAngle(hour2, minute2);
	console.log(result);

	console.log(" For hour ", hour3, " and minute ", minute3);
	result = findAngle(hour3, minute3);
	console.log(result);

	console.log(" For hour ", hour4, " and minute ", minute4);
	result = findAngle(hour4, minute4);
	console.log(result);

	console.log(" For hour ", hour5, " and minute ", minute5);
	result = findAngle(hour5, minute5);
	console.log(result);

	console.log(" For hour ", hour6, " and minute ", minute6);
	result = findAngle(hour6, minute6);
	console.log(result);

	console.log(" For hour ", hour7, " and minute ", minute7);
	result = findAngle(hour7, minute7);
	console.log(result);

	console.log(" For hour ", hour8, " and minute ", minute8);
	result = findAngle(hour8, minute8);
	console.log(result);

	console.log(" For hour ", hour9, " and minute ", minute9);
	result = findAngle(hour9, minute9);
	console.log(result);





}