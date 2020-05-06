if(process.argv.length < 4){//check the cmd args would not overflow
	console.log("invalid params");
	return;
}

/*
	return day in string format
	params
		strday str format of day "Mon","Tue","Wed","Thu","Fri","Sat","Sun"
		k number of days after then the strday
*/
function getDays(strday,k){
	const setDays = {"mon":0,"tue":1,"wed":2,"thu":3,"fri":4,"sat":5,"sun":6};//o(1) query
	const outputDay = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];//o(1) print
	if(!strday || setDays[strday.toLowerCase()] == undefined || !(k>=0 && k <=500))//parmas check
	{
		console.log("not invalid input");
		return;
	}

	console.log(outputDay[
				(setDays[strday.toLowerCase()] + (k % 7))%7
			]
	);
}

getDays(process.argv[2],process.argv[3]);