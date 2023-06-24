function calcTime(per) {
		
		let passingTime = 5;
		let start = 740;
		let end = 0;
		let hours = 0;
		
		for(let i = 0;i<per.length;i++)
		
		{	
			end = start;
			
			hours = per[i]/60;
			
			hours += 100*hours;
			
			end+=hours;
			
			if(end/100>12)
			{
				end = hourBalancer(Number(end));
				
			}
			
			if(end+per[i] > (end/100) *100 +100)
			
			{
				
				end = Number(specialCaseForMin(end,per[i]%60));
			}
			else
				end+=per[i]%100;
			

			if(end%100>60)
			
			{
				let h = end%100;
				end-=(end%100);
				end+=100;
				end += (h-60);
			}
			
			if((end/100)>12) 
			{
				end-=1200;

			}
			
			console.log(start + " - " + end);
			
			
			start = end + passingTime;
			
			if(start%100>=60)
			{
				let h = start%100;
				start-=(start%100);
				start+=100;
				start += (h-60);

			}

			

			if (Number(start/100)>12)
			{
				start-=1200;

			}
			
		}
		
		return per;
		
	}
	
function hourBalancer(end2){
		let end = end2;
		
		
		if(end/100>12)
		
		{
			
			let counter = 0;
			
			while(end/100>13)
			{
				
				end-=100;
				counter++;
				
			}
			
			end-=1200;
			
			end+=counter*100;
			
		}
		
		return end;
	}
	
function specialCaseForMin(end, time) {
		
	
		let t1 = 60 - (Number(end%100));
		
		end/=100;
		//System.out.println(end);
		
		end*=100;	
		//System.out.println(end);
		
		end+=100;
		//System.out.println(end);
		
		time-=t1;
		
		end+=time;
		
		return end;
}
	

let passing = 5;
let lunch = 24;
let numPeriods = 12;
let originalHomeroom = 5;
let p1= 42;
let p2 = 42;
let p3 = 42;
let p5 = 13;
let p7 = 13;
let p9 = 13;
let p11 = 42;
let p12 = 42;
let p4 = 24, p6 = 24, p8 = 24, p10 = 24;

correctOrder = [originalHomeroom, p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12];

changed = [false,false,false,false,false,false,false,false,false];

calcTime(correctOrder);

let end = 759;
let min = 59;