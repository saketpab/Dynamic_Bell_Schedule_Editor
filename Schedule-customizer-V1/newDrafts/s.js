

fetch("https://api.open-meteo.com/v1/forecast?latitude=40.52&longitude=-74.38&hourly=temperature_2m,weathercode&temperature_unit=fahrenheit&timezone=America%2FNew_York").then((data)=>{return data.json();}).then((completedata)=>{

console.log(completedata)
//console.log(completedata.hourly.temperature_2m[0]);

//for outputted temps
document.getElementById("first-timecard-temp").innerHTML = completedata.hourly.temperature_2m[0] + " °F";
document.getElementById("second-timecard-temp").innerHTML = completedata.hourly.temperature_2m[1] + " °F";
document.getElementById("third-timecard-temp").innerHTML = completedata.hourly.temperature_2m[2] + " °F";
document.getElementById("fourth-timecard-temp").innerHTML = completedata.hourly.temperature_2m[3] + " °F";
document.getElementById("fifth-timecard-temp").innerHTML = completedata.hourly.temperature_2m[4] + " °F";
document.getElementById("sixth-timecard-temp").innerHTML = completedata.hourly.temperature_2m[5] + " °F";
document.getElementById("seventh-timecard-temp").innerHTML = completedata.hourly.temperature_2m[6] + " °F";

//outtputted hours

let currentDate = new Date();
let currentHour = currentDate.getHours();

var time = currentDate.toLocaleTimeString('en-US', { hour12: true });

currentDate.setHours(currentDate.getHours())

console.log(time.substring(0,1))
console.log(time)
//console.log(hourSep(time))
//console.log(AMPM(time))

document.getElementById("first-timecard-time").innerHTML = hourSep(time) + AMPM(time);
time = hourAdder(time,currentDate);
document.getElementById("second-timecard-time").innerHTML = hourSep(time) + AMPM(time);
time = hourAdder(time,currentDate);
document.getElementById("third-timecard-time").innerHTML = hourSep(time) + AMPM(time);
time = hourAdder(time,currentDate);
document.getElementById("fourth-timecard-time").innerHTML = hourSep(time) + AMPM(time);
time = hourAdder(time,currentDate);
document.getElementById("fifth-timecard-time").innerHTML = hourSep(time) + AMPM(time);
time = hourAdder(time,currentDate);
document.getElementById("sixth-timecard-time").innerHTML = hourSep(time) + AMPM(time);
time = hourAdder(time,currentDate);
document.getElementById("seventh-timecard-time").innerHTML = hourSep(time) + AMPM(time);


//for the pictures

//document.getElementById(document.getElementById("first-timecard-time").innerHTML) = getIconURL(
    
})




function hourSep(time){

    if(time.substring(1,2)==":"){

    return time.substring(0,1)

    }

    else{

        return time.substring(0,2)
    }


}

function AMPM(time){

   if(time.substring(9,11)== "AM")
    return " am";

    else    
        return " pm";


}

function hourAdder(time,currentDate){

    
    currentDate.setHours(currentDate.getHours()+1)

    time = currentDate.toLocaleTimeString('en-US', { hour12: true });

    return time;

}

function getIconURL(iconCode){

    return 'icon/${ICON_MAP.get(iconCode)}.svg'
}




