
var durations =  [5, 13, 13, 13, 42, 42, 42, 42, 42, 24, 24, 24, 24];

console.log(durations)
//periodOdd(20,durations)

console.log(periodOdd(20,durations)
)


function periodOdd(newOddPeriod, durations) {
    
    //console.log("this one: " + newOddPeriod)
       // console.log("HERERER" + durations)
            let currentOddTime = durations[1];
            
            if (newOddPeriod > currentOddTime) {
                let timeTaken = (newOddPeriod*3)  - (currentOddTime*3) ;
                console.log("time that has been taken: " + timeTaken)
                
                let timeCounter2 = 0;
                
                while (timeCounter2<=timeTaken)
                {
                    
                    
                    for(let i = 9; i < durations.length; i++)	
                    {
                        timeCounter2++;
                        
                        if(timeCounter2>timeTaken)
                        
                        {
                            break;
                            
                        }
                    
                        durations[i]--;
                        
                        
                    }
                    
                    
                }
                
            }
            
            if(newOddPeriod < currentOddTime) {
    
                let timeGiven = (currentOddTime *3) - (newOddPeriod * 3);
    
                let timeCounter2 = 0;
                
                while (timeCounter2<=timeGiven) {
    
                    
                    for(let i = 9; i < durations.length ;i++) {
                        
                        timeCounter2++;
                        
                        if(timeCounter2>timeGiven)
                        {
                            break;
                            
                        }
                        
                        durations[i]++;
                        
                        
                    }
                    
                    
                }
                
                
            }
            
            durations[1] = newOddPeriod;
            durations[2] = newOddPeriod;
            durations[3] = newOddPeriod;	
                
            return durations;
        
    }
    