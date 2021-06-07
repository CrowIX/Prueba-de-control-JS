'use strict';

function conversion(num, base) {
    if (base === 2) {
        console.log(num.toString(base));
        
    } else if (base === 10){
        let transform = num.toString().split('').reverse();
        let newNum = 0;
        for(let i = 0; i < transform.length; i++) { 
             newNum += transform[i]*Math.pow(2, i);   
        } 
        console.log(newNum);
    }
}

conversion(11001, 10);