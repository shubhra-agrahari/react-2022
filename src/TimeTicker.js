import React, { useEffect, useState }  from 'react';

function TimeTicker() 
{

    const[date, setDate] =  useState(new Date().toLocaleTimeString())

        useEffect(()=>{
           setInterval(()=> {setDate(new Date().toLocaleTimeString(), 1000)
        
           }) 
        
        });
   return <div >Time : {date}</div>
     
    
    
}
export default TimeTicker;
