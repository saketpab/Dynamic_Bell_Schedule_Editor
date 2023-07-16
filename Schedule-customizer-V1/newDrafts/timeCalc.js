//this code takes in the time for each period and then claculates the time frames for each period 


//these are the regular durations of each period for a normal school day
// 5 min homeroom, 42 min first period, etc.
const defaultDurations = [5, 42, 42, 42, 24, 13, 24, 13, 24, 13, 24, 42, 42];

//month, date, and year do not matter in this case (the inputted values are random) 
//all that matters is the hours and minutes, as 7:40 signify the beginining of homeroom/ the school day
var startTime = new Date(2023,9,5, 7,40)

//console.log(startTime.getHours() + ":" + startTime.getMinutes())

//console.log(date)

//passing time is the amount of time a student gets to walk between classes (it is usually pre-set to 5 minutes)
passingTime = 5

console.log(timeFrameCalculation(defaultDurations))


//this function takes in an array of values that state the length of each period and use them to calculate the time frame of each period 
function timeFrameCalculation1(durations){

    let timeFrames = [];

    for (let i = 0; i < durations.length; i++) {

    //print
     console.log(startTime)

     //pushes start time of a period into the array
     timeFrames.push(startTime.getHours() + ":" + startTime.getMinutes())

    //adds the length of the period to the start time of the period 
     startTime.setMinutes(startTime.getMinutes() + durations[i])

     //puts the end time of the period into the array
     timeFrames[i] = timeFrames[i] + "-" + startTime.getHours() + ":" + startTime.getMinutes()   

    // console.log(startTime)
    //adds the passing time for the next starting time
     startTime.setMinutes(startTime.getMinutes() + passingTime)


    }

    return timeFrames

} 



////////OLD CODE BELOW
////////OLD CODE BELOW////
////////OLD CODE BELOW
////OLD CODE BELOW///
/////OLD CODE BELOW/////
///OLD CODE BELOW/////
///OLD CODE BELOW


function timeFrameCalculation(durations) {
    let startTime = 740; 
    const passingTime = 5; 
    let endTimeAdded; 
    let timeFrames = [];

    for (let i = 0; i < durations.length; i++) {
        
        endTimeAdded = startTime + durations[i];

        if (endTimeAdded % 100 >= 60 || durations[i] >= 60) {

            let u = (endTimeAdded % 100); 
            endTimeAdded -= (endTimeAdded % 100);
            endTimeAdded += 100; 
            endTimeAdded += (u - 60);

        }

        if ( ((endTimeAdded/100) | 0) > 12) {

            endTimeAdded -= 1200;

        } 

        timeFrames.push(((startTime | 0) + " - " + (endTimeAdded | 0)));

// Skip passtime adding for oldClasses - duration array 1,2,3 are passtime slots
	console.log("i=" + i + "startTime="+ startTime + " endTimeAdded " + endTimeAdded);

 /*    if ( i==4 || i ==6 || i== 8 ) { 
		startTime = endTimeAdded;
	}
	else
	{
		startTime = endTimeAdded + passingTime; 
		
	}
*/
	startTime = endTimeAdded + passingTime; 
	console.log("startTime="+ startTime + " endTimeAdded " + endTimeAdded);

        if (startTime % 100 >= 60) {
            
            let h = (startTime % 100); 
            startTime -= (startTime % 100);
            startTime += 100; 
            startTime += (h - 60);

        }

        if (((startTime/100) | 0) > 12) {
            startTime -= 1200;
        }

    }    

    return timeFrames;

}