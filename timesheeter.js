// Variables	
	var dayname=new Array(7);
	dayname[0]="Sunday";
	dayname[1]="Monday";
	dayname[2]="Tuesday";
	dayname[3]="Wednesday";
	dayname[4]="Thursday";
	dayname[5]="Friday";
	dayname[6]="Saturday";
	
	var monthname=new Array(12);
	monthname[0]="January";
	monthname[1]="Febuary";
	monthname[2]="March";
	monthname[3]="April";
	monthname[4]="May";
	monthname[5]="June";
	monthname[6]="July";
	monthname[7]="August";
	monthname[8]="September";
	monthname[9]="October";
	monthname[10]="November";
	monthname[11]="December";
	
	var shortmonthname=new Array(12);
	shortmonthname[0]="Jan";
	shortmonthname[1]="Feb";
	shortmonthname[2]="Mar";
	shortmonthname[3]="Apr";
	shortmonthname[4]="May";
	shortmonthname[5]="Jun";
	shortmonthname[6]="Jul";
	shortmonthname[7]="Aug";
	shortmonthname[8]="Sep";
	shortmonthname[9]="Oct";
	shortmonthname[10]="Nov";
	shortmonthname[11]="Dec";
	
	var daysuffix=new Array(31);
	daysuffix[0]="";
	daysuffix[1]="st";
	daysuffix[2]="nd";
	daysuffix[3]="rd";
	daysuffix[4]="th";
	daysuffix[5]="th";
	daysuffix[6]="th";
	daysuffix[7]="th";
	daysuffix[8]="th";
	daysuffix[9]="th";
	daysuffix[10]="th";
	daysuffix[11]="th";
	daysuffix[12]="th";
	daysuffix[13]="th";
	daysuffix[14]="th";
	daysuffix[15]="th";
	daysuffix[16]="th";
	daysuffix[17]="th";
	daysuffix[18]="th";
	daysuffix[19]="th";
	daysuffix[20]="th";
	daysuffix[21]="st";
	daysuffix[22]="nd";
	daysuffix[23]="rd";
	daysuffix[24]="th";
	daysuffix[25]="th";
	daysuffix[26]="th";
	daysuffix[27]="th";
	daysuffix[28]="th";
	daysuffix[29]="th";
	daysuffix[30]="th";
	daysuffix[31]="st";

//Utility Functions
function getDateString(date)
{
	return date.getDate() + daysuffix[date.getDate()] + " of " + shortmonthname[date.getMonth()];
}

function getLongDateString(date)
{
	return dayname[date.getDay()] + " " + date.getDate() + daysuffix[date.getDate()] + " of " + monthname[date.getMonth()];
}

//Button Listeners	
$('#button-today').live("click", function(){

	var today=new Date();
	
	$('#todayHeader').html(getLongDateString(today));

});

$('#button-daily').live("click", function(){

	var today = new Date();
	var start = new Date();
	var end = new Date();
	
	start.setDate(today.getDate() - (today.getDay()-1));
	end.setDate(today.getDate() + (7 - today.getDay()));
	$('#dailyHeader').html(getDateString(start) + " to " + getDateString(end));

});

$('#button-weekly').live("click", function(){

	var today = new Date();
	var start = new Date();
	var end = new Date();
	
	start.setDate(today.getDate() - (today.getDay()-1));
	end.setDate(today.getDate() + (7 - today.getDay()));
	$('#weeklyHeader').html(getDateString(start) + " to " + getDateString(end));

});
